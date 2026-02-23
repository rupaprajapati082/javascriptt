Javascript Variable
<h1>Example or Excercise:</h1>
<div>
<h3>Example 1 :</h3>
<p>console.log(nm);</p>
<p>let nm = "name";</p>
<p>Answer or Error: </p>
<p>Why : </p>
<h1>let hoist hota hai lekin Temporal Dead Zone (TDZ) me hota hai
Declare hone se pehle let variable use nahi kar sakte</h1>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>console.log(b);</p>-
<p>var b = "username";</p>
<p>Answer or Error: </p>
<p>Why : </p>
<h1>var hoist hota hai aur default value undefined hoti hai
Isliye error nahi aata</h1>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>var x = 1;</p>
<p>{
    var x= 2;
}
</p>
<p>console.log(x);</p>
<p>Answer or Error: </p>
<p>Why : </p>
<h1>var block scope follow nahi karta
Same variable overwrite ho jata hai</h1>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>let a = 10; </p>
<p>{
    let a = 20;
    console.log("Inside:", a);
}</p>
<p>
console.log("Outside:", a);
</p>
<p>Answer or Error: </p>
<p>Why : </p>
<h1>let block scope hota hai Block ke andar aur bahar alag variables bante hain</h1>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>const person = {name: "demo"}; </p>
on console.log
<p>person.name= "user"; ✅</p>
<p>person = {} ; ❌ </p>
<p>Answer or Error: </p>
<p>Why : </p>

<h1>
const me reference constant hota hai
Object ke andar ki value change ho sakti hai
Lekin poora object reassign nahi kar sakte</h1>
</div>
 
 

 Javascript Datatype:


<h3>Example 1 :</h3>
<p>true + false </p>
<p>Answer or Error: </p>
<p>Why : true is converted to 1
false is converted to 0
1 + 0 = 1
JavaScript automatically converts booleans to numbers when using + (if no string is involved).</p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>null + 1 </p>
<p>Answer or Error: </p>
<p>Why : null is converted to 0 in numeric operations
0 + 1 = 1</p>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>"12" + 12 </p>
<p>Answer or Error: </p>
<p>Why : "12" is a string
+ with a string performs string concatenation
Number 12 is converted to string "12"
Result: "12" + "12" → "1212"</p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>!! undefined</p>
<p>Answer or Error: </p>
<p>Why : undefined is a falsy value
!! converts a value to its boolean form</p>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>"12" - 1 </p>
<p>Answer or Error: </p>
<p>Why : - does not support string concatenation
JavaScript converts "12" to number 12
12 - 1 = 11</p>
</div>
 
<div>
<p> why typeof NaN --> number </p> 
<p>NaN is a failed number oprations that why that type is number</p>
<p> ex. "hello" + 5 --> NaN</p>
<p>Answer or Error: </p>
<p>Why : NaN means Not a Number
It is the result of an invalid numeric operation
JavaScript still treats it as a numeric type</p>
</div>
 
<div>
<p>Undefined vs Null</p>
<p>let x;</p>
<p>console.log(x);</p>
<p>let y = null;</p>
<p>console.log(y);</p>
<p>Answer or Error: </p>
<p>Why :Variable is declared but not assigned
JavaScript automatically assigns undefined =====</p>
</div>



<h2>JavaScript Operators (Simple)</h2>

<!-- Example 1 -->
<h3>Example 1</h3>
<p><b>Code:</b></p>
<pre>
console.log(a);
let a = 10;
</pre>

<p><b>Answer / Error:</b></p>
<p>Error: Cannot access 'a' before initialization</p>

<p><b>Why:</b></p>
<p>
let variable hoist hota hai par initialize nahi hota,
isliye pehle use karne par error aata hai.
</p>

<hr>

<!-- Example 2 -->
<h3>Example 2</h3>
<p><b>Code:</b></p>
<pre>
console.log(+"5" + 5);
</pre>

<p><b>Answer:</b></p>
<p>10</p>

<p><b>Why:</b></p>
<p>
Unary + string ko number bana deta hai.
</p>

<hr>

<!-- Example 3 -->
<h3>Example 3</h3>
<p><b>Code:</b></p>
<pre>
console.log("5" + 5);
</pre>

<p><b>Answer:</b></p>
<p>55</p>

<p><b>Why:</b></p>
<p>
String hone ki wajah se concatenation hota hai.
</p>

<hr>

<!-- Example 4 -->
<h3>Example 4</h3>
<p><b>Code:</b></p>
<pre>
console.log(typeof null);
</pre>

<p><b>Answer:</b></p>
<p>object</p>

<p><b>Why:</b></p>
<p>
JavaScript ka old bug hai.
</p>

<hr>

<!-- Example 5 -->
<h3>Example 5</h3>
<p><b>Code:</b></p>
<pre>
let arr = [];
console.log(typeof arr);
console.log(arr instanceof Array);
</pre>

<p><b>Answer:</b></p>
<p>object<br>true</p>

<p><b>Why:</b></p>
<p>
Array reference type hai, isliye instanceof use hota hai.
</p>

<hr>

<!-- Example 6 -->
<h3>Example 6</h3>
<p><b>Code:</b></p>
<pre>
console.log(!12);
console.log(!!12);
</pre>

<p><b>Answer:</b></p>
<p>false<br>true</p>

<p><b>Why:</b></p>
<p>
12 truthy value hai, ! reverse karta hai.
</p>

<hr>

<!-- Example 7 -->
<h3>Example 7</h3>
<p><b>Code:</b></p>
<pre>
let result = 12 > 13 ? "true" : "false";
console.log(result);
</pre>

<p><b>Answer:</b></p>
<p>false</p>

<p><b>Why:</b></p>
<p>
Condition false hai isliye else part chala.
</p>
<---------------------------------------------->

<div>
<h1>Example 1 :</h1>
<p>let x = 10;</p>
<p>let y = 20;</p>
<p>if(x>5 && y > 5){
    console.log("Both are greater than 5");
}else{
    console.log("One or both are not greater than 5");
}</p>
<p>why:&& (AND) operator me dono conditions true honi chahiye
x > 5 → true
y > 5 → true
Isliye if block execute hua</p>
</div>

<div>
<h1>Example 2 :</h1>
<p>let isAdmin = true;</p>
<p>let isLoggedIn = false;</p>
<p>if(isAdmin || isLoggedIn){
    console.log("Acess granted");
}else{
    console.log("Acess Denied");
}</p>
<p>why:
|| (OR) operator me ek bhi condition true ho to chalega
isAdmin true hai
Isliye access mil gaya</p>
</div>

<div>
<h1>Example 3 :</h1>
<p>let temp = 35;</p>
<p>if(!(temp > 30)){
    console.log("Hot day");
}else{
    console.log("Pleasant day");
}</p>
<p>Why:
temp > 30 → true
!true → false
if false hua → else execute hua</p>
</div>

<div>
<h1>Example 4 :</h1>
<p>let a = 0;</p>
<p>if(a){
    console.log("Truthy value");
}else{
    console.log("Falsy value");
}</p>
<p>Why:
JavaScript me 0 falsy value hoti hai
Isliye else block chala</p>
</div>

<div>
<h1>Example 5 :</h1>
<p>let score = 78;</p>
<p>let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";</p>
<p>console.log("Grade:", grade);</p>
<p>Why:
78 ≥ 70 → true
Isliye "C" assign hua</p>
</div>

<div>
<h1>Example 6 :</h1>
<p>let points = 120;</p>
<p>let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";</p>
<p>console.log("Status:", status);</p>
<p>Why:
120 ≥ 100 → true
First condition match hui
</p>
</div>

<div>
<h1>Example 7:</h1>
<p>let loggedIn = true;</p>
<p>let hasToken = false;</p>
<p>let access = loggedIn && hasToken ? "Allow" : "Deny";</p>
<p>console.log("access:", access);</p>
<p>Why:
&& me dono true hone chahiye
hasToken false hai
Isliye "Deny"</p>
</div>

<div>
<h1>Example 8:</h1>
<p>let a = 5;</p>
<p>a++</p>
<p>console.log(a);</p>
<p>Why:
a++ → value ko 1 se increase karta hai
5 → 6</p>
</div>

<div>
<h1>Example 9:</h1>
<p>let a = 8;</p>
<p>++a</p>
<p>console.log(a);</p>
<p>Why:
++a → pehle increase, phir use
8 → 9</p>
</div>

<div>
<h1>Example 10:</h1>
<p>let b = 4;</p>
<p>let c = b++</p>
<p>console.log(b, c);</p>
<p>
Why:
b++ → pehle value assign, baad me increase
c = 4
b = 5</p>
</div>

<div>
<h1>Example 11:</h1>
<p>let b = 4;</p>
<p>let c = ++b</p>
<p>console.log(b, c);</p>
<p>Why:
++b → pehle increase
b = 5, c = 5</p>
</div>

