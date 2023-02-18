var app = require("express").Router();
var productObj = require("./products"); //imported object from our products 

//Routes for Category 

app.get("/", productObj.getAllProducts);
app.get("/:productId", productObj.getProductById);
app.post("/", productObj.addNewProduct);
app.put("/", productObj.updateProduct);
app.delete("/:productId", productObj.deleteProduct);

module.exports = app;
