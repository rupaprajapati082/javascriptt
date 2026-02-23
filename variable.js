//word vs keyword 
//variable --temp data store
//var ,let and cost 

var a="temp";
var _123="hello";
var $123="hello";

//var 123="number"
b=24;//never use

//let
//let temp="abc"

//const
const temp_const="hello world!!!";
//declaration and initialization 
var d;//declare
var temp_d=12;
//var add value into window
//var is function
//var can be redeclared and ressigned
var name ="username";
var name1="username";

//Reassignment,Redeclaration
var temp =12;
temp="number";//Reassignment
var temp="text";//Redeclaration

//let temp_a=24;
//var temp_a=34;  //You cant redeclare let var

const temp_b ="name";
// temp_b= "username"; // you cant reassign const variable



//scope (global ,Block ,Functional)
var e=23 ;//global
console.log("Global scope variable" + e);
{
    var e=25;//block
    console.log("Block scope  variable" + e);
}
function abc (){
    var e=30;//functional
    console.log("Functional scope variable" + e);
}
abc();
console.log("outside" +e);

// using Let 

let f=23 ;//global
console.log("Global scope let variable" + f);
{
    let f=25;//block
    console.log("Block scope let variable" + f);
}
function abc (){
    let f=30;//functional
    console.log("Functional scope let variable" + f);
}
abc();
console.log("outside" + f);



//Temporal Dead Zone (TDZ)
console.log(h);
var h=24;
//console.log(g);
console.log(j);
var j=12;

//hoisting impact
//hoisting --> when your create a variable into 
// js that break into two part first is declare part that go to up and there
// initializaton  part that go down 

var temp_d = 12;
// var temp_d; --> undefined; --> that go to up
// temp_d = 12; --> that go to down (means stuck into line 66)
// if you use console.log before initialization that give you
// undefined;

let temp_d_let=24;
//let variable not use before initialization 
//if you use console.log before initialization  that give you error;
//Hoisting impact on var,let ,const
/*
var --> hoist --> undefined
let --> hoist --> error
const -->hoist -->error
*/
// ===========================================================================
 // Example 1: let hoisting (Error case)
// console.log(nm);   // ReferenceError
let nm = "name";
console.log(nm);

//2
console.log(b);
var b = "username";

//3
var x = 1;
{
   var x = 2;
}
console.log(x);

//4

let r = 10;
{
   let r = 20;
   console.log("Inside:", r);
}
console.log("Outside:", r);


//5

const person = { name: "demo" };

person.name = "user";   
// person = {}; 
console.log(person.name)           
