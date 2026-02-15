const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "ACCESS_DENIED_AUTH_HEADER_MISSING",
    });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "ACCESS_DENIED_TOKEN_MISSING",
    });
  }

  jwt.verify(token, process.env.SECRET_TOKEN_PASSWORD, (err, payload) => {
    if (err) {
      return res.status(401).json({
        message: "ACCESS_DENIED_TOKEN_INVALID",
      });
    }
    const { userId } = payload;
    req.userId = userId;

    next();
  });
}

module.exports = verifyToken;
