//functions
//what --> funstion is a block of code that performanve a specific task.
// why --> to avoid code repetition and to make code modular and reusable
// how --> function keyword,name ,parameteres,body ,return statement

// type of functions:
// function name(params) {} ---> function declaration
function abc() {}

// let fnc = function (){} ---> function expression
let fnc = function () {};

// let fnc = () => {} ---> arrow function ---> fat arrow function
let fnc1 = () => {};

 function cart(product,price){
    // product --parmas
    console.log(" Product:",product,"||" ,"price:" ,price)
 }
cart("mobile",200000)
 cart("tablet",456788)
 cart("laptop",500000)

//  simple
 function tcart(){
  
    console.log("Adding Product")
 }
tcart()
 tcart()
 tcart()

 //convert into function expression 
 //let cart ==function(){}
//  convert into arrow function
  let cart2=(product,price)=>{
    // product --parmas
    console.log(" Product:",product,"||" ,"price:" ,price)
 }
cart2("mobile",200000)
 cart2("tablet",456788)
 cart2("laptop",500000)

//  default ,rest and spread parameters in function 
// default
function abc(v1,v2){
    console.log(v1,v2);

}abc(20,21)
function cart3(product ="product",price="price"){
    console.log(product,price)
}
cart3(4000000)
// example
function abr(v3,v4){
    console.log(v3,v4);

}abr(600,900)
function cart4(product ="product",price="price"){
    console.log(product,price)
}
cart4("mobile",900000)

function abcd(v1,v2,v3,v4,v5,v6,v7,v8,v9,v10)
{
    console.log(v1,v2,v3,v4,v5,v6,v7,v8,v9,v10);
}abcd(1,2,3,4,5,6,7,8,9,10);

function cart4(...product){
    console.log(product);
}
cart4("mobile","pc","laptop","cpu","makbook");

// rest --> Jayre function ma multiple arguments pass karva to vadhare params banava
// pade chhe nate ne karvu pade ke mare sparemeter use kariye chiye (rest ----> ...)
function abc(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10) {
    console.log(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10);
}

abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function abcd1(...numbers) {
    console.log(numbers);
}

abcd1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // how to handle multiple arguments

function abcd2(v3, v4, ...numbers) {

    console.log(v3, v4, numbers);
}

abcd2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//return of early return
//return --> function mathi value bahar moklava mate


function getValue1(value) {
    if (value < 25) return "Value is less than 25";
    else if (value < 50) return "Value is less than 50";
    else if (value < 75) return "Value is less than 75";
    return "Value is 100 or more";
}

let result = getValue1(80);
console.log(result);

//first class function
//function can be treated as variable
//function can be passed as argument to other functions
//functions can be returned from other functions

//FUNSTION CAN BE PASSED AS ARGUMENT TO OTHER FUNCTIONS
// let fnc = function(){}
// fnc(function(){})
function abc1(v1, v2){
    console.log(v2);
    return v1();
}

abc1(function(){
    console.log("first class function")
}, "Hello")

function abc2(v1, v2){
  
    console.log(v2);
      return v1();
}

abc2(function(){
    console.log("first class function")
}, "Hello")

// function can be returned from other function
function abc(){
    return function (){
        console.log("function within function");
    }
}
abc()();   


function abc2(){
    return () => {
        console.log("arrow function within function");
    }
}
abc2()();  


// higher order function (HOF)
// function that takes another function as an argument or returns a
// function as a result (eva function je return kare ek function athava
// accept kare ek function params ma)

// function abcd(val){val();}
// --> abcd(function(){console.log("hello")})

// function abcd(val){ }  --> higher order function

// function abcd(){ return function(){} }  abcd()()  --> higher order
//PURE VS IMPURE FUNCTIONS
//PURE FUNCTIONS --> FUNCTION JE SAME INPUT PAR SAME OUTPUT APSE ANE KOI BAHAR NA STATE NE MODIFY NA KARE (PURE FUNCTION --> JE FUNCTION BHAR NA STATE NE MODIFY NA KARE)
let a=20;
function change_a(){
    return "a not chnage(pure function);" +a;

}//pure function

console.log(change_a());
//IMPURE FUNCTIONS --> FUNCTION JE SAME INPUT PAR SAME OUTPUT APSE ANE KOI BAHAR NA STATE NE MODIFY KARE IMPURE FUNCTION --> JE FUNCTION BHAR NA STATE NE MODIFY  KARE)

function change_a1(){
    a++;
    a+=3;
    return "a chnage(impure function)" +a;
}
console.log(change_a())
console.log(change_a1())

// closure function
// function je potana parent function na variables ne access kari
// shake (return thava valo function use karshe parent function na koi
// variable) (function within function)

function outer(){
    let outer_var = "Outer Function Variable";
    function inner(){
        console.log(outer_var);
    }


inner();
}
outer();
//lexical scope--> nested function can access variable in theri outer


function outer1(){
    let outer_var = "Outer Function Variable";
    function inner1(){
        console.log(outer_var);
        let inner_var="inner function variable";
        function most_inner(){
          console.log(outer_var);
            console.log(inner_var);
    }
    most_inner();
}
inner1();
}
outer1();
//IIFE -Immediately invoked function expression
(function (){})();//function je declare karta j call thai jay
(function(){
console.log("IIFE executed");
})();
//hoisting  in function 
//use case--> show project structure
temp_fnc();
function temp_fnc(){
    console.log("Hoisting in function")
}

