// Array -- Hold multiple values at same time
// ["Mobile", "Laptop", "Tablet", 5000, 25, 588]
// ["a", "b", "Hello"]
// [2, 4, 5, 6]

// create
// variable_name = [values]
let arr = [1, 2, 3, 4];

// access        []
// position = [0 1 2 3]
// access
// array_name[position / index]
arr[0]

// modify
// array_name[position] = new value
arr[0] = 10;
arr[1] = 20;
arr[2] = 30;
arr[3] = 40;


// Array Methods:
// push, pop, shift, unshift, splice, slice, reverse, sort
// push --> enter new value into array -- place it into last
let a = [1, 2, 3, 4, 5];

// variable || function.method --> koi variable ke function in pachhal dot . kri ne lakho to te method kevai
a.push(700);

// use case -- enter new products into existing products list

// pop --> remove last value into array
let b=[10,20,30,40];
b.pop();
//use case --remove last product you add into your list

// shift -- remove first value into array
let c = [30, 40, 50, 60];
c.shift();

// use case -- remove old product automatic after sometimes

// unshift -- add value into array -- first
let d = [52, 35, 65, 85];
d.unshift(20);

// use case -- add a value into top of that data you receive
// splice - remove value into array -- specific position and
// specific number of values
// into () -- first index(position), how many value you want to remove
let e = [50, 60, 30, 40, 10];
e.splice(3, 2);

// e.splice(3, 0, 50, 100)

// use case -- select msg and remove multiple msg at on click
// slice - copy values from array -- specific position and
// specific number of values
// new variable = array_name.slice(start index, end index)
// start index -- include into copy
// end index -- not include into copy
let f = [100, 50, 25, 0];
let new_f = f.slice(1, 3);

// use case -- copy specific data and save it into new variable
// generate a report based on date and generate a file or save the
// file into your local machine

// splice vs slice

// splice -- remove value into main array or modify new array
// slice -- copy value from main array and create a new array that
// hold the value that you can into
// ===================================================================================================================

// reverse -- reverse value of array
let g = [25, 30, 35, 40, 85];
// g.reverse();
// use case -- show latest update first into your
// frontend

// sort -- set into ascending order
let h = [50, 20, 80, 10, 40];
h.sort();
// let h = [11, 62, 3, 4, 25];
// let sr = h.sort(function(a, b){
//     return a - b; // ascending order
// })
// ------------------------------------------------Exercise---------------------------------------------------------------------

// Q1. push()
// You are building a to-do app. Add a new task 'Buy milk' to the tasks array.
let tasks = ['Wake up', 'Brush teeth'];
tasks.push("buy milk");


// Q2. pop()
// Remove the last notification from the notifications array.
let notifications = ['Email', 'Message', 'Reminder'];
notifications.pop();



// Q3. shift()
// A queue system removes the first customer. Remove the first customer.
let customers = ['Customer1', 'Customer2', 'Customer3'];




// Q4. unshift()
// A new song is added to the beginning of the playlist.
let playlist = ['Song B', 'Song C'];




// Q5. splice()
// In a classroom list, remove 'Alex' and add 'John' and 'Sara' in the same position.
let students = ['Mike', 'Alex', 'Emma', 'Sophia'];




// Q6. splice()
// From the menu, remove 2 items starting from index 1.
let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];




// Q7. slice()
// Create a new array that contains only weekend days.
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let week=days.slice(0,6)



// Q8. reverse()
// Reverse the order of levels in a game.
let levels = ['Easy', 'Medium', 'Hard'];




// Q9. sort()
// Sort the scores in ascending order.
let scores = [45, 12, 78, 34, 89];



// Q10. sort() with numbers
// Sort the prices from lowest to highest.
let prices = [199, 49, 999, 299, 149];




// Q11. slice() vs splice()
// From the array, create a new array of the first 3 items WITHOUT changing the original array.
let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];




