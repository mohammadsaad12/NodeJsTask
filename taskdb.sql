create database taskdb;

use taskdb;
create table category (
cid int not null auto_increment,
categoryName varchar(50) not null,
primary key(cid)
);

insert into category(categoryName)
values('Clothing'),
('Shoes'),
('mobile');

select * from category;


create table product(
  productId int not null,
  productName varchar(50) not null,
  qtyPerUnit  varchar(50) not null,
  unitPrice  varchar(50) not null,
  unitInStock  varchar(50) not null,
  discontinued  boolean,
  categoryId int not null,
 primary key (productId),
 foreign key (categoryId) references category(cid)
);

insert into product (productId , productName , qtyPerUnit , unitPrice , unitInStock , discontinued ,  categoryId  )
values (1 ,"Nike" ,"200","3200","50",false,2),
(2 ,"Zara" ,"100","3300","20",false,1),
(3 ,"Apple" ,"40","55000","30",false,3),
(4 ,"adidas" ,"100","2500","40",false,1);


select * from product p inner join category c
on p.categoryId = c.cid ;

 

