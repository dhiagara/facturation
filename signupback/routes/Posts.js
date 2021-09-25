
const express = require('express');
const router = express.Router();

//@ROUTE GET app/Posts/test
//@desc tests posts route
//@access public
router.get('/test', (req,res)  => res.json({ msg: "posts work"}));
module.exports = router;
