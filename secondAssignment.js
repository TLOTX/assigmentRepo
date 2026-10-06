// 1
function greetUser(firstName, lastName) {
    return `Hello, ${firstName} ${lastName}! Welcome to the backend.`;
}
console.log(greetUser("Markpowell", "Chika"));


// 2
function celciusToFahrenheit(celsius) {
    let Fahrenheit = (celsius * 9/5) + 32;
    return Fahrenheit;
}
finalFahrenheit = celciusToFahrenheit(30);
console.log(`The temperature in Fahrenheit is: ${finalFahrenheit}`);


// 3
function isEven(x) {
    if (x % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
function processNumber(x) {
    if (isEven(x) === true) {
        return "Proceed"
    } else {
        return "Access Denied"
    }
}
console.log(processNumber(5));


// 4
function calculateTax(bill){
    tax = (8 /bill) * (100)
    return tax
}
function calculateTotal(subTotal, calculateTax){
    total = subTotal + calculateTax 
    return `The total amount is: N${total}`;
}
console.log(calculateTax(50))
console.log(calculateTotal(50, calculateTax(50)))


// 5
function createProfile(username, age, role = "user") {
    return { username, age, role };
}
console.log(createProfile("Markpowell", 25, "admin"));
console.log(createProfile("Chika", 22));


// 6
const isEven2 = (y) => {
    if (y % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
const calculateTotal2 = (subTotal2, calculateTax) => {
    total2 = subTotal2 + calculateTax 
    return `The total amount is: N${total2}`;
}
console.log(isEven2(9));
console.log(calculateTotal2(50, calculateTax(50)));


// 7
function calculator(num1, num2, operationCallback) {
    return operationCallback(num1, num2);
}
const add = (num1, num2) => num1 + num2;
const multiply = (num1, num2) => num1 * num2;
console.log(calculator(5, 10, add));
console.log(calculator(5, 10, multiply));


// 8
function processString(value, callback) {
    return callback(value);
}
const makeUppercase = (value) => value.toUpperCase();
const countCharacters = (value) => value.length;
console.log(processString("hello, callbacks!", makeUppercase));
console.log(processString("hello, callbacks!", countCharacters));


// 9
function fetchMockData(callback) {
    setTimeout(() => {
        callback("Database connection established.");
    }, 2000);
}
fetchMockData((message) => console.log(message));


// 10
console.log("1. Request Received");
setTimeout(() => {
    console.log("2. Processing Data");
}, 1000);
console.log("3. Sending Response");


// 11
databaseConfig = {
    host: "myHost",
    port: 1234,
    dbName: "markDatabase",
    password: "chika",
    getConnectionString: function() {
        return `mongodb://${this.host}:${this.port}/${this.dbName}`;
    }
};
console.log(databaseConfig);
console.log(databaseConfig.getConnectionString());


// 12
const student = {
    firstName2: "Ada",
    cohort: "Backend Engineering",
    stack: ["HTML", "JavaScript", "Node.js"],
    grades: {
        html: 92,
        javascript: 88
    }
};
const { firstName2, stack, grades: { javascript } } = student;
console.log(firstName2, stack, javascript);


// 13
const highScores = [95, 87, 72];
const [firstPlace, secondPlace] = highScores;
console.log(firstPlace, secondPlace);


// 14
const userSettings = {
    theme: "dark",
    notifications: true
};
const userProfile = {
    name: "Ada",
    email: "ada@example.com"
};
const fullUserRecord = { ...userSettings, ...userProfile };
console.log(fullUserRecord);


// 15
const sumAll = (...numbers) => numbers.reduce((sum, number) => sum + number, 0);
console.log(sumAll(2, 4));
console.log(sumAll(1, 2, 3, 4, 5));


// 16
const usernames = ["Ada", "Mark", "Chika", "John", "Sam"];
const shortNames = [];
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i].length === 4) {
        shortNames.push(usernames[i]);
    }
}
console.log(shortNames);


// 17
const products = [
    { name: "Notebook", price: 5000 },
    { name: "Pen", price: 1500 },
    { name: "Backpack", price: 12000 }
];
const pricesInDollars = products.map((product) => product.price / 1500);
console.log(pricesInDollars);


// 18
const users = [
    { name: "Ada", age: 24, isActive: true },
    { name: "Mark", age: 17, isActive: true },
    { name: "Chika", age: 30, isActive: false },
    { name: "John", age: 21, isActive: true }
];
const activeAdults = users.filter((user) => user.age > 18 && user.isActive);
console.log(activeAdults);


// 19
const cartPrices = [1500, 3000, 450, 8000];
const cartTotal = cartPrices.reduce((total, price) => total + price, 0);
console.log(cartTotal);


// 20
const accountUsers = [
    { id: 1, email: "ada@example.com", role: "user" },
    { id: 2, email: "mark@example.com", role: "admin" },
    { id: 3, email: "chika@example.com", role: "user" }
];
const userWithIdThree = accountUsers.find((user) => user.id === 3);
const hasAdmin = accountUsers.some((user) => user.role === "admin");
console.log(userWithIdThree);
console.log(hasAdmin);


// 21
const evenNumberSum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    .filter((number) => number % 2 === 0)
    .map((number) => number * 10)
    .reduce((sum, number) => sum + number, 0);
console.log(evenNumberSum);