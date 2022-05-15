var express = require('express');
const user = require('../models/user');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
var Web = require('../models').Web;
var router = express.Router();

/* GET /mobile */
router.get('/', async(req, res, next)=>{
    Web.findAll()
        .then((webs)=>{
            res.render('list',{data : webs});
        })
        .catch((err)=>{
            console.error(err);
            next(err);
        })
});
router.get('/write', isLoggedIn,(req,res,next)=>{
    if(req.user.degree >= 3){
        res.render('write', { data:req.user });
    }else{
        res.redirect('/webs', { message: '권한이 없습니다.' });
    }
})

router.get('/:id', isLoggedIn ,(req, res,next)=>{
    if(req.user.degree >= 1){
        Web.findAll({
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
    }else{
        res.redirect('/webs', { message: '권한이 없습니다.' });
    }
    
});
router.get(':/id/edit',isLoggedIn,(req,res,next)=>{
    //user.id와 작성자 id가 동일시에 수정 가능
})
router.get('/:id/delete',isLoggedIn,(req,res,next)=>{
    //user.id와 작성자 id가 동일시에 삭제 가능 혹은 관리자일때 삭제 가능

})
//edit, delete 기능 구현을 이쪽에서 하기

module.exports = router;

