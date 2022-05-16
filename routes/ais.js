var express = require('express');
var Ai = require('../models').Ai;
var router = express.Router();

/* GET /ai */
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

router.get('/:id', function(req, res) {
    Ai.findAll({
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

