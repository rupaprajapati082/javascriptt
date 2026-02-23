//Data types:
//two type of data types
//1. primitive data types
// copy --> real value
let a =5;
let b=a;

//type:string,number,boolean,null,undefined,symbol,bigint

//2 .non - primitive Data types (reference data types)[],(),{}
//copy --> give reference of parent

let d=[1,2,3];
let e=d;
//types:arrays[],objects{},functions()

//Primitive Data Types
//type:string,number,boolean,null,undefined,symbol,bigint

//string:
//'' -single quoutes
//"" -double quoutes
//``-Backticks

let r ="name";
r="username";
r=`firstname`;
//number:

let s=12;
s=12.25;
s=-25;

//boolean:

let f=true;
f=false;

//null:
//you give a value
let g = null;

//undefined:
//you dont give a value ,by default value 
let h;

// ================= SYMBOL =================
// Symbol = unique & immutable value

let u1 = Symbol("uid");
let u2 = Symbol("uid");

// check (u1 === u2); // false (symbols are always unique)

let obj = {
  uid: 1,
  name: "test",
  email: "test@test.com"
};

let u3 = "uid";
let u4 = Symbol("uid");

// normal string key
// obj[u3] = "001";

// symbol key (won't clash with other keys)
// obj[u4] = "002";

console.log(obj);
console.log(obj[u4]);


// ================= BIGINT =================
// Max safe integer in JS
// Number.MAX_SAFE_INTEGER = 9007199254740991

let number = 9007199254740991;
number=number + 6; // precision issue

let num2 = 900719925470991n; // BigInt
num2=num2 + 4n; // correct result

// BigInt + Number is not allowed
// console.log(num2 + 5); // Error
//---------------------------------------------------------------------------------------------------------
// ===== Non-Primitive Data Types =====
// Arrays, Objects, Functions
// -------- Array --------
let temp_array = ["user1", "user2", "user3"];
// -------- Object --------
let temp_obj = {
  name: "test",
  age: 9,
  phone_number: 558998554
};
// -------- Array of Objects --------
let profiles = [
  { name: "test1", age: 10, phone_number: 98989775 },
  { name: "test2", age: 15, phone_number: 989888775 },
  { name: "test3", age: 11, phone_number: 9898975575 },
];
// -------- Function --------
function names(params) {}
// Dynamic Typing
let u_name = "username";
u_name = 123;
u_name = {};
// javascript --> typescript

// typeof quirks
// typeof 12
// check type of variable use --> ex. typeof NaN, typeof null, 1 + "1" = "11", 1 == "1"
// why typeof NaN --> number
// NaN is a failed number operations that why that type is number
// ex. "hello" - 5 --> NaN

// Example 1
true + false

// Example 2
null + 1

// Example 3
"12" + 12

// Example 4
!!undefined

// Example 5
"12" - 1

// Undefined vs Null
let x;
console.log(x);

let y = null;
console.log(y);