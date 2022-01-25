

const boredbtn = document.getElementById("boredbtn")


boredbtn.addEventListener("click", function(){
fetch("https://apis.scrimba.com/bored/api/activity")
    .then(Response => Response.json())
    .then(data => {
        console.log(data)
        document.getElementById("activity").textContent = data.activity


    })
})