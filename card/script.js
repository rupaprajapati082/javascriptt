// 1. select -> Event --> Function (Change)
// 2. Show Form and Close Form
// 3. form validation, submit, reset
// 4. store into localstorage
// 5. createElement and show data
// 6. show All data into HTML
// 7. Create UP and Down Btn

let add = document.querySelector("#add-note");
let close = document.querySelector(".closeForm");
let formContainer = document.querySelector(".form-container");
let form = document.querySelector("form");

add.addEventListener("click", () => {
  formContainer.style.display = "block";
});
close.addEventListener("click", () => {
  formContainer.style.display = "none";
});

//form-validation,submit, reset
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let photo = document.querySelector(
    'input[placeholder="https://example.com/photo.jpg"]',
  );
  let username = document.querySelector('input[placeholder="Enter full name"]');
  let home = document.querySelector('input[placeholder="Enter home town"]');
  let note = document.querySelector(
    'input[placeholder="e.g., Quick appointment note"]',
  );
  let category = document.querySelectorAll('input[name="category"]');
  console.log(username, photo, home, note, category);

  //trim() all input valte
  const imgurl = photo.value.trim();
  const u_name = username.value.trim();
  const town = home.value.trim();
  const purpose = note.value.trim();

  let selected = false;
  category.forEach((cat) => {
    if (cat.checked) {
      selected = cat.value;
    }
  });

  if (imgurl === "") {
    alert("please enter the image url");
    return;
  }
  if (u_name === "") {
    alert("please enter your name");
    return;
  }
  if (town === "") {
    alert("please enter your town");
    return;
  }
  if (purpose === "") {
    alert("please enter your purpose");
    return;
  }
  //save into local storage
  saveData({
    imgurl,
    u_name,
    town,
    purpose,
    selected,
  });
  form.reset();
  formContainer.style.display = "none";
});
function saveData(note) {
  let data = JSON.parse(localStorage.getItem("notes")) || [];
  data.push(note);

  localStorage.setItem("notes", JSON.stringify(data));
}
let stack = document.querySelector(".stack");

function RenderUi() {
  let allData = JSON.parse(localStorage.getItem("notes"));

  allData.forEach((notea) => {
    //divcard
    let card = document.createElement("div");
    card.classList.add("card");

    //img(avtar)
    let img = document.createElement("img");
    img.classList.add("avatar");
    img.setAttribute("src",notea.imgurl)

    //h2
    let h2 = document.createElement("h2");
    h2.textContent = notea.u_name;

    //div(info)==>span(home,town)
    let info1 = document.createElement("div");
    info1.classList.add("info");

    let home=document.createElement("span");
    home.textContent = "Home Town";
    let town=document.createElement("span");
    town.textContent=notea.town
    


    //div(info)==>span(purpose,note(data))
    let info2 = document.createElement("div");
    info2.classList.add("info");

    let purpose=document.createElement("span");
    purpose.textContent = "purpose";
    let note=document.createElement("span");
    note.textContent = notea.purpose;

    //div(buttons) ==>buttons(call,msg)
    let buttons=document.createElement("div");
    buttons.classList.add("buttons");

    let call=document.createElement("button");
    call.classList.add("call");
    call.innerHTML = `<i class="ri-phone-line"></i> Call`

    let msg=document.createElement("button");
    msg.classList.add("msg");
    msg.innerHTML = `<i class="ri-message-line"></i> Message`

    //append
    stack.appendChild(card);
    card.appendChild(img);
    card.appendChild(h2);
    card.appendChild(info1);
    info1.appendChild(home);
    info1.appendChild(town);
    card.appendChild(info2);
    info2.appendChild(purpose);
    info2.appendChild(note);
    card.appendChild(buttons);
    buttons.appendChild(call);
    buttons.appendChild(msg);

    console.log(stack);
  });
}
RenderUi();

//up down btn
let upBtn=document.querySelector("#upBtn");

upBtn.addEventListener('click',()=>{
    let lastChild=stack.lastElementChild;
if(lastChild){
    stack.append(lastChild,stack.firstElementChild);
}
});

let downBtn=document.querySelector("#downBtn");

downBtn.addEventListener('click',()=>{
    let firstChild=stack.firstElementChild;
if(lastChild){
    stack.append(firstChild,stack.firstElementChild);
}
});