// Q12. splice() complex
// In the array below:
// 1. Remove 'Blue'
// 2. Add 'Purple' and 'Orange' at the same position
let colors = ['Red', 'Green', 'Blue', 'Yellow'];
ans:colors.splice(2, 1, 'Purple', 'Orange')


// Q13. reverse() + push()
// Reverse the array and then add 'Final Step' at the end.
let steps = ['Step 1', 'Step 2', 'Step 3'];


// Q14. sort() strings
// Sort names alphabetically, ignoring case sensitivity.
let names = ['alice', 'Bob', 'charlie', 'David'];
ans: names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))




// Q15. Combination Question
// You are managing a movie watchlist:
// 1. Add 'Inception'
// 2. Remove the first movie
// 3. Sort the list alphabetically
let movies = ['Avatar', 'Titanic', 'Gladiator'];

// Q16. splice() return value
// What does the splice method return in this case?
let nums1 = [1, 2, 3, 4];
nums1.splice(1, 2);




// Q17. slice() immutability check
// After executing slice, does the original array change?
let nums2 = [10, 20, 30, 40];
let result = nums2.slice(1, 3);


// Q19. reverse() mutation
// After reversing, what happens to the original array reference?
let letters = ['a', 'b', 'c'];
let reversedLetters = letters.reverse();


// Q21. splice() edge case
// What happens if deleteCount is 0?
let arr1 = ['x', 'y', 'z'];
arr1.splice(1, 0, 'new');



// Q23. slice() negative index
// What elements are returned?
let values = [100, 200, 300, 400, 500];
let sliced = values.slice(-3, -1);



// Q24. splice() vs slice() decision
// Which method would you use if you want to:
// a) Update the original array
// b) Keep the original array unchanged




// Q25. Chained methods (brain teaser)
// What is the final value of arr?
let arr2 = [1, 2, 3];
arr2.push(arr2.shift())

//FOR EACH Loop
// //FOR EACH --ARRAY NI DAREK VALUE MATE LOOP CHALSE 
let i=[10,35,40,68];
i.forEach((val)=>{
    let new_val=val+10;
    console.log(new_val);

});
[5,58,42,"hello"].forEach(val =>
{
    let new_arr=val+2;
    console.log(new_arr)
}
)
// .map() method:
//map tyare j use karvu ke jyare ek new array create karvo chhe 
// first map create a balck array --only for  understanding
let data = [10, 20, 50, 40, 15];

// same like a for each loop but map return a new array
let temp_data = data.map((val) => {
// when undefined na lavu hoy tyare filter use karvu
    // let temp_data = data.filter((val) => {
    if (val > 20) {
        return val;
    }
});

// use case -- data ma thi specific data new array ma
// store karvo hoy
// ex. product ma thi specific category na product
// new array ma store karva hoy

// if you want to show only electronics product on
// your homepage
let marks = [10, 5, 20, 25, 15];

let final_marks = marks.map((val) => {
    if (val == 5) {
        return val + 4;
    }
    return val;
});

// filter
// filter tyare use karvu ke jyare ek new array create karvo chhe with condition
// in return true/false
// if true  --> add into new array
// if else(false) --> not add into new array

let laptops_price = [15000, 20000, 30000, 65000, 99000, 45000];

let expensive_laptops = laptops_price.filter((price) => {
    if (price > 30000) return true;
});

// je value 30000 thi vadhare chhe te new array ma
// add thase and biji value ne array ma add nahi kare
// use case -- data ma thi specific data new array ma store karvo hoy based on condition
// ex. product ma thi specific price na product new array ma store karva hoy
// if you want to show only expensive product on your homepage

// if you want to filter product based on price

let  product_name= ["mobile", "laptop","tablet", "keypad phone","monitor"];

let  any_product= product_name.filter((type) => {
    if (type ==="mobile" || type==="monitor") 
        return true;
});

//reduce
// reduce tyare j use karvu ke jare ek single value calculate karvi hoy from array

let total_price = [10, 68, 45, 58, 52, 48];

