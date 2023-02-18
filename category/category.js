var mysql = require("../db/db");
var category = {

                                      //creating a request to get all categories from database
  getAllCategorys: (req, res) => {
    let p1 = "select * from category";
    mysql.query(p1, (err, rows) => {
      if (err) console.log(err);
      res.send(rows);
    });
  },
                                        //creating a request to Add New Categories to database
  addNewCategory: (req, res) => {
    let p2 = "insert into category(cid,categoryName) values(?,?)";
    var s1 = req.body;
    console.log(s1);
    mysql.query(p2, [s1.id, s1.categoryName], (err, rows) => {
      if (err) console.log(err);
      res.send({ message: `Category was Added successfully!` });
       
    });
  },
                                           //creating a request to get category by using its Id from database
  getCategoryById: (req, res) => {
    let p3 = "select * from category where cid=? ";
    var s2 = req.params;
    mysql.query(p3, [s2.cid], (err, rows) => {
      if (err) console.log(err);
      res.send(rows);
    });
  }, 
                                                   //creating a request to Update Existing Category from database
  updateCategory: (req, res) => {
    let p4 = "update category set categoryName=? where cid=?";
    var s3 = req.body;
    mysql.query(p4, [s3.categoryName, s3.cid], (err, rows) => {
      if (err) {
        console.log(err);
        console.log(rows);
        res.send({ message: `Category was Updated successfully!` });
       
      }
    });
  }, 
                                                  //creating a request to delete individual category from database
  deleteCategory: (req, res) => {
    let p5 = "delete from category where cid=?";
    var s4 = req.params;
    mysql.query(p5, [s4.cid], (err, rows) => {
      if (err) console.log(err);
      res.send({ message: `Category was Deleted successfully!` });
    });
  },
};

module.exports = category;
