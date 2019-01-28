// IMPORT MYSQL CONNECTION
const connection = require('../config/connection.js');

var orm = {
    selectAll: (callback)=>{
        var queryString = `SELECT * FROM burgers_db;`;
        connection.query(queryString,(error,result)=>{
            if(error) throw (error);
            callback(result);
        });
    }
};

module.exports = orm;