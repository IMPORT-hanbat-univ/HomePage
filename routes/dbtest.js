var express = require('express');
const { isLoggedIn, isNotLoggedIn, IsMannager } = require('./middlewares');
var Web = require('../models').Web;
var User = require('../models').User;
var router = express.Router();
/* GET /meeting */
router.get('/', isLoggedIn, async(req,res,next)=>{
    try{
       Web.findAll({
            attributes:["title","content","UserId"],
        })
        .then(result=>{
            // res.json({
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


module.exports = router;