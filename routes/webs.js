var express = require('express');
const user = require('../models/user');
const { isLoggedIn, isNotLoggedIn, IsMannager } = require('./middlewares');
var Web = require('../models').Web;
var User = require('../models').User;
var router = express.Router();

/*
    url에 /web 가 get이 적용 될시에
    ai데이터 테이블을 열고 만약 에러가 발생 시에는 console에 에러 로그 표시,
    View인 list.ejs에 data라는 변수로 데이터 전송시킨다.
*/
router.get('/', async(req, res, next)=>{
    Web.findAll({
        attributes:["title","content","category","id"],
        include:{
            model: User,
            attributes:[
                "nick_name",
            ]
        }
    })
    .then((webs)=>{
            res.render('list',{data : webs});
            console.log(webs.User.nick_name);
            // res.status(200).json({
            //     "title" : webs.title,
            //     "category" : webs.category,
            //     "content" : webs.content,
            //     "user" :{
            //         nickname : users.nickname,
            //     }
            // })
    })
    .catch((err)=>{
            console.error(err);
        res.status(404).json({
            "message": "데이터가 없습니다."
        })
        next(err);
    })
});
router.get('/:id', isLoggedIn ,(req, res,next)=>{
    if(req.user.degree >= 1){
    Web.findOne({
            where:{ 
                id : req.params.id 
            },
            include: {
                model: User,
                attributes: [ "nick_name" ]
            }
        })
        .then((web)=>{
            res.render('post', {data : web});
        })
        .catch((err)=>{
            console.error(err);
            next(err);
        })
    }else{
        res.redirect('/web');
    }
    
});
/*
    url에 /web/write 가 get이 적용 될시에
    로그인이 되어있으며, user.degree가 3이상인 사람들만 write페이지를 사용할 수 있게 설계 하였다.
    만약 그렇지 않다면 redircet를 보낸 후에, message를 보낸다.
    (statuscode도 추가해서 alert를 내보내는 걸 추가해야겠다.)

*/
router.get('/write', isLoggedIn,(req,res,next)=>{
    if(req.user.degree >= 3){
        res.render('write', { data : req.user });
    }else{
        res.redirect('/webs', { message: '권한이 없습니다.' });
    }
})

router.post('/', isLoggedIn, async(req, res, next)=>{
    console.log(req.user.id);
    Web.create(
    {
        title : req.body.title,
        content : req.body.content,
        userId : req.user.id,
    }).then(()=>{
        
        res.redirect('/meeting', {message: '혹시 전송 되니..?'})
    }).catch((err)=>{
        console.error(err);
        next(err);
    });
});
/*
    url에 /web/:id 가 get이 적용 될시에
    로그인이 되어있을 때와 권한이 1이상 일 때 페이지를 열수있다.
    0등급은 동아리 원이 아니기에 볼 수 없다.

    만약 degree가 0이하면, 이 post페이지로 redirect한다.

*/

//user.id와 작성자 id가 동일시에 수정 가능
router.get(':/id/edit',isLoggedIn,(req,res,next)=>{
    if(req.user.id === Web.writer_id){

    }else{
        redirect('/');
    }
})
//user.id와 작성자 id가 동일시에 삭제 가능 혹은 관리자일때 삭제 가능
router.get('/:id/delete',IsMannager,isLoggedIn,(req,res,next)=>{
    if(req.user.id === Web.writer_id){

    }else{
        redirect('/');
    }
})
//edit, delete 기능 구현을 이쪽에서 하기


module.exports = router;
