// Event - page par koi pan action karo tene ek event rise karshe, page par click, hover, typing all are even

// Event Listener - event nu reaction -- give reaction when click, dblclick, hover, typing

// Add Event Listener
// select --> event --> function --> what you change
// element.addEventListener("event_name", function(){})

// ==============================================
// Common Events : click, input, change, submit, mouseover, keyup
// Click
//dark mode or light mode
let btn=document.querySelector(".btn");
btn.addEventListener("click",()=>{
    // document.body.classList.toggle("bg-color");
    if(btn.textContent === "Dark Mode"){
        btn.textContent = "Light mode"
         document.body.style.backgroundColor="black";
    }else{
       
        btn.textContent = "Dark Mode"
         document.body.style.backgroundColor = "white";
    }
})
//color change box
let btn1=document.querySelector(".btn1");
let box =document.querySelector(".color-card");
btn1.addEventListener("click",()=>{
    // document.body.classList.toggle("bg-color");
    if(btn1.textContent === "Dark Mode"){
        btn1.textContent = "Light mode"
         box.style.backgroundColor="green";
    }else{
       
        btn1.textContent = "Dark Mode"
        box.style.backgroundColor="pink";
    }
})
//input
//how to know which is typed ?
let inp =document.querySelector("input");
inp.addEventListener("input",(dets)=>{
    if(dets.data!=null){

    console.log(dets.data);
    }
});
//change =--when you change elements
let sel=document.querySelector("select");
sel.addEventListener("change",(dets)=>{
    console.log(dets);
     console.log(dets.target.value);
      mobile.textContent=dets.target.value;

})
//change =--when you change elements state
let select=document.querySelector(".sel");
let device=document.querySelector(".device");
select.addEventListener("change",(dets)=>{
    console.log(dets.target.value);
    device.textContent=dets.target.value;
})
// change event=> change div color and border color with color input 
let box1=document.querySelector(".box");
let bg_inp=document.querySelector(".bg_inp");
let border_inp=document.querySelector(".border_inp");


bg_inp.addEventListener("change", (dets) => {
    box1.style.backgroundColor = dets.target.value;  // border color change
 // border width
});
border_inp.addEventListener("change", (dets) => {
    box1.style.borderColor = dets.target.value
});


//submit
let form=document.querySelector("form");
form.addEventListener("submit",()=>{
     document.body.style.backgroundColor="green";
})
//key down
let text =document.querySelector(".keydown");
text.addEventListener("keydown",()=>{
    text.style.backgroundColor="black";
   text.style.width="5rem";
    text.style.height="10rem";
    text.style.color="white";
});

//mousemove and mouseout
let box2 =document.querySelector(".box2");
box2.addEventListener("mousemove",()=>{
   box2.style.width="300px";
       box2.style.backgroundColor="red";
});

box2.addEventListener("mouseout",()=>{
   box2.style.width="100px";
   box2.style.backgroundColor="green";
});

// ==================================================================================

// Event Object:
// sel.addEventListener("change", (dets) => {
//   console.log(dets); ==> dets -- that called event object
// });

// target, type, preventDefault
// target --> that show element
// type --> show Event Type
// preventDefault --> use for html-form --> prevent form to
// refresh and clean details

// =====================================================================================
// event delegation ==> every child par event listener na lagavata
// only parent par event listner lagavu

//KEYDOWN -->