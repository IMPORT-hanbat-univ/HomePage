var express = require('express');
var Question = require('../models').Question;
var router = express.Router();

/* GET /mobile */
router.get('/', function(req, res, next){
    Question.findAll()
        .then((questions)=>{
            res.render('list',{data : questions});
        })
        .catch((err)=>{
            console.error(err);
            next(err);
        })
});
module.exports = router;

