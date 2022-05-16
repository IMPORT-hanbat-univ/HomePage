
   
const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { User } = require('../models');
const { LookoutEquipment } = require('aws-sdk');
var router = express.Router();


router.get('/login', function(req,res, next){
    res.render('login')
})

router.get('/kakao', passport.authenticate('kakao'));// ----------------

router.get('/kakao/callback', passport.authenticate('kakao',{
    failureRedirect: '/',
}), (req,res)=>{
    res.redirect('/');
})//-------------------> 4

router.get('/test', isLoggedIn ,function(req,res,next){
    res.render('test', { data: req.user})
})

module.exports = router;