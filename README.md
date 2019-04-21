# bamazon

## Overview
This program contacts product inventory database and displays the results including unique product ID, product name and product price. Afterwards the user is prompted to either display inventory, buy product selected by ID, or quit.
The program was created in javascript using node.js, mysql and inquirer packages. Database was set up in MySQL Workbench.

## How it works
To start the program open command line or Git Bash and enter the command "node bamazonCustomer.js">.
![Initial view](/assets/images/screen1.PNG)

User can use arrow buttons to chose on of three options:
1. **Display inventory**

If the user chooses display inventory, inventory is displayed as shown in the image below, and user is asked the same question "What would you like to do?".
![Display inventory](/assets/images/screen2.PNG)

2. **Buy product**

If user chooses buy product option, user is prompted for a unique product id to be entered as shown below.
![Buy product](/assets/images/screen3.PNG)

If the user enters valid product id, the user is then asked to enter product quantity as shown below.
![Select product by ID](/assets/images/screen4.PNG)

Afterwards, total product cost is displayed, database is updated, and user is again asked to either display inventory, buy product, or quit as shown below.
![Display total cost](/assets/images/screen5.PNG)

3. **Quit**
If the user chooses quit option, the program terminates as shown below.
![Quit](/assets/images/screen6.PNG)