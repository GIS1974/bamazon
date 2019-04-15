var mysql = require("mysql");
var inquirer = require("inquirer");
var quantities = [];
var prices = [];

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "19matrix99",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\r\n");
    displayStock();
    // console.log("here");
});

function displayStock() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(" Product ID" + " | " + "Product name        " + " | " + "Price     " + " | ");
        console.log("------------------------------------------------");
        for (var i = 0; i < res.length; i++) {
            console.log(" " + res[i].item_id + spaces(res[i].item_id.toString(), 10) + " | " +
                res[i].product_name + spaces(res[i].product_name.toString(), 20)
                + " | " + res[i].price + spaces(res[i].price.toString(), 10) + " | ");
            quantities.push(res[i].stock_quantity);
            prices.push(res[i].price);
            // console.log("Length: " + res[i].product_name.toString().length);
        }
        // console.log(res);
        buyItem();
    });
}

function buyItem() {
    // prompt for info about the item being put up for auction
    console.log("What would you like to buy?");
    inquirer
        .prompt([
            {
                name: "id",
                type: "input",
                message: "Enter product ID",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            },
            {
                name: "quantity",
                type: "input",
                message: "How many units of the product would you like to buy?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            },
        ])
        .then(function (answer) {
            // when finished prompting, insert a new item into the db with that info
            var new_quantity = quantities[answer.id - 1] - answer.quantity;
            var answerQuontity = new_quantity.toString();
            var answerID = answer.id.toString();
            var price = prices[answer.id - 1];
            // console.log("here");
            if ((quantities[answer.id - 1] - answer.quantity) >= 0) {
                connection.query("UPDATE products SET stock_quantity = " + answerQuontity + " WHERE item_id = " +
                    answerID + ";", function (err, results) {
                        if (err) throw err;
                        console.log("Your total price: $" + price * answer.quantity);
                    });
            }
            else {
                console.log("Incorrect");
            }
            // console.log("here");
            // console.log("new_quantity: " + new_quantity);
            console.log(new_quantity);
            // console.log("here");
        });
    // displayStock();
    // connection.end();
}

function spaces(column, width) {
    var space = "";
    for (var i = 0; i < (width - column.length); i++) {
        space += " ";
    }
    return space;
}