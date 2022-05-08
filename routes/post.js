var express = require('express');
var { Web, Mobile, Data, Ai, Question } = require('../models')
var router = express.Router();

/* GET /post */
router.get('/:id', function(req, res) {
    console.log(req.query.category);

    if(req.query.category == 'dataanalysis'){
        Data.findOne({
            where:{ 
                id : req.params.id
            }
        })
        .then((dataanalies)=>{
            res.render('post', {data : dataanalies })
        })
        .catch((err)=>{
            console.error(err);
            next(err);
        })
    }else if(req.query.category == 'web'){
        Web.findAll({
            where:{ 
                id : req.params.id 
            }
        })
        .then((webs)=>{
            res.render('list',{data : webs});
        })
        .catch((err)=>{
            console.error(err);
            next(err);
        })
    }else if(req.query.category == 'ai'){
        Ai.findAll({
            where:{ 
                id : req.params.id 
            }
        })
        .then((ais)=>{
            res.render('list',{data : ais});
        })
        .catch((err)=>{
            console.error(err);
            next(err);
        })
    }else if(req.query.category == 'mobile'){
        Mobile.findAll({
            where:{ 
                id : req.params.id 
            }
        })
        .then((mobiles)=>{
            res.render('list',{data : mobiles});
        })
        .catch((err)=>{
            console.error(err);
            next(err);
        })
    }else if(req.query.category == 'question'){
        Question.findAll({
            where:{ 
                id : req.params.id 
            }
        })
        .then((questions)=>{
            res.render('list',{data : questions});
        })
        .catch((err)=>{
            console.error(err);
            next(err);
        })
    }

    db.get().collection(req.query.category).findOne({_id: parseInt(req.params.id)}, function(err, resu) {
        res.render('post', {data : resu});
    });
});

module.exports = router;