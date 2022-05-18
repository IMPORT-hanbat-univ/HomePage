const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt'); // 개인정보는 암호화가 필요하기 때문에 암호화 모듈 설치
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');//로그인이 됐는지 미들웨어 차원에서 확인 하고 필터링 한다.
const { User } = require('../models');
var router = express.Router();


/**
 * 현재는 테스트 중에 있으므로 완성 단계가 된다면, 
 * 이 부분은 로그인, 회원가입, 네이버, 카카오 Oauth인증 callback url
 * 으로 활용될 예정이다.
 * 
 */
router.get('/login', function(req,res, next){
    res.render('login')
})

//카카오 로그인 메서드이다.
router.get('/kakao', passport.authenticate('kakao'));
/*
    카카오 로그인 콜백 메서드이다.
    만약 로그인에 실패하게 된다면 index페이지로 redirect를 하게 된다.
    로그인에 성공시에도 index페이지로 redirect
*/
router.get('/kakao/callback', passport.authenticate('kakao',{
    failureRedirect: '/',
}), (req,res)=>{
    res.redirect('/');
})

/**
 * 현재 session 정보가 잘 전다 되고 있는지 확인하는 메서드
 * req.user를 data라는 데이터에 담아서 test.ejs에 user의 정보를 전송 시킨다.
 */
router.get('/test', isLoggedIn ,function(req,res,next){
    res.render('test', { data: req.user})
})

module.exports = router;