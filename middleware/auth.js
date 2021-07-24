
const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    jwt.verify(token, config.get('jwtSecret'), (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: 'Token is not valid' });
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } catch (err) {
    console.error('something wrong with auth middleware');
    res.status(500).json({ msg: 'Server Error' });
  }
};

















// // Validating the token if it exists
// const jwt = require('jsonwebtoken');
// const config = require('config');

// module.exports = function (req, res, next) {
//   // Get Token from header
//   const token = req.header('x-auth-token');

//   // Check if no token
//   if (!token) {
//     return res.status(401).json({ msg: 'no token authorization denied' });
//   }

//   //   Verify token
//   try {
//     const decoded = jwt.verify(token, config.get('jwtSecret'));
// // This allows us to use req.user to get the users id or profile in any protected routes
//     req.user = decoded.user;
//     next();
//   } catch (err) {
//       res.status(401).json({msg: 'Token is not valid'});
//   }
// };
