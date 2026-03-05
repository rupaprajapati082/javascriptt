let form = document.querySelector("form");
let username = document.querySelector("input[name='name']");
let role = document.querySelector("input[name='role']");
let bio = document.querySelector("input[name='bio']");
let img = document.querySelector("input[name='img']");

const UserManager = {

    users: [],

    init: function(){

        form.addEventListener("submit", this.submit.bind(this));

        // load data from localStorage
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        this.users = storedUsers;

        this.renderUi();
    },

    submit: function(e){
        e.preventDefault();
        this.addUser();
    },

    addUser: function(){

        const user = {
            username: username.value,
            role: role.value,
            bio: bio.value,
            img: img.value
        };

        this.users.push(user);

        // save in localStorage
        localStorage.setItem("users", JSON.stringify(this.users));

        form.reset();

        this.renderUi();
    },

    renderUi: function(){

        let div = document.querySelector(".users");

        div.innerHTML = "";

        this.users.forEach((data, index) => {

            div.innerHTML += `
            <div class="text-center border border-blue-500 rounded-2xl p-6 shadow-lg bg-white">

                <img src="${data.img}"
                class="w-20 h-20 object-cover rounded-full mx-auto mb-4 border-4 border-blue-400">

                <h2 class="text-2xl font-bold text-red-500">${data.username}</h2>

                <p class="text-lg font-semibold">${data.role}</p>

                <p class="text-blue-500 mt-2">${data.bio}</p>

                <button onclick="UserManager.deleteUser(${index})"
                class="bg-red-500 text-white px-3 py-1 mt-4 rounded">
                Delete
                </button>

            </div>`;
        });

    },

    deleteUser: function(index){

        this.users.splice(index,1);

        localStorage.setItem("users", JSON.stringify(this.users));

        this.renderUi();
    }

};

UserManager.init();