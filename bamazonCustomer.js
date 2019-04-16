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
    select();
});

function inStock() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        quantities = [];
        prices = [];
        for (var i = 0; i < res.length; i++) {
            quantities.push(res[i].stock_quantity);
            prices.push(res[i].price);
        }
    });
}

function select() {
    inStock();    
    inquirer
        .prompt([
            {
                name: "action",
                type: "rawlist",
                message: "What would you like to do?",
                choices: [
                    "Display inventory",
                    "Buy product",
                    "Quit"
                ]
            }
        ])
        .then(function (answer) {
            if (answer.action === "Buy product") {
                buyItem();
            }
            else if (answer.action === "Display inventory") {
                displayStock();
            } else {
                connection.end();
            }
        });
}

function displayStock() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log("\r\n Product ID" + " | " + "Product name        " + " | " + "Price     " + " | ");
        console.log("------------------------------------------------");
        for (var i = 0; i < res.length; i++) {
            console.log(" " + res[i].item_id + spaces(res[i].item_id.toString(), 10) + " | " +
                res[i].product_name + spaces(res[i].product_name.toString(), 20)
                + " | " + res[i].price + spaces(res[i].price.toString(), 10) + " | ");
        }
        console.log("\n");
        select();
    });
}

function buyItem() {
    inStock();
    console.log("\r");
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
            var new_quantity = quantities[answer.id - 1] - answer.quantity;
            var stringNewQuontity = new_quantity.toString();
            var stringID = answer.id.toString();
            var price = prices[answer.id - 1];
            console.log("ID" + stringID);
            console.log("New Quontity: " + stringNewQuontity);

            if (new_quantity >= 0) {
                connection.query("UPDATE products SET stock_quantity = " + stringNewQuontity + " WHERE item_id = " +
                    stringID + ";", function (err, results) {
                        if (err) throw err;
                        console.log("\r\n" + "Your total price: $" + price * answer.quantity + "\r\n");
                        select();
                    });
            }
            else {
                console.log("\r\n" + "Insufficient quantity!" + "\r\n");
                select();
            }
        });
}

function spaces(column, width) {
    var space = "";
    for (var i = 0; i < (width - column.length); i++) {
        space += " ";
    }
    return space;
}