drop database if exists bamazon_db;
create database bamazon_db;
use bamazon_db;

create table products (
    item_id INT NOT NULL auto_increment,
    product_name VARCHAR(50),
    department_name VARCHAR (50),
    price DECIMAL(10,2),
    stock_quantity INT,
    PRIMARY KEY (item_id)
    );

    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUE ("fabric softener", "household", 5.99, 120);

    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUE ("detergent", "household", 9.99, 55);

    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUE ("light bulb", "household", 1.99, 74);

    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUE ("paper towels", "household", 16.32, 20);

    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUE ("toothpaste", "personal care", 3.80, 201);

    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUE ("razor", "personal care", 10.49, 38);

    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUE ("body lotion", "personal care", 7.97, 12);

    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUE ("nuclear missile", "weapons", 999.19, 1);

    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUE ("smart watch", "elecronics", 54.99, 7);

    INSERT INTO products (product_name, department_name, price, stock_quantity)
    VALUE ("kettlebell", "featness", 19.41, 23);

    SELECT * FROM products;