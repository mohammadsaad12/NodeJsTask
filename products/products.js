var mysql = require('../db/db');
var products={
     
                                                                              //creating a request to get all products from database
    "getAllProducts":(req,res)=>{
        let q1 = "select * from product";
        mysql.query(q1,(err,rows)=>{
            if(err)
            console.log(err);
            res.send(rows)
        });
    },

                                                                             //creating a request to get product by Id from database

    "getProductById":(req,res)=>{
        let q5 ="select * from product where productId=? ";
        var d5=req.params;
        mysql.query(q5,[d5.productId],(err,rows)=>{
            if(err)
            console.log(err);
            res.send(rows)
        })
    },
                                                                               //creating a request to Add New product to database

    "addNewProduct":(req,res)=>{
        let q2 ="insert into product(productId,productName,qtyPerUnit,unitPrice,unitInStock,discontinued,categoryId) values(?,?,?,?,?,?,?)";
        var d1 = req.body;
        console.log(d1);
        mysql.query(q2,[d1.productId,d1.productName,d1.qtyPerUnit,d1.unitPrice,d1.unitInStock,d1.discontinued,d1.categoryId],(err,rows)=>{
            if(err)
            console.log(err);
            res.send(rows);
        });
    },
                                                                                //creating a request to Update Existing product from the database

    "updateProduct":(req,res)=>{ 
        let q3 ="update product set productName=?, qtyPerUnit =?, unitPrice=?, unitInStock=? where productId=?";
        var d2=req.body;
        mysql.query(q3,[d2.productName,d2.qtyPerUnit,d2.unitPrice,d2.unitInStock,d2.productId],(err,rows)=>{
            if(err){
                console.log(err)
                console.log(rows)
                res.send(rows);
            }
        });
    },
        
                                                                                //creating a request to delete individual Existing product from the database 
    "deleteProduct":(req,res)=>{
        let q4 ="delete from product where productId=?";
        var d3=req.params;
        mysql.query(q4,[d3.productId],(err,rows)=>{
            if(err)
            console.log(err);
            res.send(rows);
        });
    },




};


module.exports =products;