<div>
<h1>Example 11:</h1>
<p>let m = 10;</p>
<p>console.log(m--)</p>
<p>console.log(m);</p>
<p>Why:
m-- → pehle print, baad me decrease
First: 10
Then: 9</p>
</div>

<div>
<h1>Example 11:</h1>
<p>let n = 5;</p>
<p>let result = n++ + ++n;</p>
<p>console.log(result);</p>
<p>Why (step by step):
n++ → 5 (n = 6)
++n → 7
5 + 7 = 12</p>
</div>

<div>
<h1>Example 11:</h1>
<p>let likes = 100;</p>
<p>function likePost(){
result ++likes;
}</p>
<p>console.log(likePost());</p>
<p>console.log(likes);</p>
<p>Why:
result ++likes; ❌ invalid syntax
Correct syntax hota:</p>
</div>

<div>
<h1>Example 12:</h1>
<p>let count = 5;</p>
<p>if(count-- === 5){   
console.log("Matched");
}else{
    console.log("Not Matched"); 
}</p>
<p>Why:
count-- → pehle value compare hoti hai
5 === 5 → true
Baad me count 4 ho jata hai</p>
</div>
================================controllflow===================================
<div>
  <h1>Example 1 :</h1>

  <p>let x = 2;</p>

  <p>
  switch(x){
     case 2:
       console.log("Two");
     case 3:
       console.log("Three");
  }
  </p>

  <p><b>Output:</b> Two Three</p>

  <p><b>Why:</b>  
  Switch case me <code>break</code> use nahi kiya gaya hai,  
  isliye jab <code>case 2</code> match hua to uske baad ka  
  <code>case 3</code> bhi execute ho gaya (fall-through concept).
  </p>
</div>
<div>
  <h1>Example 2 :</h1>

  <p>
  function getGrade(score){
    if(score >= 90 && score <= 100) return "A+";
    else if(score >= 80) return "A";
    else if(score >= 70) return "B";
    else if(score >= 60) return "C";
    else if(score >= 33) return "D";
    else if(score >= 0) return "Fail";
    else return "Invalid Marks";
  }
  </p>

  <p><b>Output (getGrade(75)):</b> B</p>

  <p><b>Why:</b>  
  Score 75, 70–79 ke range me aata hai,  
  isliye function <b>"B"</b> return karta hai.  
  Conditions top-to-bottom check hoti hain.
  </p>
</div>
<div>
  <h1>Example 3 :</h1>

  <p>Rock-Paper-Scissors Logic</p>

  <p>rock - scissors --> rock</p>
  <p>paper - rock --> paper</p>
  <p>scissors - paper --> scissors</p>

  <p><b>Why:</b>  
  Game ke rules ke according:
  Rock scissors ko tod deta hai,  
  Paper rock ko cover karta hai,  
  aur Scissors paper ko kaat deta hai.  
  Isliye in combinations me winner decide hota hai.
  </p>
</div>

<p>------------------------------------------------------------------------</p>

<div>
<h1>Example 2:</h1>
<p>Print number from 10 to 1 using while loop.</p>
 <p><b>Why:</b></p>
<p>
while loop pehle condition check karta hai.<br>
Jab tak condition true hoti hai, loop chalta rehta hai.<br>
Yahan variable 10 se start hota hai aur har baar 1 se kam hota hai,<br>
isliye numbers 10 se 1 tak print hote hain.
</p>
</div>




<div>
<h1> (Break and Continue)Example 10:</h1>
<p>Stop at First Multiple of 7</p>
<p>Write a Loop from 1 to 100 that:</p>
<p>Prints Each number</p>
<p>Stop Completely when it finds the first number divisible by 7</p>
<p>
for(let i=1; i<=100; i++){
    console.log(i);
    if(i%7 ===0){
        break;
    }
}
</p>
 <p><b>Why:</b></p>
  <p>
    loop har number ko print karta hai.<br>
    Jaise hi pehla number 7 se divisible milta hai,<br>
    break statement loop ko poori tarah stop kar deta hai.
  </p>
</div>

<div>
<h1> (Break and Continue)Example 11:</h1>
<p>Skip Multiples of 3</p>
<p>Write a Loop From 1 to 20 that:</p>
<p>Skip number divisible by 3</p>
<p>Prints all other numbers</p>
<p>
for(let i=1; i<=20; i++){
    if(i%3 ===0){
        continue;
    }
    console.log(i);

}
</p>
<p><b>Why:</b></p>
  <p>
    continue statement multiples of 3 ko skip kar deta hai.<br>
    Jo numbers 3 se divisible nahi hain,<br>
    sirf wahi numbers print hote hain.
  </p>
  </div>
  ====================================================================function===================================
  <h2>## Function Examples</h2>
<hr>

<div>
<h1> Example 1: Function Declaration vs Expression </h1>
<p>Ans: Function declarations are hoisted fully and can be called before they are defined. Function expressions are not hoisted fully; the variable is hoisted but assignment happens at runtime.</p>
<p>Why: Declarations are stored in memory during the compilation phase; expressions are assigned at runtime.</p>
</div>

<div>
<h1> Example 2: Function hoisting with declaration </h1>
<pre>
greet();
function greet(){
    console.log("Hello!");
}
// Output: Hello!
</pre>
<p>Why: Function declarations are hoisted, so calling before definition works.</p>
</div>

<div>
<h1> Example 3: Convert normal function to Arrow Function </h1>
<pre>
function add(a, b){
    return a + b;
}

// Arrow Function
const addArrow = (a, b) => a + b;

console.log(add(2, 3));      // 5
console.log(addArrow(2, 3)); // 5
</pre>
<p>Why: Arrow functions provide a shorter syntax and inherit `this` from the parent scope.</p>
</div>

<div>
<h1> Example 4: Parameters vs Arguments </h1>
<pre>
function welcome(name){ // 'name' is a parameter
    console.log("Welcome " + name);
}
welcome("user"); // "user" is the argument
// Output: Welcome user
</pre>
<p>Why: Parameters are placeholders; arguments are actual values passed.</p>
</div>

<div>
<h1> Example 5: Number of parameters vs arguments </h1>
<pre>
function temp(a, b, c){
    console.log(a, b, c);
}
temp(1, 2);
// Output: 1 2 undefined
</pre>
<p>Why: There are 3 parameters but only 2 arguments; missing arguments are `undefined`.</p>
</div>

<div>
<h1> Example 6: Default parameters </h1>
<pre>
function temp_user(name = "Guest"){
    console.log("Hello " + name);
}
temp_user();        // Output: Hello Guest
temp_user("Rupa");  // Output: Hello Rupa
</pre>
<p>Why: Default parameter assigns value if argument is missing.</p>
</div>

<div>
<h1> Example 7: Rest operator (...) </h1>
<pre>
function number(...numbers){
    console.log(numbers);
}
number(1, 2, 3, 4, 5); // Output: [1,2,3,4,5]
</pre>
<p>Why: `...` collects all arguments into an array, useful for variable number of arguments.</p>
</div>

<div>
<h1> Example 8: Calculate total with rest parameters </h1>
<pre>
function calculateTotal(...scores){
    let total = 0;
    for(let i = 0; i < scores.length; i++){
        total += scores[i];
    }
    return total;
}

let sumTotal = calculateTotal(10, 20, 30, 40, 50);
console.log(sumTotal); // 150
</pre>
<p>Why: Rest parameters allow passing any number of arguments and summing them.</p>
</div>

<div>
<h1> Example 9: Early return in function </h1>
<pre>
function checkAge(age){
    if(age < 18) return console.log("Too Young");
    console.log("Access Granted");
}
checkAge(15); // Too Young
checkAge(20); // Access Granted
</pre>
<p>Why: Early return avoids extra else nesting, makes code cleaner.</p>
</div>

<div>
<h1> Example 10: Return value of a function </h1>
<pre>
function f(){
    return;
}
console.log(f()); // undefined
</pre>
<p>Why: If `return` is used without a value, the function returns `undefined` by default.</p>
</div>


  <div>
<h1> Example 11: </h1>
<p>What does it mean when we say "functions are first-class citizens"?</p>
<p>Ans: Functions can be treated like any other value in JavaScript. They can be assigned to variables, passed as arguments, or returned from other functions.</p>
<p>Why: Because JavaScript allows functions to be stored in variables, passed to other functions, and returned from functions, making them "first-class citizens".</p>
</div>

<div>
<h1> Example 12: </h1>
<p>Can you assign a function to a variable and then call it?</p>
<p>let a = function(){console.log("Hello");}</p>
<p>a();</p>
<p>Ans: Logs "Hello" to the console.</p>
<p>Why: The function is stored in variable `a`, and calling `a()` executes that function.</p>
</div>

<div>
<h1> Example 13: </h1>
<p>Pass a function into another function and execute it inside.</p>
<p>function abcd(val){ val() }</p>
<p>abcd(function(){ console.log("Hello") })</p>
<p>Ans: Logs "Hello" to the console.</p>
<p>Why: The function passed as an argument is called inside `abcd`, demonstrating a callback function.</p>
</div>

