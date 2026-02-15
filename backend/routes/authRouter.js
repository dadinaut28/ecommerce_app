const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { createNewUser } = require("../db/queries");
const pool = require("../db/pool");

const authRouter = new Router();

authRouter.post("/register", async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;

    if (firstname && lastname && email && password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      await createNewUser(email, hashedPassword, firstname, lastname, "client");

      res.status(201).json({
        message: "A new user has been created !",
      });
    } else {
      res.status(400).json({
        message: "BAD_REQUEST ! Verify input and retry.",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "INTERNAL_SERVER_ERROR",
    });
    console.log(err);
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const { rows } = await pool.query(
        "SELECT id, email, password, role FROM users WHERE email = $1",
        [email],
      );
      const findedUser = rows[0];

      if (!findedUser) {
        return res.status(404).json({
          message:
            "No user with this email has been found ! Your email is incorrect !!",
        });
      }

      const matchPassword = await bcrypt.compare(password, findedUser.password);

      if (!matchPassword) {
        return res.status(404).json({
          message: "Incorrect password !!",
        });
      }

      await jwt.sign(
        { userId: findedUser.id, userRole: findedUser.role },
        process.env.SECRET_TOKEN_PASSWORD,
        (err, token) => {
          if (err) {
            return res.status(500).json({
              message: "INTERNAL_SERVER_ERROR",
            });
          }
          res.status(201).json({
            message: "SUCCESSFUL_AUTHENTICATION",
            token,
          });
          req.user = findedUser;
        },
      );
    } else {
      res.status(400).json({
        message: "BAD_REQUEST ! Verify input and retry.",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "INTERNAL_SERVER_ERROR",
    });
  }
});

module.exports = authRouter;
