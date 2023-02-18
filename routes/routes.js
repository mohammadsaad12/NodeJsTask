var app =require('express').Router();
//creating individual routes for both product and category
var product_Route = require('../products/product.routes');
var category_Route =require('../category/category.routes');
app.use("/products",product_Route);
app.use("/category",category_Route) 
module.exports=app