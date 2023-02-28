const { verify } = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
  
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).send("Missing or invalid authentication token");
    }
  
    const token = authHeader.split(" ")[1];
    try {
      const decodedToken = verify(token, process.env.SECRET_KEY);
      req.user = decodedToken;
      next();
    } catch (err) {
      return res.status(401).send("Invalid authentication token");
    }
  };
  
  module.exports = authenticate;