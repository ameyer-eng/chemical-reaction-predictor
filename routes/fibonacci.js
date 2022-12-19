const express = require('express');
const router = express.Router();


const math = require('../math');
router.get('/', function(req, res, next) {
    if(req.query.fibonum){
        //Calculate directly in this server
        res.render('fibonacci', {
            title: "Predict Chemicals",
            fibonum: req.query.fibonum,
            fiboval: math.chemical(req.query.fibonum)
        });
    } else {
        res.render('fibonacci', {
            title: "Predict Chemicals",
            fiboval: undefined
        });
    }
});

module.exports = router;