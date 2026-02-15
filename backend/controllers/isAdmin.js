const jwt = require("jsonwebtoken");

async function isAdmin(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({
      message: "UNAUTHORIZED_AUTH_HEADER_MISSING",
    });
  }
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "UNAUTHORIZED_TOKEN_MISSING",
    });
  }

  jwt.verify(token, process.env.SECRET_TOKEN_PASSWORD, (err, payload) => {
    if (err) {
      return res.status(401).json({
        message: "ACCESS_DENIED_TOKEN_INVALID",
      });
    }
    const { userRole } = payload;

    if (userRole !== "admin") {
      return res.status(401).json({
        message: "ACCESS_DENIED_UNAUTHORIZED_NOT_ADMIN",
      });
    }

    next();
  });
}

module.exports = isAdmin;
