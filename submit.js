let form=document.querySelector("form");
let inp=document.querySelectorAll("input")

form.addEventListener("submit",(e)=>{
    e.preventDefault();//stop
     console.log(inp[0].value);
      console.log(inp[1].value);
       console.log(inp[2].value);
        console.log(inp[3].value);
         console.log(inp[4].value);

//create
let card = document.createElement("div");
let dp_div = document.createElement("div");
let img = document.createElement("img");
let h3 = document.createElement("h3");
let h4 = document.createElement("h4");
let h5 = document.createElement("h5");
let h6 = document.createElement("h6");
// console.log(card,dp_div,h3,h4,h5,h6);
//add class  
   card.classList.add("card");
   dp_div.classList.add("dp-img");

   //add into html
   document.body.append(card);
   //add child
   card.appendChild(dp_div);
   dp_div.appendChild(img);
   card.appendChild(h3);
     card.appendChild(h4);
       card.appendChild(h5);
         card.appendChild(h6);

         console.log(card);

        
         //text content add
             if(inp.value!==""){
         img.setAttribute("src",inp[0].value);
         h3.textContent=inp[1].value;
             h4.textContent=inp[2].value;
                 h5.textContent=inp[3].value ;
                     h6.textContent=inp[4].value ;
             }
              //set default
                  img.setAttribute("src" ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdzwbp61VPxJUTGd0v7N48Ao8UT8wjRACQ3-dHuPOpQ&s");
                   h3.textContent="username";
                   h4.textContent="user Bio";
                   h5.textContent="user Email";
                   h6.textContent="user Number";
form.reset();
  //inpur clear   
//  inp.forEach(inp=>{
//        if(inp.value!=="submit"){
//     inp.value="";
//        }
//     });
 });    
                    
                