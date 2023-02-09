const express = require('express');
const router = express.Router();


const math = require('../chemical');
router.get('/', function(req, res, next) {
    if(req.query.fibonum){
        //Calculate directly in this server
        let prediction = math.chemical(req.query.fibonum);


        res.render('chemicals', {
            title: "Predict Chemicals",
            fibonum: req.query.fibonum,
            prediction: prediction[0],
            precipitate: prediction[1],
            precipitate_URL: prediction[2],
            solute_salt: prediction[3],
            solute_URL: prediction[4]

        });

    } else {
        res.render('chemicals', {
            title: "Predict Chemicals",
            prediction: false
        });
    }
});

module.exports = router;