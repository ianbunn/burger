// IMPORT ORM TO CREATE FUNCTIONS THAT WILL INTERACT WITH DB
const orm = require('../config/orm.js');

var burger = {
    selectAll: (callback)=>{
        orm.selectAll('burgers',(response)=>{
            callback(response);
        })
    },
    insertOne: (columns,values,callback)=>{
        orm.insertOne("burgers",columns,values,(response=>{
            callback(response);
        }));
    },
    updateOne: (objectColumnValues,condition,callback)=>{
        orm.updateOne("burgers",objectColumnValues,condition,(response)=>{
            callback(response);
        });
    }
};

// EXPORT DB FUNCTIONS FOR CONTROLLER (burgers_controller.js)
module.exports = burger;