<div>
<h1> Example 14: </h1>
<p>What is a higher-order function?</p>
<p>Ans: A function that takes another function as an argument or returns a function.</p>
<p>Why: Higher-order functions allow functions to be used as values, enabling callbacks, functional programming, and more flexible code.</p>
</div>

<div>
<h1> Example 16: </h1>
<p>Pure or impure function?</p>
<p>let total = 5;</p>
<p>function num(num){ total += num; }</p>
<p>num(3);</p>
<p>Ans: Impure function.</p>
<p>Why: The function modifies an external variable `total`, causing side effects. Pure functions do not rely on or modify external state.</p>
</div>

<div>
<h1> Example 17: </h1>
<p>Convert example 16 function into a pure function.</p>
<p>function num(total, num){ return total + num; }</p>
<p>Ans: Use it like `let newTotal = num(5, 3);`</p>
<p>Why: It does not modify external variables and returns a new value based only on its inputs, making it pure.</p>
</div>

<div>
<h1> Example 18: </h1>
<p>What is Closure? When is it created?</p>
<p>Ans: Closure is a function that remembers the variables from its outer scope even after the outer function has finished executing.</p>
<p>Example:</p>
<pre>
function outer() {
    let name = "Rupa";
    return function() {
        console.log(name);
    }
}
const inner = outer();
inner(); // Logs "Rupa"
</pre>
<p>Why: Closures are created when an inner function accesses variables from its outer function, preserving the scope.</p>
</div>

<div>
<h1> Example 19: </h1>
<p>What's logged?</p>
<pre>
function outer(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    };
}
const counter = outer();
counter();
counter();
</pre>
<p>Ans: 1 then 2</p>
<p>Why: The inner function is a closure that remembers `count` from the outer function. Each call increments the same `count` variable.</p>
</div>

<div>
<h1> Example 20: </h1>
<p>Convert below function into an IIFE:</p>
<pre>
function init(){
    console.log("Initialized");
}
</pre>
<p>Ans:</p>
<pre>
(function init(){
    console.log("Initialized");
})();
</pre>
<p>Why: IIFE (Immediately Invoked Function Expression) runs the function immediately without explicitly calling it later.</p>
</div>

<div>
<h1> Example 21: </h1>
<p>What is the use of IIFE? Name one real-world use case.</p>
<pre>
let fun = (function(){
    let score = 0; // this is private variable
    return {
        getScore: function(){ console.log(score); },
        setScore: function(val){ score = val; }
    }
})();
</pre>
<p>Ans: IIFE is used to create private variables and avoid polluting the global scope. Real-world use case: module pattern.</p>
<p>Why: The function runs immediately and returns an object with access to private variables, simulating encapsulation.</p>
</div>

<div>
<h1> Example 22: </h1>
<p>What will be the output here and why?</p>
<pre>
temp_var();
var temp_var = function(){
    console.log("Hello");
}
</pre>
<p>Ans: Error - temp_var is not a function</p>
<p>Why: `var` declarations are hoisted but the assignment is not. At the time of calling, `temp_var` is undefined.</p>
</div>

<div>
<h1> Example 23: </h1>
<p>What will be the output here and why?</p>
<pre>
temp_var();
function temp_var(){
    console.log("Hello");
}
</pre>
<p>Ans: Logs "Hello"</p>
<p>Why: Function declarations are fully hoisted, so the function is available before its definition in the code.</p>
</div>
=============================================================Array======================================================
<!-- Array Method : push, pop, shift, unshift, splice, slice, reverse -->

// Q1. push()
// Add a new task 'Buy milk'
let tasks = ['Wake up', 'Brush teeth'];
tasks.push('Buy milk');
// Why: push() adds an element at the end of the array.


// Q2. pop()
// Remove the last notification
let notifications = ['Email', 'Message', 'Reminder'];
notifications.pop();
// Why: pop() removes the last element from the array.


// Q3. shift()
// Remove the first customer
let customers = ['Customer1', 'Customer2', 'Customer3'];
customers.shift();
// Why: shift() removes the first element of the array.


// Q4. unshift()
// Add a new song at the beginning
let playlist = ['Song B', 'Song C'];
playlist.unshift('Song A');
// Why: unshift() adds an element at the start of the array.


// Q5. splice()
// Remove 'Alex' and add 'John' and 'Sara'
let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
students.splice(1, 1, 'John', 'Sara');
// Why: splice(start, deleteCount, items...) removes and adds elements at the same position.


// Q6. splice()
// Remove 2 items starting from index 1
let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
menu.splice(1, 2);
// Why: splice() can remove multiple elements starting from a given index.


// Q7. slice()
// Create a new array of weekend days
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let weekend = days.slice(5, 7);
// Why: slice() returns a new array without changing the original.


// Q8. reverse()
// Reverse the order of levels
let levels = ['Easy', 'Medium', 'Hard'];
levels.reverse();
// Why: reverse() reverses the array and mutates the original array.


// Q9. sort()
// Sort scores in ascending order
let scores = [45, 12, 78, 34, 89];
scores.sort((a, b) => a - b);
// Why: compare function is needed to sort numbers correctly.


// Q10. sort() with numbers
// Sort prices from lowest to highest
let prices = [199, 49, 999, 299, 149];
prices.sort((a, b) => a - b);
// Why: default sort treats numbers as strings, so comparator is required.


// Q11. slice() vs splice()
// First 3 items without changing original array
let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
let firstThree = products.slice(0, 3);
// Why: slice() does not mutate the original array.


// Q12. splice() complex
// Remove 'Blue' and add 'Purple' and 'Orange'
let colors = ['Red', 'Green', 'Blue', 'Yellow'];
colors.splice(2, 1, 'Purple', 'Orange');
// Why: Blue is removed and new colors are inserted at the same index.


// Q13. reverse() + push()
// Reverse and add 'Final Step'
let steps = ['Step 1', 'Step 2', 'Step 3'];
steps.reverse();
steps.push('Final Step');
// Why: reverse() changes order, push() adds element at end.


// Q14. sort() strings ignoring case
let names = ['alice', 'Bob', 'charlie', 'David'];
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
// Why: toLowerCase() helps in case-insensitive sorting.


// Q15. Combination Question
// Add, remove first, then sort
let movies = ['Avatar', 'Titanic', 'Gladiator'];
movies.push('Inception');
movies.shift();
movies.sort();
// Why: push() adds, shift() removes first, sort() arranges alphabetically.


// Q16. splice() return value
let nums1 = [1, 2, 3, 4];
let removed = nums1.splice(1, 2);
// Answer: removed = [2, 3]
// Why: splice() returns an array of removed elements.


// Q17. slice() immutability check
let nums2 = [10, 20, 30, 40];
let result = nums2.slice(1, 3);
// Answer: original array does not change.
// Why: slice() is non-mutating.


// Q19. reverse() mutation
let letters = ['a', 'b', 'c'];
let reversedLetters = letters.reverse();
// Answer: both variables reference the same reversed array.
// Why: reverse() mutates the array.


// Q21. splice() edge case (deleteCount = 0)
let arr = ['x', 'y', 'z'];
arr.splice(1, 0, 'new');
// Answer: ['x', 'new', 'y', 'z']
// Why: no element is deleted, only inserted.


// Q23. slice() negative index
let values = [100, 200, 300, 400, 500];
let sliced = values.slice(-3, -1);
// Answer: [300, 400]
// Why: negative index counts from the end.


// Q24. splice() vs slice()
// Which method to use?
// a) Update the original array
// Answer: splice()
// Why: splice() directly modifies (mutates) the original array.

// b) Keep the original array unchanged
// Answer: slice()
// Why: slice() returns a new array and does not change the original one.


// Q25. Chained methods
let arr2 = [1, 2, 3];
arr2.push(arr2.shift());
// Answer: [2, 3, 1]
// Why: shift() removes first element and push() adds it at the end.

<!-- ------------------------------------TASK------------------------------------ -->
<!-- Javascript Array Examples: -->
<div>
  <h1>Example 1: Double daily steps count</h1>
  <p>Real life: Fitness app doubling step goal</p>
  <p>const steps = [1000, 2000, 3000];</p>
  <p>const newSteps = steps.map(step => step * 2);</p>
  <p>Answer: [2000, 4000, 6000]</p>
  <p>Why: map() har step ko 2 se multiply karke naya array banata hai.</p>
</div>

<div>
  <h1>Example 2: Convert minutes to seconds</h1>
  <p>Real life: Video duration calculation</p>
  <p>const minutes = [1, 5, 10];</p>
  <p>const seconds = minutes.map(min => min * 60);</p>
  <p>Answer: [60, 300, 600]</p>
  <p>Why: 1 minute = 60 seconds, map() har value convert karta hai.</p>
</div>

