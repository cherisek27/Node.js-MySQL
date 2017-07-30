var mysql = require('mysql'); 
var inquirer = require('inquirer'); 
var padText = require('./padtext.js'); 

var connection = mysql.createConnection({
    host: "localhost", 
    port: 3306,
    user: "root", 
    password: "", 
    database: "bamazon_db"
})

    connection.connect(function(err) {
        if (err) throw err; 
            console.log("connected as id " + connection.threadId); 
    }); 

    connection.query('SELECT * FROM products', function(err, res) { 

        if(err) throw err; 

        console.log("View our selection...\n"); 

    console.log('  item_id |      product_name     |  department_name |   price  | stock_quantity');
    console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ') 

    for (var i = 0; i < res.length; i++){

    var item_id = res[i].item_id + ''; 
    item_id = padText("  item_id  ", item_id);

    var product_name = res[i].product_name + ''; 
    product_name = padText("     product_name      ", product_name);

    var department_name = res[i].department_name + ''; 
    department_name = padText("  department_name ", department_name);

    var price = '$' + res[i].price.toFixed(2) + ''; 
    price = padText("   price  ", price);

    var stock_quantity = res[i].stock_quantity + ''; 

    console.log(item_id + '|' + product_name + '|' + department_name + '|' + price + '|    ' + stock_quantity);
  } 

  var start = function() {  

    inquirer
        .prompt([{
            name: "itemId", 
            type: "input", 
            message: "What is the ID of the item you would like to buy?", 
            validate: function(value) {
                if (isNaN(value) == false) {
                    return true; 
                } else {
                    return false; 
                }
            } 
        }, {
            name: "quantity", 
            type: "input", 
            message: "How many units of the product would you like to buy?",
            validate: function(value) {
                if (isNaN(value) == false) {
                    return true; 
                } else {
                    return false; 
                }
            } 
    }])  

    .then(function(answer) { 
        var chosenId = answer.itemId - 1 
        var chosenProduct = res[chosenId] 
        var chosenQuantity = answer.quantity 
            if (chosenQuantity < res[chosenId].stock_quantity) {
                console.log("Your total for " + "(" + answer.quantity + ")" + " - " + res[chosenId].product_name + " is: " + res[chosenId].price.toFixed(2) * chosenQuantity);
                    connection.query("UPDATE products SET ? WHERE ?", [{
                        stock_quantity: res[chosenId].stock_quantity - chosenQuantity 
            }, {
                id: res[chosenId].id
            }], function (err, res) { 

                console.log(err);

                start();
            });
            
            } else {
                console.log("Sorry, insufficient quantity" + res[chosenId].stock_quantity + "in our inventory."); 
                start();
            } 
        })
    }

start(); 

});
  