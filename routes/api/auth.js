const express =require('express');
const router = express.Router();
const auth = require ('../../middleware/auth');
const User =require('../../models/User');

// For the second route to Authenticate user & get token, 
const { check, validationResult } = require('express-validator');
const config = require('config')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


// @route   GET api/auth
// @desc    Test route
// @access Public--no token
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error'); 
        
    }
});


// @route   POST api/auth
// @desc    Authenticate user & get token, 
//          purpose is to get token to make request to private routes
// @access Public
router.post(
    '/',
    [
      check('email', 'Please include a valid email').isEmail(),
      check('password','Password is required').exists(),
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      // Logic for user registration
      const { email, password } = req.body;
  
      try {
        // See if user already exists at login, changed to async/await rather .then
        let user = await User.findOne({ email });
  
        if (!user) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'Invalid Credentials' }] });
        }
    //    password is the plaintext the user enters, user.password is the encrypted version
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
      return res
      .status(400)
      .json({ error: [{ message:" Invalid Credentials" }] });
  }


        // Return jsonwebtoken
        const payload = {
          user: {
            id: user.id,
          }
        }
       
        jwt.sign(
          payload, 
          config.get('jwtSecret'),
          {expiresIn:360000},
          (err,token) => {
            if(err)throw err;
            res.json({token});
          });
  
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
    }
    // console.log(req.body);
  );
  
  module.exports = router;
module.exports=router;