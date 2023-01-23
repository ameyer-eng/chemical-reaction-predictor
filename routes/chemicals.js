const express = require('express');
const router = express.Router();


const math = require('../chemical');
router.get('/', function(req, res, next) {
    if(req.query.fibonum){
        //Calculate directly in this server
        res.render('chemicals', {
            title: "Predict Chemicals",
            fibonum: req.query.fibonum,
            fiboval: chemical(req.query.fibonum)
        });
    } else {
        res.render('chemicals', {
            title: "Predict Chemicals",
            fiboval: undefined
        });
    }
});

module.exports = router;