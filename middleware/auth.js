// authMiddleware.js
import jwt from 'jsonwebtoken'

const authMiddleware = (req, res, next) => {
  // Check if the request contains an authorization header
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header is missing' });
  }

  // Extract the token from the authorization header
  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Token is missing' });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    // If token is valid, attach the decoded token to the request object
    req.decodedToken = decodedToken;
    next(); // Call the next middleware or route handler
  });
};

export default authMiddleware;
