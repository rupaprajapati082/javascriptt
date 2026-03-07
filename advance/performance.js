// performance-optimizations:
// bebouncing -> jyare thame koi action(events like mouse hover, input, click etc) and you don't want to fire a event or perform action(ex. like you don't want to print on console every time when you enter somthing in your input field)
// you define a delay and when that delay come the function will be run(you got a reaction)

let btn =document.querySelector("button");
let body =document.querySelector("body");

function changeColor(delay){
setTimeout(()=>{
    body.style.backgroundColor="black";

},delay);

}

// btn.addEventListener("click",print());

// function print(){
//     console.log(" only run when i click the Button,print")
// }

btn.addEventListener("click",() =>{
    changeColor(3000);
});
