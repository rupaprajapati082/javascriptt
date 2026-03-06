// USER PROFILE

fetch("https://jsonplaceholder.typicode.com/users/1")
.then(res => res.json())
.then(user => {

const profileDiv = document.getElementById("profile")

profileDiv.innerHTML = `

<div class="card profile-card shadow">
<div class="card-body">

<h3 class="card-title">${user.name}</h3>

<p class="card-text"><strong>Username:</strong> ${user.username}</p>
<p class="card-text"><strong>Email:</strong> ${user.email}</p>
<p class="card-text"><strong>Phone:</strong> ${user.phone}</p>
<p class="card-text"><strong>Website:</strong> ${user.website}</p>
<p class="card-text"><strong>Company:</strong> ${user.company.name}</p>
<p class="card-text"><strong>City:</strong> ${user.address.city}</p>

</div>
</div>

`

})



// USER POSTS

fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
.then(res => res.json())
.then(posts => {

const postsDiv = document.getElementById("posts")

posts.forEach(post => {

postsDiv.innerHTML += `

<div class="col-md-6 mb-4">

<div class="card h-100 shadow-sm">

<div class="card-body">

<h5 class="card-title">${post.title}</h5>

<p class="card-text">${post.body}</p>

</div>

</div>

</div>

`

})

})