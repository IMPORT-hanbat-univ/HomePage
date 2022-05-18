var express = require('express');
var router = express.Router();

/* rule.ejs 출력하기 */
router.get('/', function(req, res) {
  res.render('rule');
});

module.exports = router;
