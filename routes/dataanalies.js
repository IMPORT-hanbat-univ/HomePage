var express = require('express');
var Data = require('../models').Data;
var router = express.Router();

/* GET /mobile */
router.get('/', function(req, res, next){
    Data.findAll()
        .then((dataanalies)=>{
            res.render('list', { data : dataanalies });
        })
        .catch((err)=>{
            console.error(err);
            next(err);
        })
});
module.exports = router;

