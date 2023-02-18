var app = require('express')(); 
var cors = require('cors');
app.use(cors());
var bodyP= require('body-parser');
var routes = require('./routes/routes');
app.use(bodyP.json());
app.use('/',routes);

//creating the server for the app which is running on port 3000
app.listen(3000,()=>{
    console.log("Server Running at port 3000");
    
});