let postsArray = []
const form = document.getElementById("new-post")

function renderPosts(){
    let html = ""
    for (let post of postsArray){
        html+= `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr />
        `
    }
        document.getElementById("blog-list").innerHTML = html    
}


fetch("https://apis.scrimba.com/jsonplaceholder/posts") 
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        postsArray = data.slice(0,5)
        renderPosts()

    })
form.addEventListener("submit",function(e){
        e.preventDefault()
        const posttitle = document.getElementById("post-title").value
        const postbody = document.getElementById("post-body").value
        const data = {
            title: posttitle,
            body: postbody
        }

        const options =  {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json"
            }
        }
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
        .then(res => res.json())
        .then(post => {
            postsArray.unshift(post)
            renderPosts()
            form.reset()
        })


    })