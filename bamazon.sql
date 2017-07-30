/*drops bamazon databse if it exists*/
DROP DATABASE IF EXISTS bamazon_db; 

/*creates bamazon_db database*/
CREATE DATABASE bamazon_db;  

/*makes it where the code will affect the bamazon_db*/
USE bamazon_db; 

/*creates a table "products" within bamazon_db*/
CREATE TABLE products(
	item_id INT AUTO_INCREMENT NOT NULL, 
	product_name VARCHAR(50) NOT NULL, 
	department_name VARCHAR(50) NOT NULL, 
	price DECIMAL(10,2) NOT NULL, 
	stock_quantity INT(10) NOT NULL,
	PRIMARY KEY(item_id) 
); 

SELECT * FROM products;

/*creates new rows containing data in all named columsn*/
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("blue jeans", "Apparel", "59.99", 160),
	  ("t-shirt", "Apparel", "20.99", 250),
	  ("pillows", "Home Decor", "10.00", 50),
	  ("coffee table", "Home Decor", "75.00", 30), 
      ("laptop", "Electronics", "899.99", 30), 
	  ("headphones", "Electronics", "29.99", 70),
	  ("suitcase", "Travel", "80.00", 15),
	  ("dumbell weights", "Excercise Equipment", "29.99", 30),
	  ("pull up bar", "Excercise Equipment", "59.99", 5),
      ("televison", "Electronics", "1399.99", 100); 