// IMPORT MYSQL CONNECTION
const connection = require('../config/connection.js');

var orm = {
    selectAll: (tableInput, callback)=>{
        var queryString = `SELECT * FROM ${tableInput};`;
        connection.query(queryString,function(error,result){
            if(error) throw (error);
            callback(result);
        });
    }
};

module.exports = orm;