<div>
  <h1>Example 3: Add ₹50 delivery charge</h1>
  <p>Real life: Food delivery app</p>
  <p>const prices = [200, 350, 500];</p>
  <p>const finalPrices = prices.map(price => price + 50);</p>
  <p>Answer: [250, 400, 550]</p>
  <p>Why: map() har price me ₹50 add karta hai.</p>
</div>

<div>
  <h1>Example 4: Convert exam marks to grades</h1>
  <p>Real life: Result system</p>
  <p>const marks = [35, 72, 88, 40];</p>
  <p>const grades = marks.map(mark => mark &gt;= 40 ? 'Pass' : 'Fail');</p>
  <p>Answer: ['Fail', 'Pass', 'Pass', 'Pass']</p>
  <p>Why: Condition ke basis par map() Pass ya Fail return karta hai.</p>
</div>

<div>
  <h1>Example 5: Capitalize names</h1>
  <p>Real life: Display usernames properly</p>
  <p>const names = ['rahul', 'neha', 'amit'];</p>
  <p>const formattedNames = names.map(name => name[0].toUpperCase() + name.slice(1));</p>
  <p>Answer: ['Rahul', 'Neha', 'Amit']</p>
  <p>Why: map() har name ka first letter capital karta hai.</p>
</div>

<div>
  <h1>Example 6: Apply 10% discount</h1>
  <p>Real life: Shopping sale</p>
  <p>const prices = [500, 1000, 1500];</p>
  <p>const discounted = prices.map(price => price - price * 0.10);</p>
  <p>Answer: [450, 900, 1350]</p>
  <p>Why: map() har price par 10% discount apply karta hai.</p>
</div>

<div>
  <h1>Example 7: Add bonus points</h1>
  <p>Real life: Game scoring system</p>
  <p>const scores = [45, 60, 85];</p>
  <p>const finalScores = scores.map(score => score &gt;= 80 ? score + 20 : score &gt;= 50 ? score + 10 : score);</p>
  <p>Answer: [45, 70, 105]</p>
  <p>Why: Score ke range ke according bonus add hota hai.</p>
</div>

<div>
  <h1>Example 8: Convert Celsius to Fahrenheit</h1>
  <p>Real life: Weather app</p>
  <p>const celsius = [0, 20, 30];</p>
  <p>const fahrenheit = celsius.map(temp => (temp * 9/5) + 32);</p>
  <p>Answer: [32, 68, 86]</p>
  <p>Why: Formula use karke map() temperature convert karta hai.</p>
</div>

<div>
  <h1>Example 9: Generate table of 2</h1>
  <p>Real life: Math learning app</p>
  <p>const numbers = [1, 2, 3, 4];</p>
  <p>const tableOfTwo = numbers.map(num => num * 2);</p>
  <p>Answer: [2, 4, 6, 8]</p>
  <p>Why: map() har number ko 2 se multiply karta hai.</p>
</div>

<div>
  <h1>Example 10: Balance message formatting</h1>
  <p>Real life: SMS notification system</p>
  <p>const balances = [500, 1200, 300];</p>
  <p>const messages = balances.map(balance => `Your balance is ₹${balance}`);</p>
  <p>Answer: ['Your balance is ₹500', 'Your balance is ₹1200', 'Your balance is ₹300']</p>
  <p>Why: map() string template ke saath message generate karta hai.</p>
</div>

<div>
  <h1>Example 1: Get even numbers</h1>
  <p>Find even roll numbers</p>
  <p>const numbers = [1, 2, 3, 4, 5, 6];</p>
  <p>const evenNumbers = numbers.filter(num => num % 2 === 0);</p>
  <p>Answer or Error: [2, 4, 6]</p>
  <p>Why: filter() sirf wahi numbers return karta hai jo even condition satisfy karte hain.</p>
</div>

<div>
  <h1>Example 2: Filter adults</h1>
  <p>Allow only adult users</p>
  <p>const ages = [2, 1, 10, 16, 5];</p>
  <p>const adults = ages.filter(age => age >= 18);</p>
  <p>Answer or Error: []</p>
  <p>Why: Koi bhi age 18 ya usse zyada nahi hai.</p>
</div>

<div>
  <h1>Example 3: Remove empty items</h1>
  <p>Clean user input</p>
  <p>const inputs = ['Hello', '', 'World', '', 'JS'];</p>
  <p>const validInputs = inputs.filter(text => text !== '');</p>
  <p>Answer or Error: ['Hello', 'World', 'JS']</p>
  <p>Why: Empty strings filter ho jaati hain.</p>
</div>

<div>
  <h1>Example 4: Filter passing marks</h1>
  <p>Exam result system</p>
  <p>const marks = [35, 72, 88, 40, 25];</p>
  <p>const passedStudents = marks.filter(mark => mark >= 40);</p>
  <p>Answer or Error: [72, 88, 40]</p>
  <p>Why: Sirf 40 ya usse zyada marks wale select hote hain.</p>
</div>

<div>
  <h1>Example 5: Get affordable prices</h1>
  <p>Shopping app price filter</p>
  <p>const prices = [199, 499, 999, 1499, 299];</p>
  <p>const affordable = prices.filter(price => price <= 500);</p>
  <p>Answer or Error: [199, 499, 299]</p>
  <p>Why: ₹500 se kam ya barabar prices filter hoti hain.</p>
</div>

<div>
  <h1>Example 6: Filter long words</h1>
  <p>Search keyword validation</p>
  <p>const words = ['hi', 'hello', 'javascript', 'ok'];</p>
  <p>const longWords = words.filter(word => word.length > 3);</p>
  <p>Answer or Error: ['hello', 'javascript']</p>
  <p>Why: 3 se zyada length wale words select hote hain.</p>
</div>

<div>
  <h1>Example 7: Filter positive numbers</h1>
  <p>Bank transaction validation</p>
  <p>const transactions = [200, -100, 500, -50, 300];</p>
  <p>const credits = transactions.filter(amount => amount > 0);</p>
  <p>Answer or Error: [200, 500, 300]</p>
  <p>Why: Sirf positive amounts allow kiye gaye hain.</p>
</div>

<div>
  <h1>Example 8: Filter numbers within a range</h1>
  <p>Score selection</p>
  <p>const scores = [45, 60, 85, 30, 90];</p>
  <p>const selectedScores = scores.filter(score => score >= 50 && score <= 90);</p>
  <p>Answer or Error: [60, 85, 90]</p>
  <p>Why: Range condition ke andar wale scores hi milte hain.</p>
</div>

// =======================
// JAVASCRIPT REDUCE EXAMPLES
// =======================

// 1. Total money in wallet
// Real life: Add all cash amounts
const money = [100, 200, 50];
const totalMoney = money.reduce((sum, amount) => sum + amount, 0);
console.log('Total money:', totalMoney); // 350

// --------------------------------------------------

// 2. Total steps walked in a week
// Real life: Fitness tracker
const steps = [3000, 5000, 4000, 6000];
function addSteps(total, step) {
  return total + step;
}
const weeklySteps = steps.reduce(addSteps, 0);
console.log('Weekly steps:', weeklySteps); // 18000

// --------------------------------------------------

// 3. Find total cart price
// Real life: Shopping bill
const prices = [499, 299, 199];
const totalPrice = prices.reduce((total, price) => total + price, 0);
console.log('Total cart price:', totalPrice); // 997

// --------------------------------------------------

// 4. Find maximum score
// Real life: Highest exam mark
const marks = [45, 88, 67, 92];
const highest = marks.reduce((max, mark) => mark > max ? mark : max, marks[0]);
console.log('Highest score:', highest); // 92

// --------------------------------------------------

// 5. Count total characters
// Real life: Text length calculation
const words = ['Hi', 'Hello', 'JS'];
const totalChars = words.reduce((count, word) => count + word.length, 0);
console.log('Total characters:', totalChars); // 9

// --------------------------------------------------

// 6. Combine words into a sentence
// Real life: Message builder
const wordsSentence = ['Learning', 'JavaScript', 'is', 'fun'];
const sentence = wordsSentence.reduce((text, word) => text + ' ' + word);
console.log('Sentence:', sentence); // "Learning JavaScript is fun"

// --------------------------------------------------

// 7. Count passed students
// Real life: Result summary
const examMarks = [35, 72, 88, 40, 25];
const passCount = examMarks.reduce((count, mark) => mark >= 40 ? count + 1 : count, 0);
console.log('Passed students:', passCount); // 3

// --------------------------------------------------

// 8. Calculate final balance
// Real life: Bank account calculation
const transactions = [1000, -200, -300, 500];
const finalBalance = transactions.reduce((balance, amount) => balance + amount, 0);
console.log('Final balance:', finalBalance); // 1000

// --------------------------------------------------

