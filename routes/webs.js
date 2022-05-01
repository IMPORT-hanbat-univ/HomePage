var express = require('express');
var Web = require('../models').Web;
var router = express.Router();

/* GET /mobile */
router.get('/', function(req, res, next){
    Web.findAll()
        .then((webs)=>{
            res.render('list',{data : webs});
        })
        .catch((err)=>{
            console.error(err);
            next(err);
        })
});
module.exports = router;

