var User = require('../models').User;
/**
 * 현재 로그인이 됐는지 판단하는 모듈
 * 만약 로그인이 된 상태라면, next()
 * 만약 로그인이 되지 않은 상태라면, status 403을 반환하며, 메시지를 전송한다.
 */
exports.isLoggedIn = (req, res, next) =>{
    if (req.isAuthenticated()){
        next();
    }else{
        res.status(403).send('로그인이 필요합니다');
    }
}
/**
 * 현재 로그인이 안된 상태를 확인하는 메서드
 * 이유는 로그인이 안된 상태에서만 들어갈 수 있는 서비스가 있을 수 있기 때문에
 * 예를 들면 회원가입 창...
 * 
 * 만약 로그인 상태가 아니라면 next()
 * 로그인 상태라면 redirect index페이지
 */
exports.isNotLoggedIn = (req, res, next)=>{
    if(!req.isAuthenticated()){
        next();
    }else{
        res.redirect('/');
    }
};

/**
 * 
 * 관리자 일 때만 접속 가능한 사이트 구성을 위한 모듈
 * 관리자는 degree가 5일 때만 가능함,
 * degree가 5일때 next()
 * 만약 아니라면 redircet로 index페이지로 돌려보냄
 */
exports.IsMannager = (req,res,next)=>{
    if(!req.user.degree == 5){
        next();
    }else{
        res.redirect('/');
    }
}
