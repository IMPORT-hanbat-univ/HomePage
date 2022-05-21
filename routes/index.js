var express = require('express');
var router = express.Router();

/* index.ejs를 출력한다. */
router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;
