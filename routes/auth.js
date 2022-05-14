const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { User } = require('../models');

router.get('/kakao', passport.authenticate('kakao'));// ----------------

router.get('/kakao/callback', passport.authenticate('kakao',{
    failureRedirect: '/',
}), (req,res)=>{
    res.redirect('/');
})//-------------------> 4

module.exports = router;