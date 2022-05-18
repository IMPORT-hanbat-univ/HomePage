var express = require('express');
var router = express.Router();

/**
 * 추후에 지원서 작성란을 만들어서 동아리 홈페이지 자체적으로 정보 수집 
 * 및 지원서 작성 페이지를 만들 예정
 * 
 */
router.get('/', function(req, res) {
  res.render('apply');
});

module.exports = router;
