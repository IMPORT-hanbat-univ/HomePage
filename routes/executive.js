var express = require('express');
var router = express.Router();

/* executive.ejs를 출력한다. */
router.get('/', function(req, res) {
  res.render('executive');
});

module.exports = router;
