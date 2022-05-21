const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt'); // 개인정보는 암호화가 필요하기 때문에 암호화 모듈 설치
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');//로그인이 됐는지 미들웨어 차원에서 확인 하고 필터링 한다.
const { User } = require('../models');
var router = express.Router();

router.get('/',isLoggedIn ,(req, res, next)=>{
    res.render('mypage',{data : req.user});
})

router.post('/edit',isLoggedIn,(req,res,next)=>{
   //나의 개인정보 업데이트 하기,, 
   User.update(
    {
        real_name : req.body.real_name,
        department : req.body.department,
        student_num : req.body.studentNum,
        github_url : req.body.githubUrl,
        blog_url : req.body.blogName
    },
    {
        where: {id : req.user.id}
    }).then(()=>{
        res.redirect('/auth/test', {message: '혹시 전송 되니..?'})
   });
});
router.get('/delete',isLoggedIn,(req,res,next)=>{
    User.destory({
        where: { id : req.params.id }
    }).then(()=>{
        res.redirect('/', {message: '회원 탈퇴가 완료되었습니다.'})
    });
})
module.exports = router;
