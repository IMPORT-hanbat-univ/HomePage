var express = require('express');
const { render } = require('../app');
var router = express.Router();
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');


/* GET /write */
router.get('/', isLoggedIn, (req, res,next)=>{
  res.render('write',{data:req.user});
});


module.exports = router;