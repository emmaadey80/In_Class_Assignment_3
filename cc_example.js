// Task 5

let orders = [
 { id: 101, customer: "Alice", total: 300 },
 { id: 102, customer: "Bob", total: 450 },
 { id: 103, customer: "Charlie", total: 200 }
];

function findOrders(orders, orderId) {
    return orders.find(order => order.id === orderId);
}

console.log(findOrders(orders, 101)); 
some_order = findOrders(orders,101)
console.log(`${some_order.customer} has an order id: ${some_order.customer}, with a total of $${some_order.total}`);

// Task 6 
let inventory = {
    items: [],
    addItem(name, quantity) {
        this.items.push ({ name, quantity });
    

    }
};

inventory.addItem("Monitor", 5);
inventory.addItem("Keyboard", 10);
console.log(inventory.items); 

//Remove item
let list = {
    items: [],
    addItem(name, quantity) { // add items to list
        this.items.push ({ name, quantity });
    

    },
    removeLatestItem() { // reomevs latest item in list
        this.items.pop();

    },
    removeFirstItem(){ // removes first item in list
        this.items.shift();
    }
};

list.addItem("Monitor", 5); 
list.addItem("Keyboard", 10); 
list.addItem("Mouse", 3);

console.log(list.items); // viewing all items
list.removeLatestItem(); // removing latest
console.log(list.items);  // view items remianing
list.removeFirstItem(); // list.removeFirstItem(); 
console.log(list.items); // console.log(list.items);

// Task 7
let employees = [
    {name: "Alice", position: "Developer", salary: 70000},
    {name: "Bob", postion: "Designer", salary: 60000},
    {name: "Charlie", position: "Manager", salary: 90000}
];

function findEmployee(employees, name) {
    return employees.find(employee => employee.name === name);

};

console.log(findEmployee(employees, "Charlie"));

//Task 8
let ordersA = [
    {id: 1, customer: "Alice"},
    {id: 2, customer: "Bob"}
];

let ordersB = [
    {id: 3, customer: "Charlie"},
    {od: 4, customer: "David"},

];

function combineOrders(order1, order2) {
    return[... ordersA, ordersB]


}

console.log(combineOrders(ordersA, ordersB));









