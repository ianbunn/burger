// IMPORT ORM TO CREATE FUNCTIONS THAT WILL INTERACT WITH DB
const orm = require('../config/orm.js');

var burger = {
    selectAll: (callback)=>{
        orm.selectAll('burgers',(response)=>{
            callback(response);
        })
    }
}

// EXPORT DB FUNCTIONS FOR CONTROLLER (burgers_controller.js)
module.exports = burger;