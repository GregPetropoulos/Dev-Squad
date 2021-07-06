const express =require('express');
const router = express.Router();


// @route   GET api/posts
// @desc    Test route
// @access Public--no token
router.get('/', (req,res) => res.send('Posts route'));

module.exports=router;