DROP DATABASE IF EXISTS bamazon_db; 
show databases;

CREATE DATABASE bamazon_db;  

USE bamazon_db; 

CREATE TABLE products (
id INTEGER (11) AUTO_INCREMENT NOT NULL, 
item_id VARCHAR (50) NOT NULL, 
product_name VARCHAR (50) NOT NULL, 
department_name VARCHAR (50) NOT NULL, 
price DECIMAL (10,2) NULL, 
stock_quantity INTEGER (10)
); 