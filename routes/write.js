var express = require('express');
var router = express.Router();

try{
  const pwd = Buffer.from(process.env.PW, "utf8").toString('base64');
} catch(e){
  console.log(e)
  res.send("Error")
}
/* GET /write */
router.post('/', function(req, res) {
  if(pwd.toString("utf8") == Buffer.from(req.body.pwd, "utf8").toString('base64')) {
    res.render('write');
  } else {
    res.redirect('/');
  }
});

module.exports = router;