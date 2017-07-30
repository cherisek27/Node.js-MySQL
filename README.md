# Bamazon 

An Amazon storefront with mastering of MySQL skills.
--- 

## Licensing Information: READ LICENSE 
---

Project source can be downloaded from 
---

Author & Contributor List 
------------

Cherise Knox 

Reported bugs/fixes will be submitted to correction.  

### **App Overview** 
---------
<img width="563" alt="screen shot 2017-07-30 at 2 07 19 pm" src="https://user-images.githubusercontent.com/26241261/28757325-445a7206-7535-11e7-8617-883da1085326.png"> 

<img width="557" alt="screen shot 2017-07-30 at 2 07 42 pm" src="https://user-images.githubusercontent.com/26241261/28757355-0387bcce-7536-11e7-8b4d-74931fd701f8.png">

#### **Packages Used** 
---------  
* Node.js 
* Inquirer 
* MySQL 

##### **Instructions:** 
----

Challenge #1: Customer View (Minimum Requirement)

1. Create a MySQL Database called bamazon.
1. Then create a Table inside of that database called products.
1. The products table should have each of the following columns:
	item_id (unique id for each product)
	product_name (Name of product)
	department_name
	price (cost to customer)
	stock_quantity (how much of the product is available in stores)
1. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).
Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
1. The app should then prompt users with two messages.
1. The first should ask them the ID of the product they would like to buy.
1. The second message should ask how many units of the product they would like to buy.
1. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
1. If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
However, if your store does have enough of the product, you should fulfill the customer's order.
1. This means updating the SQL database to reflect the remaining quantity.
1. Once the update goes through, show the customer the total cost of their purchase.


