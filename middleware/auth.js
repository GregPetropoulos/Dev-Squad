// Validating the token if it exists
const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // Get Token from header
  const token = req.header('x-auth-token');

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'no token authorization denied' });
  }

  //   Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
// This allows us to use req.user to get the users id or profile in any protected routes
    req.user = decoded.user;
    next();
  } catch (err) {
      res.status(401).json({msg: 'Token is not valid'});
  }
};
