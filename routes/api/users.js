const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// Added models/User, gravatar,normalize, bcrypt for the user registration logic
const User = require('../../models/User');
const gravatar = require('gravatar');
const normalize = require('normalize-url');
const bcrypt = require('bcryptjs');

// @route   POST api/users
// @desc    Register user route
// @access Public--no token
router.post(
  '/',
  [
    check('name', 'Name is Required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a valid password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Logic for user registration
    const { name, email, password } = req.body;

    try {
      // See if user already exists at registration, changed to async/await rather .then
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
      }
      // Get users gravatar
      const avatar = normalize(
        gravatar.url(email, {
          s: '200',
          r: 'pg',
          d: 'mm',
        }),
        { forceHttps: true }
      );

      user = new User({
        name,
        email,
        avatar,
        password,
      });

      // Encrypt the password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // Return jsonwebtoken


      
      res.send('User register');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
  // console.log(req.body);
);

module.exports = router;
