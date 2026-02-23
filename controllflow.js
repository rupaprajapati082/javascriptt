// Control Flow Statements in JavaScript

// If-Else Statement (if, if else, if else-if else)
// if (condition) {} --> condition true hoy to {} code run
if (12 < 13) {
    console.log(true);
}

if (15 < 13) {
    console.log(true);
} // condition is false that why if statement not run

if (!12) { // 12 --> true, !12 --> flase
    console.log("number");
}

if (!0) {
    console.log("number");
}

// -----------------------------------------------------------------------------------------------
// if-else Statement

if (12 < 13) {
    console.log(true);
} else {
    console.log(false);
}

if (15 < 13) {
    console.log(true);
} // condition is false that why if statement not run
else {
    console.log(false); // if if statement condition is false then run this code
}

if (!12) {
    console.log("number");
} else {
    console.log("Not A Number");
}
// --------------------------------------------------------------------------------------------------

// if-else if-else Statement
/*
if (condition) {
} else if (condition) {
} else {
}
*/

let loggedin = false;
let admin = false;

if (loggedin && admin) {
    console.log("welcome admin");
} else if (loggedin) {
    console.log("welcome user");
} else {
    console.log("go to login page");
}
// ---------------------------------------------------------------
let marks = 89;

if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 75) {
    console.log("Grade B");
}
else if (marks >= 50) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}
// ----------------------------------------------------------------------


    let productName = "Laptop";
    let inStock = true;
    let price = 30000;

    if (inStock && price <= 31000) {
        console.log(productName + " is available and you can buy it");
    } 
    else if (inStock && price > 20000) {
        console.log(productName + " is available but too expensive");
    } 
    else {
        console.log(productName + " is out of stock");
    }
// ------------------------------------------------------------------------------
// Switch case Statement
switch ("BOGO") // value --> case value sathe match karshe ane code run thase
{
    case "First50":
        console.log("50% Off on First Order");
        break;

    case "BOGO":
        console.log("Buy one get one");
        break;

    case "BlackFriday":
        console.log("It's Black Friday Sale - get at Rs. 50");
        break;

    default:
        console.log("Offer Not Vaild");
}


// --------------------------------------------------------task

switch ("Rups") // value --> case value sathe match karshe ane code run thase
{
    case "First50":
        console.log("50% Off on First Order");
        break;
    default:
        console.log("Welcome to Rups");
}
//  -------------------------------------------------------------------

// Early Return Pattern
function score(value) {
    if (value > 90) {
        return "Value is more than 90";
    } 
    else if (value < 60) {
        return "Value is less than 60";
    } 
    else if (value < 70) {
        return "Value is less than 70";
    } 
    else if (value < 80) {
        return "Value is less than 80";
    } 
    else {
        return "Value is between 80 and 90";
    }
}

console.log(score(65));


// ---------------------------------------------------------------------
function score1(value) {
    if (value > 90) return "Value is more than 90";
    else if (value < 60) return "Value is less than 80";
    else if (value < 70) return "Value is less than 70";
    else if (value < 80) return "Value is less than 60";
    else return "Value is less than 60";
}
console.log(score1(95));

// ===================================================Task=============================

// example1
let x = 2;

switch (x) {
    case 2:
        console.log("Two");
    case 3:
        console.log("Three");
}

// example 2

function getGrade(score) {
    if (score >= 90 && score <= 100) return "A+";
    else if (score >= 80) return "A";
    else if (score >= 70) return "B";
    else if (score >= 60) return "C";
    else if (score >= 33) return "D";
    else if (score >= 0) return "Fail";
    else return "Invalid Marks";
}

console.log(getGrade(99));

//example 3

function rps(player1, player2) {
    if (player1 === "rock" && player2 === "scissors") return "rock";
    else if (player1 === "paper" && player2 === "rock") return "paper";
    else if (player1 === "scissors" && player2 === "paper") return "scissors";
    else return "No Winner";
}

console.log(rps("rock", "scissors"));