// 9. Build comma-separated string
// Real life: Display values in UI
const items = ['Pen', 'Book', 'Pencil'];
const result = items.reduce((text, item) => text + ', ' + item);
console.log('Comma-separated items:', result); // "Pen, Book, Pencil"
<div>
  <h1>Example 1: Total money in wallet</h1>
  <p>Add all cash amounts</p>
  <p>const money = [100, 200, 50];</p>
  <p>const totalMoney = money.reduce((sum, amount) => sum + amount, 0);</p>
  <p>Answer or Error: 350</p>
  <p>Why: reduce() har amount ko sum me add karta hai.</p>
</div>

<div>
  <h1>Example 2: Total steps walked in a week</h1>
  <p>Fitness tracker</p>
  <p>const steps = [3000, 5000, 4000, 6000];</p>
  <p>const weeklySteps = steps.reduce((total, step) => total + step, 0);</p>
  <p>Answer or Error: 18000</p>
  <p>Why: Sabhi daily steps ko ek total me joda gaya hai.</p>
</div>

<div>
  <h1>Example 3: Find total cart price</h1>
  <p>Shopping bill</p>
  <p>const prices = [499, 299, 199];</p>
  <p>const totalPrice = prices.reduce((total, price) => total + price, 0);</p>
  <p>Answer or Error: 997</p>
  <p>Why: reduce() prices ka total nikalta hai.</p>
</div>

<div>
  <h1>Example 4: Find maximum score</h1>
  <p>Highest exam mark</p>
  <p>const marks = [45, 88, 67, 92];</p>
  <p>const highest = marks.reduce((max, mark) => mark > max ? mark : max);</p>
  <p>Answer or Error: 92</p>
  <p>Why: Har value ko compare karke sabse bada number return hota hai.</p>
</div>

<div>
  <h1>Example 5: Count total characters</h1>
  <p>Text length calculation</p>
  <p>const words = ['Hi', 'Hello', 'JS'];</p>
  <p>const totalChars = words.reduce((count, word) => count + word.length, 0);</p>
  <p>Answer or Error: 9</p>
  <p>Why: Har word ki length ko add kiya gaya hai.</p>
</div>

<div>
  <h1>Example 6: Combine words into a sentence</h1>
  <p>Message builder</p>
  <p>const words = ['Learning', 'JavaScript', 'is', 'fun'];</p>
  <p>const sentence = words.reduce((text, word) => text + ' ' + word);</p>
  <p>Answer or Error: Learning JavaScript is fun</p>
  <p>Why: reduce() words ko ek string me combine karta hai.</p>
</div>

<div>
  <h1>Example 7: Count passed students</h1>
  <p>Result summary</p>
  <p>const marks = [35, 72, 88, 40, 25];</p>
  <p>const passCount = marks.reduce((count, mark) => mark >= 40 ? count + 1 : count, 0);</p>
  <p>Answer or Error: 3</p>
  <p>Why: Sirf pass marks par count increase hota hai.</p>
</div>

<div>
  <h1>Example 8: Calculate final balance</h1>
  <p>Bank account calculation</p>
  <p>const transactions = [1000, -200, -300, 500];</p>
  <p>const finalBalance = transactions.reduce((balance, amount) => balance + amount, 0);</p>
  <p>Answer or Error: 1000</p>
  <p>Why: Credits aur debits ko add karke final balance milta hai.</p>
</div>

<div>
  <h1>Example 9: Build comma-separated string</h1>
  <p>Display values in UI</p>
  <p>const items = ['Pen', 'Book', 'Pencil'];</p>
  <p>const result = items.reduce((text, item) => text + ', ' + item);</p>
  <p>Answer or Error: Pen, Book, Pencil</p>
  <p>Why: reduce() array ko ek string me convert karta hai.</p>
</div>


<div>
  <h1>Example 1: Shopping App – Discounted Total</h1>
  <p>const prices = [200, 800, 1200, 450, 700];</p>
  <p>const total = prices.filter(price => price > 500).map(price => price * 0.9).reduce((sum, price) => sum + price, 0);</p>
  <p>Answer or Error: 2430</p>
  <p>Why: Pehle 500 se upar prices filter hue, phir 10% discount laga aur end me total nikala.</p>
</div>

<div>
  <h1>Example 2: Fitness App – Total Active Minutes</h1>
  <p>const minutes = [20, 45, 60, 15, 90];</p>
  <p>const totalCalories = minutes.filter(min => min > 30).map(min => min * 5).reduce((total, cal) => total + cal, 0);</p>
  <p>Answer or Error: 975</p>
  <p>Why: 30 se zyada minutes wale days select hue, calories me convert hue aur total add hua.</p>
</div>

<div>
  <h1>Example 3: Exam System – Average of Passed Marks</h1>
  <p>const marks = [35, 72, 88, 40, 25, 90];</p>
  <p>const passed = marks.filter(mark => mark >= 40);</p>
  <p>const average = passed.reduce((sum, mark) => sum + mark, 0) / passed.length;</p>
  <p>Answer or Error: 72.5</p>
  <p>Why: Sirf passing marks liye gaye aur unka average nikala.</p>
</div>

<div>
  <h1>Example 4: Salary System – Monthly Payout</h1>
  <p>const wages = [300, 800, 450, 1000, 600];</p>
  <p>const totalPayout = wages.filter(wage => wage > 500).map(wage => wage + 100).reduce((total, wage) => total + wage, 0);</p>
  <p>Answer or Error: 2700</p>
  <p>Why: 500 se zyada wages par bonus add karke total payout nikala.</p>
</div>

<div>
  <h1>Example 5: Online Course – Completion Points</h1>
  <p>const progress = [20, 50, 75, 40, 100];</p>
  <p>const totalPoints = progress.filter(p => p >= 50).map(p => p * 2).reduce((sum, p) => sum + p, 0);</p>
  <p>Answer or Error: 450</p>
  <p>Why: Completed lessons ko points me convert karke total nikala.</p>
</div>

<div>
  <h1>Example 6: Bank Transactions – Final Balance</h1>
  <p>const transactions = [1000, -500, 2000, -300, 1500];</p>
  <p>const creditedAmount = transactions.filter(amount => amount > 0).map(amount => amount * 1.02).reduce((total, amount) => total + amount, 0);</p>
  <p>Answer or Error: 4590</p>
  <p>Why: Sirf credit transactions par interest add karke total calculate hua.</p>
</div>

<div>
  <h1>Example 7: Game App – Final Score</h1>
  <p>const scores = [30, 60, 90, 45, 80];</p>
  <p>const finalScore = scores.filter(score => score > 50).map(score => score + 10).reduce((sum, score) => sum + score, 0);</p>
  <p>Answer or Error: 270</p>
  <p>Why: 50 se upar scores par bonus add karke sum nikala.</p>
</div>

<div>
  <h1>Example 8: E-commerce – Total Taxed Amount</h1>
  <p>const prices = [500, 1200, 3000, 800, 1500];</p>
  <p>const finalAmount = prices.filter(price => price > 1000).map(price => price * 1.18).reduce((sum, price) => sum + price, 0);</p>
  <p>Answer or Error: 6724</p>
  <p>Why: 1000 se upar items par tax add karke final amount nikala.</p>
</div>

<div>
  <h1>Example 9: Attendance System – Reward Points</h1>
  <p>const hours = [6, 8, 9, 7, 10];</p>
  <p>const totalPoints = hours.filter(hour => hour >= 8).map(hour => hour * 10).reduce((sum, point) => sum + point, 0);</p>
  <p>Answer or Error: 270</p>
  <p>Why: 8 ya usse zyada hours par points calculate hue aur total hua.</p>
</div>

<div>
  <h1>Example 10: Interview Brain Teaser</h1>
  <p>const numbers = [1, 2, 3, 4, 5, 6];</p>
  <p>const sumOfSquares = numbers.filter(num => num % 2 === 0).map(num => num * num).reduce((sum, num) => sum + num, 0);</p>
  <p>Answer or Error: 56</p>
  <p>Why: Even numbers ke squares ka sum nikala gaya.</p>
</div>

<div>
  <h1>Example 1: Grocery Store – Total Cost</h1>
  <p>const prices = [50, 120, 300, 80, 200];</p>
  <p>const totalCost = prices.filter(p => p > 100).map(p => p * 1.05).reduce((s, p) => s + p, 0);</p>
  <p>Answer or Error: 651</p>
  <p>Why: 100 se zyada items par 5% tax lagakar total nikala.</p>
</div>

<div>
  <h1>Example 2: Fitness App – Weekly Calories</h1>
  <p>const minutes = [10, 25, 40, 15, 60];</p>
  <p>const totalCalories = minutes.filter(m => m >= 20).map(m => m * 4).reduce((s, c) => s + c, 0);</p>
  <p>Answer or Error: 500</p>
  <p>Why: 20+ minutes wale days ko calories me convert kiya.</p>
</div>

<div>
  <h1>Example 3: Exam Results – Total Passed Marks</h1>
  <p>const marks = [35, 55, 80, 20, 45];</p>
  <p>const totalMarks = marks.filter(m => m >= 40).reduce((s, m) => s + m, 0);</p>
  <p>Answer or Error: 180</p>
  <p>Why: Sirf passing marks ka sum liya gaya.</p>
