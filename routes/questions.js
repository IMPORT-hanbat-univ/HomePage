var express = require('express');
var Question = require('../models').Question;
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
var router = express.Router();

/* GET /mobile */
router.get('/', (req, res, next)=>{
    Question.findAll()
        .then((questions)=>{
            res.render('list',{data : questions});
        })
        .catch((err)=>{
            console.error(err);
            next(err);
        })
});
router.get('/:id',(req,res,next)=>{
    //post 누르기
})
router.get('/write',isLoggedIn,(req,res,next)=>{
    //글쓰기 권한
    res
})
module.exports = router;

