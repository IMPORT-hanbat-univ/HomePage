var express = require('express');
const TechStack = require('../models').TechStack;
const { isLoggedIn, isNotLoggedIn, IsMannager } = require('./middlewares');
var Web = require('../models').Web;
var User = require('../models').User;
var router = express.Router();
/* GET /meeting */
router.get('/', isLoggedIn, async(req,res,next)=>{
    try{
       Web.findAll({
            attributes:["title","content","UserId"],
            include:{
                model: User,
                attributes:[
                    "nick_name",
                ]
            }
        })
        .then(result=>{
            // res.status(200).json({
            //     data: result
            // })
            res.render('dbtest',{data:result})
        })
    }catch(err){
        console.error(err)
    }
});

router.post('/web', isLoggedIn, async(req, res, next)=>{
    console.log(req.user.id);
    Web.create(
    {
        title : req.body.title,
        content : req.body.content,
        UserId : req.user.id,
    }).then(()=>{
        res.redirect('/dbtest')
    }).catch((err)=>{
        console.error(err);
        next(err);
    });
});

router.post('/techstack', isLoggedIn, async(req,res,next)=>{
    console.log(req.body.techstack);
    TechStack.create(
        {
            teckstack: req.body.techstack,
        }).then(()=>{
            console.log('성공했습니다.')
            res.status(200).json({
                "message" : "성공했습니다."
            })
        }).catch((err)=>{
            console.error(err);
            res.status(404).json({
                "message" : "DB저장에 실패했습니다."
            })
        })
})


module.exports = router;