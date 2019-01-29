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


router.post('/api/burgers',(request,response)=>{
    burger.insertOne(['burger_name','devoured'],
    [request.body.burger_name, request.body.devoured], (result)=>{
        response.json({
            id: result.insertId
        });
    });
});

router.put("/api/burgers/:id",(request,response)=>{
    var condition = `ID = ${request.params.id}`;
    
    burger.updateOne({
        devoured: request.body.devoured
    },
    condition,
    (result)=>{
        if(result.changedRows === 0){
            return response.status(404).end();
        };
        
        response.status(200).end();
    });
});

// EXPORT ROUTES FOR 'server.js'
module.exports = router;