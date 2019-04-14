var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "19matrix99",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
});

function afterConnection() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(" Product ID" + " | " + "Product name        " + " | " + "Price     " + " | ");
        // console.log("_______________________________________________");
        console.log("------------------------------------------------");
        for (var i = 0; i < res.length; i++) {
            console.log(" " + res[i].item_id + spaces(res[i].item_id.toString(), 10) + " | " +
                res[i].product_name + spaces(res[i].product_name.toString(), 20)
                + " | " + res[i].price + spaces(res[i].price.toString(), 10) + " | ");
            // console.log("Length: " + res[i].product_name.toString().length);
        }
        // console.log(res);
        connection.end();
    });
}

function spaces(column, width) {
    var space = "";
    for (var i = 0; i < (width - column.length); i++) {
        space += " ";
    }
    return space;
}
