var express = require('express');
var router = express.Router();

/* introduce.ejs를 출력한다. */
router.get('/', function(req, res) {
  res.render('introduce');
});

module.exports = router;
