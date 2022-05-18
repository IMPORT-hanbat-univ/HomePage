var express = require('express');
var Question = require('../models').Question;
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
var router = express.Router();

/*
    url에 /question 가 get이 적용 될시에
    ai데이터 테이블을 열고 만약 에러가 발생 시에는 console에 에러 로그 표시,
    View인 second-list.ejs에 data라는 변수로 데이터 전송시킨다.
*/
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
/*
    /question/:id
    일 때 url의 params.id를 이용해서 id를 찾으며, findOne을 하여,
    데이터 베이스에 찾아낸다.
    
    마찬가지지로 View인 post.ejs에 data라는 변수로 관련 데이터를 전송 시킨다.
*/

router.get('/:id',(req,res,next)=>{
    //post 누르기
})
/**
 * question/write의 권한은 로그인이 된 사람만이 가능하게끔 설계 했다.
 * 이에 대한 DB전송에 대한 부분은 따로 post로 전송하면 된다.
 * 우선은 ajax로 구성하기 
 */
router.get('/write',isLoggedIn,(req,res,next)=>{
    //글쓰기 권한
    
})
module.exports = router;