</div>

<div>
  <h1>Example 4: Bank App – Total Credits</h1>
  <p>const transactions = [500, -200, 1000, -300, 700];</p>
  <p>const totalCredit = transactions.filter(t => t > 0).reduce((s, t) => s + t, 0);</p>
  <p>Answer or Error: 2200</p>
  <p>Why: Sirf positive transactions add hue.</p>
</div>

<div>
  <h1>Example 5: Online Sale – Discounted Bill</h1>
  <p>const prices = [800, 1500, 3000, 600, 1200];</p>
  <p>const totalBill = prices.filter(p => p > 1000).map(p => p * 0.85).reduce((s, p) => s + p, 0);</p>
  <p>Answer or Error: 4760</p>
  <p>Why: 1000 se upar items par 15% discount laga.</p>
</div>

<div>
  <h1>Example 6: Attendance – Reward Points</h1>
  <p>const hours = [5, 7, 8, 6, 9];</p>
  <p>const totalPoints = hours.filter(h => h >= 7).map(h => h * 10).reduce((s, p) => s + p, 0);</p>
  <p>Answer or Error: 240</p>
  <p>Why: 7+ hours ko points me convert kiya.</p>
</div>

<div>
  <h1>Example 7: Delivery App – Total Distance</h1>
  <p>const distances = [3, 6, 10, 4, 8];</p>
  <p>const totalDistance = distances.filter(d => d > 5).map(d => d + 1).reduce((s, d) => s + d, 0);</p>
  <p>Answer or Error: 27</p>
  <p>Why: 5 km se zyada trips me bonus add hua.</p>
</div>

<div>
  <h1>Example 8: Salary System – Final Salary</h1>
  <p>const salaries = [18000, 25000, 30000, 15000];</p>
  <p>const totalSalary = salaries.filter(s => s > 20000).map(s => s + 2000).reduce((t, s) => t + s, 0);</p>
  <p>Answer or Error: 59000</p>
  <p>Why: Eligible salaries me bonus add karke total.</p>
</div>

<div>
  <h1>Example 9: Study App – Total Study Time</h1>
  <p>const hours = [0.5, 1.5, 2, 0.75, 3];</p>
  <p>const totalMinutes = hours.filter(h => h > 1).map(h => h * 60).reduce((s, m) => s + m, 0);</p>
  <p>Answer or Error: 390</p>
  <p>Why: 1 ghante se zyada sessions ko minutes me badla.</p>
</div>

<div>
  <h1>Example 10: Electricity Usage – Monthly Bill</h1>
  <p>const units = [80, 120, 200, 90, 150];</p>
  <p>const totalBill = units.filter(u => u > 100).map(u => u * 6).reduce((s, b) => s + b, 0);</p>
  <p>Answer or Error: 2820</p>
  <p>Why: 100 se upar units ka bill calculate hua.</p>
</div>

<div>
  <h1>Example 11: Game Scores – Final Power Score</h1>
  <p>const scores = [30, 50, 90, 20, 70];</p>
  <p>const powerScore = scores.filter(s => s > 40).map(s => s * 2).reduce((t, s) => t + s, 0);</p>
  <p>Answer or Error: 420</p>
  <p>Why: High scores double karke sum hue.</p>
</div>

<div>
  <h1>Example 12: Travel App – Total Fare</h1>
  <p>const rides = [5, 12, 20, 8, 15];</p>
  <p>const totalFare = rides.filter(r => r > 10).map(r => r + 50).reduce((s, r) => s + r, 0);</p>
  <p>Answer or Error: 147</p>
  <p>Why: Long rides me service fee add hui.</p>
</div>

<div>
  <h1>Example 13: Office Work – Productive Hours</h1>
  <p>const hours = [4, 6, 8, 5, 9];</p>
  <p>const productiveMinutes = hours.filter(h => h >= 6).map(h => h * 60).reduce((s, m) => s + m, 0);</p>
  <p>Answer or Error: 1380</p>
  <p>Why: 6+ hours ko minutes me convert kiya.</p>
</div>

<div>
  <h1>Example 14: Shopping Cart – Reward Coins</h1>
  <p>const purchases = [300, 800, 1200, 400];</p>
  <p>const coins = purchases.filter(p => p > 500).map(p => 10).reduce((s, c) => s + c, 0);</p>
  <p>Answer or Error: 20</p>
  <p>Why: Har eligible purchase par 10 coins mile.</p>
</div>

<div>
  <h1>Example 15: Fuel App – Total Fuel Cost</h1>
  <p>const liters = [3, 6, 10, 4, 8];</p>
  <p>const totalFuelCost = liters.filter(l => l > 5).map(l => l * 105).reduce((s, c) => s + c, 0);</p>
  <p>Answer or Error: 2520</p>
  <p>Why: 5 se zyada liters ka total cost nikla.</p>
</div>

<div>
  <h1>Example 16: Interview Classic – Sum of Cubes</h1>
  <p>const numbers = [1, 2, 3, 4, 5];</p>
  <p>const sumCubes = numbers.filter(n => n % 2 !== 0).map(n => n ** 3).reduce((s, n) => s + n, 0);</p>
  <p>Answer or Error: 153</p>
  <p>Why: Odd numbers ke cubes ka sum.</p>
</div>

<div>
  <h1>Example 17: Performance Tracking – Bonus Points</h1>
  <p>const scores = [10, 20, 30, 40, 50];</p>
  <p>const avg = scores.reduce((s, n) => s + n, 0) / scores.length;</p>
  <p>const totalScore = scores.filter(s => s > avg).map(s => s + 5).reduce((t, s) => t + s, 0);</p>
  <p>Answer or Error: 100</p>
  <p>Why: Average se upar scores me bonus add hua.</p>
</div>

<div>
  <h1>Example 18: Subscription App – Final Bill</h1>
  <p>const plans = [199, 399, 599, 299];</p>
  <p>const finalBill = plans.filter(p => p > 300).map(p => p * 1.18).reduce((s, p) => s + p, 0);</p>
  <p>Answer or Error: 1180.82</p>
  <p>Why: 300 se upar plans par tax add hua.</p>
</div>

<div>
  <h1>Example 19: Learning App – Achievement Score</h1>
  <p>const scores = [45, 60, 70, 30, 80];</p>
  <p>const totalScore = scores.filter(s => s >= 60).map(s => s * s).reduce((t, s) => t + s, 0);</p>
  <p>Answer or Error: 14900</p>
  <p>Why: Eligible scores ke squares ka sum.</p>
</div>

<div>
  <h1>Example 20: Interview Finisher</h1>
  <p>const numbers = [3, 6, 9, 10, 12];</p>
  <p>const finalSum = numbers.filter(n => n % 3 === 0).map(n => n * 10).reduce((s, n) => s + n, 0);</p>
  <p>Answer or Error: 300</p>
  <p>Why: 3 se divisible numbers ka final sum.</p>
</div>


/*****************************************************
 🟢 VARIABLES & DATA TYPES (1–15)
*****************************************************/

let a = "a";
let b = "10";
let c = 10;
let d;
let e = null;

// 1
console.log(a == "a");   // true (value check)
console.log(a === "a");  // true (value + type same)

// 2
console.log(b == c);   // true (string "10" → number 10)
console.log(b === c);  // false (string !== number)
// ERROR REASON: == does type coercion, === does not.

// 3
b = Number(b);
console.log(b === c); // true

// 4
console.log(d === undefined); // true

// 5
if (d == null) console.log("d is null or undefined");
if (e == null) console.log("e is null or undefined");

// 6
console.log(null == undefined);  // true
console.log(null === undefined); // false

// 7
console.log(c + "10"); // "1010" (string concat)
console.log(c + Number("10")); // 20 (fixed)

// 8
let result = c / "a";
console.log(Number.isNaN(result)); // true

// 9
let num1 = Number("10");
let num2 = +"10";

// 10
let str1 = String(c);
let str2 = c.toString();

// 11
console.log(Boolean(0)); // false
console.log(!!"hello");  // true

// 12
const pi = 3.14;
// pi = 3; ❌ ERROR: Assignment to constant variable

// 13
let x = 5;
let y = x;
y = 20;
console.log(x); // 5 (unchanged)

// 14
console.log(0 == false); // true (coercion)

// 15
console.log("5" === 5); // false (fixed using strict equality)



/*****************************************************
 🟢 OPERATORS (16–30)
*****************************************************/

// 16 Even without %
let n = 4;
console.log((n & 1) === 0);

// 17 Max without if or Math.max
let m1 = 5, m2 = 9;
let max = m1 > m2 ? m1 : m2;

// 18 Calculator
function calc(a,b,op){
  if(op==="+") return a+b;
  if(op==="-") return a-b;
  if(op==="*") return a*b;
  if(op==="/") return a/b;
}

// 19 Default
let username = null;
console.log(username ?? "Guest");

