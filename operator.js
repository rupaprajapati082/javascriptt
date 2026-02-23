// operators
// Arithmetic, comparison, logical, assignment, unary, ternary

// Arithmetic:
// +, -, /, *, **, %

// + -> Add and concatenation
// ex. 1+2 -> Add
// "user" + "name" -> concat
// 5 + "5" -> concat, 5 + 5 -> Add

// -
// ex. 2 - 1

// /, *
// ex. 240/2, 25*2

// % (modulus) (sheshfal) (reminder)
// ex. 12%4 -> 0
// ex. 9%2 -> 1

// ** (square) (exposition)
// ex. 2**3 -> 8

// ---------------------------------------------------------------------------------------

// Comparison (ans: true, false)

// ==
// ex. 12 == 13, 12 == "12" (don't check type, only check value, not strict comparison)

// ===
// ex. 12 === "12" (check type and value, strict comparaision)

// !=
// ex. 12 != 13 (reverse of ==, not strict comparision)

// !==
// ex. 12!== "12" (reverse of ===)

// >=
// ex. 22 >= 22

// <=
// ex. 13 <= 13

// <
// ex. 12 < 113, 12 < 9, 22 < 22

// >
// ex. 12 > 113, 12 > 9, 13 > 13


// --------------------------------------------------------------------------------------------


// assignment

// =
// give a value, value assignment operator
// ex. let a = 12;

// +=
// ex. a += 3; (add value into old value and save it into a)

// -=
// ex. a -= 4; (subtract value into old value and save it into a)

// *=
// ex. a *= 2;

// /=
// ex. a /= 2;

// %=
// ex. a %= 2; (give remainder)

// ---------------------------------------------------------------------------------------------------------


// logical

// && (AND)
// ex. true && true --> true   12<13 && 14<15 --> true
// false && true --> false   12<10 && 14 < 15 --> false
// ture && false --> false
// false && false --> false


// || (OR)
// ex. true || true --> true
// false || true --> true
// ture || false --> true
// false || false --> false


// ! (NOT)
// ex. !true --> false
// !false --> true
// !12 --> false --> !!12 --> true

// unary

// Unary operator
//operators used : + - ! typeof ++ --
// + (convert string to number) ex below
// +"5" + 5 --> 10 (as it has converted +"5" to number)
// "5" + 5 --> 55 (performed concatenation)
// +"Name" + 5 --> NaN

// -
// ex. -5

//!
//ex. !12 --> false

//typeof  used to check dataype of variable
// typeof "Name" --> string

//++
// ex. let e = 12;
// e++ --> 12 // postfix e++ + e --> 25
// ++e --> 13 // postfix ++e + e --> 26

//--
// ex. let f = 12;
// f-- --> 12 // postfix f-- + f --> 23
// --f --> 13 // postfix --f + f --> 26

//Ternary operator
// ? :
// condition ? if true then this : else this
// let a = 12 > 13 ? console.log("true") : console.log("false")

// typeof null --> object
// typeof[] --> object
// let a = [];
// a instanceof Array --> true

// instanceof --> check type of refrence data type , typeof is not used for refrence datatype

// typeof NaN --> number
// typeof --> is used for primitive data type
// instanceof --> is used for refrence data type


// -------------------------------------------------------------------------------------------------------------------
// operators

// Unary Oprator
// + - ! typeof ++ --

// +
// covert string to number
// ex. +"5" --> 5
// +"Name" --> NaN
// "5" + 5 --> 55
// +"5" + 5 --> 10

// -
// ex. -5

// !
// ex. !12 --> false

// typeof
// ex. typeof "name" --> string

// ++
// ex. let a = 12
// a++ --> 12  // post ex. a++ + a => 25
// ++a --> 13 // pre ex. a++ + a => 26

// --
// ex. let a=3;
// a--
// a++

// -------------------------------------------------------------------------------------------------
// Ternary
// ? :

// condition ? true thase to print thase : false thase to print thase
// let a = 12>13 ? console.log("true") : console.log("false");

// typeof null --> object
// typeof [] --> object, let a = []; a instanceof Array --> true
// instanceof --> check type of reference data type // don't use typeof for reference data type
// typeof NaN --> number
// typeof --> primitive data type mate use karvo
// instanceof --> reference data type mate use karvo

//example 1
let x = 10;
let y = 20;

if (x > 5 && y > 5) {
  console.log("Both are greater than 5");
}

// Example 2

let isAdmin = true;
let isLoggedIn = false;

if (isAdmin || isLoggedIn) {
  console.log("Access granted");
}

//example 3
let temp = 35;

if (!(temp > 30)) {
  console.log("Hot day");
} else {
  console.log("Pleasant day");
}

// example 4
let a = 0;

if (a) {
  console.log("Truthy value");
} else {
  console.log("Falsy value");
}
//example 5
let score = 78;

let grade =
  score >= 90 ? "A" :
  score >= 80 ? "B" :
  score >= 70 ? "C" : "D";

  //example 6

  let points = 120;

let status =
  points >= 100 ? "Gold" :
  points >= 50 ? "Silver" : "Bronze";

  //example 7
  let loggedIn = true;
let hasToken = false;

let access = loggedIn && hasToken ? "Allow" : "Deny";


//example 8

let o = 5;
o++;
console.log(o);

//example 9

let p = 8;
++p;
console.log(p);

//example 10

let b = 4;
let c = b++;
console.log(b, c);

//example 11
let l = 4;
let m = ++b;
console.log(l, m);

//example 12
let z = 10;
console.log(z--);
console.log(z);

//example 13

let n = 5;
let result = n++ + ++n;
console.log(result);

//example 14

let likes = 100;
function likePost() 
{
//   result likes++;
}

//example 14

let count = 5;

if (count-- === 5) {
  console.log("Matched");
}

