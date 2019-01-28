const express = require('express');
const router = express.Router();

// IMPORT THE MODEL 'burger.js' TO USE ITS DB FUNCTIONS
const burger = require("../models/burger.js");

// CREATE ALL OUR ROUTES AND SETUP LOGIC WITHIN THOSE ROUTES
router.get("/",(request,response)=>{
    var handlebarsObject = {
        burgers: response
    };
    // console.log(handlebarsObject.burgers);
});

// EXPORT ROUTES FOR 'server.js'
module.exports = router;