// 20
let age = 18;
let status = age>=18 ? "Adult":"Minor";

// 21
let marks = 85;
let grade = marks>=90?"A":marks>=75?"B":"C";

// 22
true && console.log("Executed");

// 23
console.log(false && "Won’t run");

// 24
console.log("5" == 5);  // true
console.log("5" === 5); // false

// 25
let val = null;
console.log(val ?? "Default");

// 26
console.log(0 || 100);  // 100
console.log(0 ?? 100);  // 0

// 27
let arr1=[1,2], arr2=[3,4];
let merged=[...arr1,...arr2];

// 28
function sumAll(...nums){
  return nums.reduce((a,b)=>a+b,0);
}

// 29
let copy=[...arr1];
copy.push(99);

// 30
console.log(2+3*4); // 14 (multiplication first)



/*****************************************************
 🟡 CONTROL FLOW (31–45)
*****************************************************/

// 31
function gradeSys(m){
 if(m>=90) return "A";
 else if(m>=75) return "B";
 else return "C";
}

// 32
function gradeSwitch(g){
 switch(true){
  case g>=90: return "A";
  case g>=75: return "B";
  default: return "C";
 }
}

// 33
switch(2){
 case 1: console.log("One");
 case 2: console.log("Two"); // fall-through
}

// 34
let user="admin", pass="123";
if(user==="admin"){
 if(pass==="123") console.log("Login success");
}

// 35
if(user==="admin" && pass==="123") console.log("Login success");

// 36
if(true && true) console.log("Both true");

// 37
if(age>18 || age===18) console.log("Valid");

// 38
let choice=1;
switch(choice){
 case 1: console.log("Start"); break;
 case 2: console.log("Stop"); break;
}

// 39 Missing break shows fall-through

// 40 if-else equivalent of switch done above

// 41
let num=50;
if(num>=1 && num<=100) console.log("In range");

// 42
function test(val){
 if(!val) return "Invalid";
 return "Valid";
}

// 43
let light="red";
switch(light){
 case "red": console.log("Stop"); break;
 case "green": console.log("Go"); break;
}

// 44
let rain=true;
if(rain) console.log("Take umbrella");

// 45
function divide(a,b){
 if(b===0) return "Cannot divide by zero";
 return a/b;
}



/*****************************************************
 🟡 LOOPS (46–60)
*****************************************************/

// 46
for(let i=1;i<=100;i++) console.log(i);

// 47
for(let i=2;i<=100;i+=2) console.log(i);

// 48
for(let i=1;i<=10;i++){
 if(i===5) break;
}

// 49
for(let i=1;i<=10;i++){
 if(i%3===0) continue;
}

// 50
let sum=0;
for(let i=1;i<=5;i++) sum+=i;

// 51 Reverse number
let numRev=123, rev=0;
while(numRev>0){
 rev=rev*10+numRev%10;
 numRev=Math.floor(numRev/10);
}

// 52 Count digits
let count=0,temp=12345;
while(temp>0){ count++; temp=Math.floor(temp/10); }

// 53 Factorial
let fact=1;
for(let i=1;i<=5;i++) fact*=i;

// 54 Fibonacci
let f1=0,f2=1;
for(let i=0;i<5;i++){
 let next=f1+f2;
 f1=f2; f2=next;
}

// 55 Break nested
outer: for(let i=0;i<3;i++){
 for(let j=0;j<3;j++){
  break outer;
 }
}

// 56 continue shown above

// 57 Multiplication
for(let i=1;i<=10;i++) console.log(5*i);

// 58 Infinite loop fix
let k=0;
while(k<5){ k++; }

// 59 for vs while → for when count known

// 60
[1,2,3].forEach(n=>console.log(n));



/*****************************************************
 🟡 FUNCTIONS (61–80)
*****************************************************/

// 61
function sum(a,b){ return a+b; }

// 62
const sumArrow=(a,b)=>a+b;

// 63
function greet(name="Guest"){ return name; }

// 64
function outer(){ return function(){ return "Inner"; } }

// 65
function run(fn){ fn(); }

// 66
function process(cb){ cb("Done"); }

// 67 Pure
function add(a,b){ return a+b; }

// 68 Side effect
let counter=0;
function inc(){ counter++; }

// 69 Recursion
function factRec(n){
 if(n===1) return 1;
 return n*factRec(n-1);
}

// 70 Iterative
function factIter(n){
 let r=1;
 for(let i=1;i<=n;i++) r*=i;
 return r;
}

// 71
function total(...args){
 return args.reduce((a,b)=>a+b,0);
}

// 72
function hof(fn){ return fn(5); }

// 73 Closure
function counterFn(){
 let c=0;
 return ()=>++c;
}

// 74 Counter
let cnt=counterFn();

// 75 Currying
const multiply=a=>b=>a*b;

// 76 Memoization
function memo(){
 let cache={};
 return function(n){
  if(cache[n]) return cache[n];
  return cache[n]=n*n;
 }
}

// 77
function safe(a){
 if(typeof a!=="number") return "Invalid";
 return a*2;
}

// 78 Arrow doesn’t have own this

// 79 Run once
let once=(function(){
 let done=false;
 return function(){
  if(!done){ done=true; console.log("Run"); }
 }
})();

// 80 DRY
function square(n){ return n*n; }



/*****************************************************
 🔵 ARRAYS (81–101)
*****************************************************/

let arr=[1,2,3,4,5];

// 81
arr.reduce((a,b)=>a+b,0);

// 82
Math.max(...arr);

// 83
[...new Set([1,2,2,3])];

// 84
let sorted=[...arr].sort((a,b)=>b-a);
let second=sorted[1];

// 85
arr.filter(n=>n>0);

// 86
arr.map(n=>n*n);

// 87
arr.reduce((c)=>c+1,0);

// 88
arr.filter(n=>n>2).map(n=>n*2).reduce((a,b)=>a+b,0);

// 89
arr.find(n=>n>3);

// 90
arr.some(n=>n>4);

// 91
arr.every(n=>n>0);

// 92
let [first,...rest]=arr;

// 93
[...arr,...[6,7]];

// 94 Deep clone
JSON.parse(JSON.stringify(arr));

// 95 Bubble sort
function bubble(a){
 for(let i=0;i<a.length;i++){
  for(let j=0;j<a.length-1;j++){
   if(a[j]>a[j+1]){
    [a[j],a[j+1]]=[a[j+1],a[j]];
   }
  }
 }
 return a;
}

// 96 Rotate
function rotate(a){
 return [...a.slice(1),a[0]];
}

// 97 Flatten
function flat(a){
 return a.reduce((acc,val)=>
  Array.isArray(val)?acc.concat(flat(val)):acc.concat(val),[]);
}

// 98 Custom map
Array.prototype.myMap=function(cb){
 let res=[];
 for(let i=0;i<this.length;i++){
  res.push(cb(this[i],i,this));
 }
 return res;
}

// 99 Custom filter
Array.prototype.myFilter=function(cb){
 let res=[];
 for(let i=0;i<this.length;i++){
  if(cb(this[i])) res.push(this[i]);
 }
 return res;
}

// 100 Custom reduce
Array.prototype.myReduce=function(cb,acc){
 for(let i=0;i<this.length;i++){
  acc=cb(acc,this[i]);
 }
 return acc;
}

// 101 FINAL BOSS
let final = arr
 .filter(n=>n%2===0)
 .map(n=>n*10)
 .reduce((a,b)=>a+b,0);

console.log(final);

# JavaScript Interview Questions & Answers

---

# 🟢 BEGINNER LEVEL (1–20)

### Q1. What is the difference between `var`, `let`, and `const`?
**Answer:**  
`var` is function-scoped and can be redeclared and reassigned.  
`let` is block-scoped and can be reassigned but not redeclared.  
`const` is block-scoped and cannot be reassigned.

---

### Q2. Name all primitive data types in JavaScript.
**Answer:**  
string, number, boolean, null, undefined, bigint, symbol

---

### Q3. How do you check the type of a variable?
**Answer:**  
Using the `typeof` operator.

---

### Q4. What is the difference between `==` and `===`?
**Answer:**  
`==` compares values only (allows type coercion).  
`===` compares value and type (strict comparison).

---

### Q5. What will be the output?
```js
let x = 10;
console.log(x + 5 * 2);
```
**Answer:** 20

---

### Q6. What is the output?
```js
console.log('5' + 2);
```
**Answer:** "52"

---

### Q7. What is the result?
```js
console.log(true && false);
```
**Answer:** false

---

### Q8. What is a function and why is it used?
**Answer:**  
A function is a reusable block of code used to perform a specific task.

---

### Q9. What will this return?
```js
function add(a, b) {
  return a + b;
}
add(2, 3);
```
**Answer:** 5

---

### Q10. How do you create an array in JavaScript?
**Answer:**
```js
let arr = [1, 2, 3];
```

---

### Q11. What is the output?
```js
const arr = [10, 20, 30];
console.log(arr[1]);
```
**Answer:** 20

