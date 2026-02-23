// loops -- repeating code blocks
// 1 1 1 1 1
// 1 2 3 4 5 6

// for-loop
// why use for-loop? when you know how many times you want to repeat a block of code
// print 1 to 10 --> console.log(1); console.log(2); ... console.log(10);
// kaya thi javanu chhe --> kaya sudhi javanu chhe --> kevi rite javanu chhe
// for (ex.) -> 50 -> increment by 1
// (start; end; change)
for (let i=1;i<=10;i++)
{
    console.log(i);
}
for (let k=9;k>=-1;k--)
{
    console.log(k);
}
for (let j=1;j<=10;j++)
{
    document.writeln("Hello");
    console.log("Rups");
}
    //print the 10 time in web
    for (let j=1;j<=5;j++){
     document.writeln("Hello I am a designer");

}

// while loop -- do while loop
// kaya thi javanu chhe --> Kaya rokavanu chhe --> Kevi rite javanu chhe
// while (ex. 1 -> Hello world -> stop when condition false)
// start
// while(end){
// code
// change
// }
let d = 1;
while (d <= 10) {
  console.log("While Loop: ", d);
  d++;
}

//make it true loops
// let l =50;
// while (l=20)
// {
//     console.log(l);
//     l++;

// }

// let k =60;
// while(k <=20)
// {
//     console.log(k);
//     k++;
// }

// let c =30;
// while(c<20)
// {
//     console.log(c);
//     c++;
// }

// let g ="rups";
// while(g<20)
// {
//     console.log(g);
//     g++;
// }

// let f = 50;
// while (f <= 60) {
//  console.log(f);
//  f++;
// }

// let q = 50;
// while (q <= 60) {
//  console.log(q);
//  q++;
// }

// break
for (let k = 1; k <= 201; k++) {
    console.log(k);
    if (k === 32){
        break;
    }
}

// continu
for (let a = 1; a <= 10; a ++) {
    if(a === 5) {
        continue;
    }
    console.log(a);
}

// let q = 50;
// while (q <= 60) {
//  console.log(q);
//  --q;
// }

// let f = 50;
// while (f <= 60) {
//  console.log(f);
//  f--;
// }

// do-while loop
// do {} while (end);
// start
// do{
// code
// change}
// while(end);

let j = 12; // start
do {
  console.log("do while loop:", j); // code
  j++; // change (condition)
} while (j < 20); // while check after executing code block (end)

let z = 15; // start
do {
  console.log("do while loop error:", z); // code
  z++; // change (condition)
} while (z < 10);

// why:

// // break
for (let k = 1; k <= 20; k++) {
  console.log("Loop with break", k);
  if (k === 30) {
    break;
  }
}

// // continue
for (let a = 1; a <= 10; a++) {
  if (a === 5) {
    continue;
  }
  console.log(a);
}

for (let A = 1; A <= 10; A++) {
  if (A >= 5) {
    continue;
  }
}

// Example 2

// Print number from 10 to 1 using while loop

let l = 10;
while (l >= 1) {
    console.log(l);
    l--;
}

//  Example 10

// Stop at First Multiple of 7

for(let p = 1; p <= 100; p++){
    console.log(p);
    if(p % 7 === 0){
        break;
    }
}
  
//  Example 11

// Skip Multiples of 3

for(let r = 1; r <= 20; r++){
    if(r % 3 === 0){
        continue;
    }
    console.log(r);
}
