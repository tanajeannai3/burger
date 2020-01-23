var connection = require("../config/connection.js");

var orm = {
    selectAll : function(tableInput){
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result){
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne : function(table, cols, vals){
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        connection.query(queryString, function (err, result){
            if (err) throw err;
            console.log(result);
        });
    }, 
    updateOne : function(table, objColVals, condition){
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function (err, result){
            if (err) throw err;
            console.log(result);
        });
    }
}

module.exports = orm;
