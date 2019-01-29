const express = require('express');
const router = express.Router();

// IMPORT THE MODEL 'burger.js' TO USE ITS DB FUNCTIONS
const burger = require("../models/burger.js");

// CREATE ALL OUR ROUTES AND SETUP LOGIC WITHIN THOSE ROUTES
router.get("/",(request,response)=>{
    burger.selectAll((data)=>{
        var handlebarsObject = {
            burger: data
        };
        console.log(handlebarsObject);
        response.render('index',handlebarsObject);
    })
});

// EXPORT ROUTES FOR 'server.js'
module.exports = router;