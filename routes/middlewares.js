var User = require('../models').User;
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
