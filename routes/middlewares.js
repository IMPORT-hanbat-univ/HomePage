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
exports.isNotLoggedIn = (req, res, next)=>{
    if(!req.isAuthenticated()){
        next();
    }else{
        res.redirect('/');
    }
};
exports.IsMannager = (req,res,next)=>{
    if(!req.user.degree == 5){
        next();
    }else{
        res.redirect('/');
    }
}
