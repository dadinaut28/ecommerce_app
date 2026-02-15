const jwt = require("jsonwebtoken");

async function verifyTokenValidity(req, res) {
  try {
    const { token } = req.body;
    jwt.verify(token, process.env.SECRET_TOKEN_PASSWORD, (err, payload) => {
      if (err) {
        return res.status(400).json({
          message: "INVALID_JWT_TOKEN",
        });
      }

      res.status(200).json({
        message: "VALID_TOKEN",
        payload,
      });
    });
  } catch (err) {
    res.status(500).json({
      message: "INTERNAL_SERVER_ERROR",
    });
  }
}

module.exports = verifyTokenValidity;