let final_price = total_price.reduce((accumulator, val) => {
    return accumulator + val;
}, 0); // intial value of accumulator

// 0 + 10 => 10
// 10 + 10 => 20
// 20 + 10 => 30
// 30 + 10 => 40
console.log("final price:",final_price)
// accumulator --> je value function ma return thase accumulator ma store thase --> accumulator name chnage kari sako chho
//val--> array ni darek value
//use casw --data ma thik k single value calculate karvi hoy
//ex.product ma thi total price calculate karvi hoy 


// find
// find tyare j use karvu ke jare array mathi ek value find karvi hoy based on condition

// find() return kare chhe array no element --> callback no return value par thi
// never returns what you return inside it
// returns the array element itself -- not return array
// .find() stops at the first match
// It does not continue looping

let product = ["Laptop", "Mobile", "Tablet",
"Desktop", "Smart Watch"];

let find_product = product.find(function (item) {
    console.log("cant find product") ;
    if(item === "Mobile"){
        return true;
    }else if (item==="Laptop"){
        return true;
    }
    else {
        return "Not Found";
        //console.log("cant find product"); //not working
    }
    }
    
);


// use case -- data ma thi ek value find karvi hoy based on condition

// ex. product ma thi specific product find karvo by based on name

// find vs filter
// Real-life Scenario: Shopping Mall Security
// You are a security guard at a shopping mall
// check the list of visitors

let people = ["John", "Sara", "Nike", "Anna",
"David", "Sara"];

// find("Sara") are looking for the first person named "Sara" in the list and stop searching (Pehli var j male ,bas e j and anagal check j na kare)
let person = people.find((name) => name === "Sara");
console.log(person);

//filter --> you want to find all visitors named "sara" in the list (all data check kare and list na end sudhi check kare)
let Allsara = people.filter((name) => name === "Sara");
console.log(Allsara);

//eaxmple 2: books bus for travel

// some
// check kare chhe ke array ma koi pan ek item condition satisfy kare chhe ke nahi

// condition true aave tyare stop kare
// some() vs find() --> some() can't return you valueits return true or false, find() return value of array
// give ans in true and false

let marks1 = [10, 20, 35, 80];
let any= marks1.some(function (val) {
    if (val > 85) return 12;
    // if (val < 85) return "need improvement";
});

// use case -- check if some product are out of stock in you cart


// every
// check kare chhe ke array ma baddha j items condition satisfy kare chhe ke nahi
// true -- baha items condition match kare
// false -- ek pan fail thay to

let def = [20, 30, 40, 50];
let num = def.every(function(val){
    return val <= 50;
})

// use case --> check all student is pass or not

// some(), find(), filter(), every()

// let products = ["Tablet", "Mobile", "Laptop","Mobile"]

// method --> condition --> output

// .some()   --> item === "Mobile" --> true
// .find()   --> item === "Mobile" --> "Mobile"
// .filter() --> item === "Mobile" --> ["Mobile", "Mobile"]

// .every()  --> item === "Mobile" --> false

// ==================================================================================
// Destructuring operator -- give value to variable
// (ex. we don't use everytime arr[1], just save it
// into variable let j, k) = arr1)

let arr4 = [1, 2, 3, 4, 5]
let [, , k] = arr4; // --> desthucturing
// let [j, , k] = arr;

console.log(k);

let user_data=["text","text@gmail.com","Male","Surat"]
let [, j] = user_data; 
console.log(j)



// spread oprator -- copy value from main array
let arr8 = [1, 2, 3, 4, 5, 6, 7];

// let arr4 = arr3;  // - just give reference not copy value (when you change into arr4 that will be change arr3 too)

let arr9 = [...arr8];

// ... --> rest --> into function
// ... --> spred --> into Array
// =================intheconsole==================
// arr9
// (7) [1, 2, 3, 4, 5, 6, 7]
// arr9.pop()
// 7
// arr8
// (7) [1, 2, 3, 4, 5, 6, 7]