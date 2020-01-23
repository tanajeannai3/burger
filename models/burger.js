var orm = require("../config/orm.js");
var burger = {
    selectAll : function(){
        orm.selectAll("burger", function(res){
            console.log(res);
        });
    }, 
    insertOne : function(cols, vals){
        orm.insertOne("burger", cols, vals, function(res){
            console.log(res);
        });
    }, 
    updateOne : function(cols, vals){
        orm.updateOne("burger", cols, vals, function(res){
            console.log(res);
        });
    }
};
module.exports = burger;