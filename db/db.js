var mysql = require('mysql');
var connection =mysql.createPool({
     database:'taskdb',
     user:'root',
     password:'root',
     host:'localhost',
     port:'3306'
});

//creating the connection to the database
connection.getConnection((err,connection)=>{
    if(err)
    console.log(err);
    else
    console.log("database connected successfully");
    return connection;
});

module.exports = connection;

