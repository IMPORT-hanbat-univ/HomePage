var express = require('express');
var Ai = require('../models').Ai;
var router = express.Router();

/*
    url에 /ai 가 get이 적용 될시에
    ai데이터 테이블을 열고 만약 에러가 발생 시에는 console에 에러 로그 표시,
    View인 list.ejs에 data라는 변수로 데이터 전송시킨다.
*/

router.get('/', function(req, res, next){
    Ai.findAll()
        .then((ais)=>{
            res.render('list',{data : ais});
        })
        .catch((err)=>{
            console.error(err);
            next(err);
        })
});

/*
    /ai/:id
    일 때 url의 params.id를 이용해서 id를 찾으며, findOne을 하여,
    데이터 베이스에 찾아낸다.
    
    마찬가지지로 View인 post.ejs에 data라는 변수로 관련 데이터를 전송 시킨다.

*/
router.get('/:id', function(req, res) {
    Ai.findOne({
        where:{ 
            id : req.params.id 
        }
    })
    .then((webs)=>{
        res.render('post',{data : webs});
    })
    .catch((err)=>{
        console.error(err);
        next(err);
    })
});

module.exports = router;

