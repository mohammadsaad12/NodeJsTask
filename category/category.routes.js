var app = require("express").Router();
var categoryObj = require("./category"); //import the category object


//Routes for Category 
app.get("/", categoryObj.getAllCategorys);
app.get("/:cid", categoryObj.getCategoryById);
app.post("/", categoryObj.addNewCategory);
app.put("/", categoryObj.updateCategory);
app.delete("/:cid", categoryObj.deleteCategory);

module.exports = app;
