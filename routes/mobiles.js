var express = require('express');
var Mobile = require('../models').Mobile;
var router = express.Router();

/* GET /mobile */
router.get('/', function(req, res, next){
    Mobile.findAll()
        .then((mobiles)=>{
            res.render('list',{data : mobiles});
        })
        .catch((err)=>{
            console.error(err);
            next(err);
        })
});
module.exports = router;