let temp_fnc1=()=>{
    console.log("Hoisting in arrow function ")
};
temp_fnc1();

temp_fnc2();
function temp_fnc2(){
    console.log("Hoisting in function expression")
};

/*************************
 Example 1
 Difference between function declaration & expression (hoisting)
*************************/

// Function Declaration → hoisted
greet(); // works
function greet(){
  console.log("Hello");
}
greet(); // works

// OUTPUT:
// Hello
// Hello

// ❌ Function Expression (not hoisted)
// Uncommenting below will cause error if called before definition
// const greet = function(){
//   console.log("Hello");
// }



/*************************
 Example 2
*************************/

greet(); // works because function declaration is hoisted

function greet(){
    console.log("Hello!");
}

// OUTPUT:
// Hello!



/*************************
 Example 3
 Convert normal function to arrow function
*************************/

// ❌ ERROR: Identifier 'add' has already been declared
// function add(a, b){
//     return a + b;
// }

// const add = (a, b) => a + b;

// ✅ Correct way (use only ONE)
const add = (a, b) => a + b;
console.log(add(2, 3));

// OUTPUT:
// 5



/*************************
 Example 4
 Parameters vs Arguments
*************************/

function welcome(name){ // name → parameter
    console.log("Welcome " + name);
}

welcome("user"); // "user" → argument

// OUTPUT:
// Welcome user



/*************************
 Example 5
 Missing arguments
*************************/

function temp (a, b, c){
    console.log(a, b, c);
}

temp(1, 2);

// OUTPUT:
// 1 2 undefined
// ❌ No error → missing argument becomes undefined



/*************************
 Example 6
 Default parameter
*************************/

function temp_user(name = "Guest"){
    console.log("Hello " + name);
}

temp_user();

// OUTPUT:
// Hello Guest



/*************************
 Example 7
 Rest operator
*************************/

function number(...numbers){
    console.log(numbers);
}

number(1, 2, 3, 4, 5);

// OUTPUT:
// [1, 2, 3, 4, 5]
// ...numbers collects arguments into an array



/*************************
 Example 8
 Rest parameters + total
*************************/

// ❌ WRONG LOOP (kept as comment – causes NaN)
// for(let i = 0; i <= scores.length; i++)

// ✅ Correct function
function calculateTotal(...scores){
    let total = 0;
    scores.forEach(function(val){
        total = total + val;
    });
    return total;
}

let sumtotal = calculateTotal(10, 20, 30, 40, 50);
console.log(sumtotal);

// OUTPUT:
// 150



/*************************
 Example 9
 Early return
*************************/

// Original (works but not optimized)
function checkAge(age){
    if(age < 18){
        console.log("Too Young");
    } else {
        console.log("Access Granted");
    }
}

checkAge(16);
checkAge(21);

// OUTPUT:
// Too Young
// Access Granted



/*************************
 Example 10
 Return value
*************************/

function f(){ 
    return;
}

console.log(f());

// OUTPUT:
// undefined
// Example 11: Functions are first-class citizens
function greetFn() {
    console.log("Hello");
}
let greetVar = greetFn; // assigned to variable
greetVar(); // called via variable

// Example 12: Assign function to a variable and call it
let sayHello = function() {
    console.log("Hello from sayHello");
};
sayHello(); // prints "Hello from sayHello"

// Example 13: Pass a function into another function and execute it
function executeFn(callback) {
    callback();
}
executeFn(function() { console.log("Hello from callbackFn"); });

// Example 14: Higher-order function
function higherOrderFn(fnArg) {
    console.log("Before calling fnArg");
    fnArg();
}
higherOrderFn(function() { console.log("Inside higher-orderFn"); });

// Example 16: Impure function
let totalSum = 0;
function addToTotal(val) {
    totalSum += val;
}
addToTotal(3);
console.log("Impure totalSum:", totalSum); // modifies external variable

// Example 17: Pure function
function addPure(a, b) {
    return a + b;
}
let pureSum = addPure(5, 3);
console.log("Pure sum:", pureSum); // does not modify outside state

// Example 18: Closure
function outerFn() {
    let countValue = 0;
    return function() {
        countValue++;
        console.log("Closure countValue:", countValue);
    };
}
const counterFn = outerFn();
counterFn();
counterFn();

// Example 19: Logging with closure
const counterFn2 = outerFn();
counterFn2(); // 1
counterFn2(); // 2

// Example 20: IIFE (Immediately Invoked Function Expression)
(function initFn() {
    console.log("Initialized via IIFE");
})();

// Example 21: IIFE for private variables
let scoreManager = (function() {
    let scoreValue = 0; // private
    return {
        getScore: function() {
            console.log("Score:", scoreValue);
        },
        setScore: function(val) {
            scoreValue = val;
        }
    };
})();
scoreManager.getScore(); // 0
scoreManager.setScore(10);
scoreManager.getScore(); // 10

// Example 22: Function expression called before definition
try {
    tempFunc(); // Error: tempFunc is not a function
} catch (e) {
    console.log("Error:", e.message);
}
var tempFunc = function() {
    console.log("Hello from tempFunc");
};

// Example 23: Function declaration called before definition
tempFunc2(); // Prints "Hello from tempFunc2"
function tempFunc2() {
    console.log("Hello from tempFunc2");
}