---

### Q12. What is an object in JavaScript?
**Answer:**  
An object is a collection of key-value pairs.

---

### Q13. What is the output?
```js
const user = { name: 'A', age: 20 };
console.log(user.age);
```
**Answer:** 20

---

### Q14. What does an `if` statement do?
**Answer:**  
It executes code only if the given condition is true.

---

### Q15. What is the output?
```js
let x = 5;
if (x > 3) console.log('Yes');
```
**Answer:** Yes

---

### Q16. What is a loop and why is it used?
**Answer:**  
A loop is used to execute a block of code multiple times.

---

### Q17. What is the output?
```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```
**Answer:**
0  
1  
2  

---

### Q18. When should you use a `while` loop?
**Answer:**  
When the number of iterations is not known beforehand.

---

### Q19. What is the result?
```js
let a = 5;
a++;
console.log(a);
```
**Answer:** 6

---

### Q20. How do you write comments?
**Answer:**  
Single-line: `// comment`  
Multi-line: `/* comment */`

---

# 🟡 INTERMEDIATE LEVEL (21–35)

### Q21. What is block scope?
**Answer:**  
Variables declared with `let` and `const` are accessible only inside `{}`.

---

### Q22. What is hoisting?
**Answer:**  
JavaScript moves variable and function declarations to the top of their scope before execution.

---

### Q23. Difference between `undefined` and `null`?
**Answer:**  
`undefined` means a variable is declared but not assigned.  
`null` means an intentional empty value.

---

### Q24. List all falsy values.
**Answer:**  
false, 0, "", null, undefined, NaN

---

### Q25. Difference between normal and arrow functions?
**Answer:**  
Arrow functions do not have their own `this`, have shorter syntax, and cannot be used as constructors.

---

### Q26. Parameters vs Arguments?
**Answer:**
```js
function add(a, b) {} // parameters
add(2, 3); // arguments
```
Parameters are variables in function definition.  
Arguments are values passed during function call.

---

### Q27. What happens if a function does not return anything?
**Answer:**  
It returns `undefined`.

---

### Q28. Difference between `push()` and `pop()`?
**Answer:**  
`push()` adds element at end.  
`pop()` removes last element.

---

### Q29. When should you use loops instead of array methods?
**Answer:**  
When you need more control like `break` or `continue`.

---

### Q30. How to loop through object properties?
**Answer:**
```js
for (let key in obj) {
  console.log(key, obj[key]);
}
```

---

### Q31. Explain `break` and `continue`.
**Answer:**  
`break` stops the loop.  
`continue` skips the current iteration.

---

### Q32. What is the result?
```js
console.log(0 == false);
console.log(0 === false);
```
**Answer:**  
true  
false  

---

### Q33. Rewrite using ternary:
```js
if (age >= 18) {
  status = 'adult';
}
```
**Answer:**
```js
status = age >= 18 ? 'adult' : status;
```

---

### Q34. What is array destructuring?
**Answer:**
```js
let [a, b] = [1, 2];
```
It extracts values from arrays into variables.

---

### Q35. What does spread operator do?
**Answer:**
```js
let newArr = [...arr];
```
It copies or merges arrays.

---

# 🔵 ADVANCED LEVEL (36–50)

### Q36. What is a closure?
**Answer:**
A function that remembers its outer scope even after outer function executes.

---

### Q37. What is execution context?
**Answer:**  
The environment where JavaScript code runs.

---

### Q38. What is the call stack?
**Answer:**  
A stack that keeps track of function execution (LIFO).

---

### Q39. Pass by value vs reference?
**Answer:**  
Primitives → copied by value.  
Objects/Arrays → copied by reference.

---

### Q40. Shallow vs Deep Copy?
**Answer:**  
Shallow copy copies reference.  
Deep copy copies full nested structure.

---

### Q41. What is a higher-order function?
**Answer:**  
A function that takes or returns another function.

---

### Q42. What is a callback function?
**Answer:**  
A function passed as an argument to another function.

---

### Q43. Why is immutability important?
**Answer:**  
It prevents accidental data changes and makes code predictable.

---

### Q44. What is the event loop?
**Answer:**  
It handles asynchronous operations by managing call stack and callback queue.

---

### Q45. Difference between synchronous and asynchronous?
**Answer:**  
Synchronous runs line by line.  
Asynchronous runs without blocking execution.

---

### Q46. Difference between `forEach` and `map`?
**Answer:**  
`forEach()` does not return a new array.  
`map()` returns a new array.

---

### Q47. What is the output?
```js
console.log([] == []);
```
**Answer:** false

---

### Q48. What is the output?
```js
console.log(typeof null);
```
**Answer:** "object"

---

### Q49. How do you check if a value is NaN?
**Answer:**
```js
Number.isNaN(value);
```

---

### Q50. Explain how JavaScript runs from start to finish.
**Answer:**  
1. Global Execution Context is created.  
2. Hoisting happens.  
3. Code runs line by line (Call Stack).  
4. Functions are pushed/popped from stack.  
5. Async tasks handled by Web APIs.  
6. Event Loop moves callbacks to stack.  
7. Execution completes.

---

# JavaScript DOM (Document Object Model) – Complete Tasks (1–26)

This README contains all JavaScript DOM tasks with explanations and examples.

---

## 1. What is the DOM? How does it represent the HTML structure?
DOM (Document Object Model) ek programming interface hai jo HTML document ko **tree structure** me convert karta hai.  
Is tree ke har part ko **node** kaha jata hai, jise JavaScript access aur modify kar sakta hai.

---

## 2. Types of nodes in the DOM tree
- Document Node
- Element Node
- Text Node
- Attribute Node
- Comment Node

---

## 3. Difference between Element Node and Text Node

| Element Node | Text Node |
|-------------|----------|
| HTML tags ko represent karta hai | Text ko represent karta hai |
| Child nodes ho sakte hain | Child nodes nahi hote |
| `<div>` | `Hello` |

---

## 4. Inspect the HTML and identify nodes

```html
<div>Hello<span>World</span></div>
<div> → Element Node
Hello → Text Node
<span> → Element Node
World → Text Node

5. Difference between getElementById and querySelector

Answer:

getElementById	querySelector
Sirf ID se select karta hai	CSS selector use karta hai
Faster	Flexible
Single element	First matching element

Example:

document.getElementById("box");
document.querySelector("#box");

6. What does getElementsByClassName return? Is it an array?

Answer:
Ye HTMLCollection return karta hai.

Why:
HTMLCollection array jaisa hota hai but real array nahi hota.

7. Select all buttons with class "buy-now"
let buttons = document.querySelectorAll(".buy-now");

8. T1: Change heading text using ID
let heading = document.getElementById("heading");
heading.textContent = "Welcome to JS DOM";

9. T2: Print text of all <li> elements
let list = document.querySelectorAll("li");

list.forEach((val) => {
  console.log(val.textContent);
});

10. Difference between innerText, textContent, innerHTML
Property	Description
innerText	Visible text only
textContent	All text (hidden bhi)
innerHTML	HTML + text
11. When to use textContent instead of innerHTML?

Answer:
Jab sirf text change karna ho aur XSS attack se bachna ho.

12. T3: Replace paragraph content with <b>Updated</b>
let p = document.querySelector("p");
p.innerHTML = "<b>Updated</b>";

13. Get image src using JavaScript
let img = document.querySelector("img");
console.log(img.src);

14. What does setAttribute() do?

Answer:
Element me attribute add ya update karta hai.

img.setAttribute("src", "image.jpg");

15. Add title attribute to a div dynamically
let div = document.querySelector("div");
div.setAttribute("title", "This is a div");

16. Remove disabled attribute from a button
let btn = document.querySelector("button");
btn.removeAttribute("disabled");

17. What does createElement() do? What is returned?

Answer:
Naya HTML element create karta hai aur element node return karta hai.

let li = document.createElement("li");

18. Difference between appendChild() and prepend()
appendChild	prepend
End me add	Start me add
19. Can you remove an element using removeChild()?

Answer:
Yes.

parent.removeChild(child);

20. Add new list item at end of <ul>
let li = document.createElement("li");
li.textContent = "New Task";
document.querySelector("ul").appendChild(li);

21. Add image at top of a div
let img = document.createElement("img");
img.src = "https://via.placeholder.com/150";
document.querySelector("div").prepend(img);

22. Delete first item from list
let firstItem = document.querySelector("ul li");
firstItem.remove();

23. Change background color of an element
element.style.backgroundColor = "yellow";

24. Difference between classList.add() and toggle()
add()	toggle()
Class add karta hai	Add/remove karta hai
25. Add highlight class to even list items
let li = document.querySelectorAll("ul li:nth-child(2n)");
li.forEach((elem) => {
  elem.classList.add("highlight");
});

26. Set font size of all <p> elements
let p = document.querySelectorAll("p");
p.forEach((el) => {
  el.style.fontSize = "18px";
});