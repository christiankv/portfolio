const activMenu = document.querySelector(".menu-btn");
const showmenu = document.querySelector(".menu-column");
const display = document.querySelector(".code-display");
const projects = document.querySelector(".choice-list");
let ids = document.querySelectorAll(".choselist")
// const query = {

// activMenu = document.querySelector(".menu-btn"),
// showmenu = document.querySelector(".menu-column"),
// display = document.querySelector(".code-display"),
// projects = document.querySelector(".choice-list"),
// }

// const {activMenu , showmenu, display, projects} = query

let projectlist = {
    iframe : "html/03.12/index.html",
    // iframe : "../html/03.12/index.html"
    forms : "html/06.12/index.html",
    transitions : "html/transitions/index.html",
    Animations : "html/animations/index.html"
}
let projectslist = []

console.log(projectslist);





for ( let i = 0; i < Object.getOwnPropertyNames(projectlist).length; i++ ){
projectslist.push(Object.getOwnPropertyNames(projectlist)[i])
makelist(i)
}

// console.log(ids)

activMenu.addEventListener("mouseover",function() {
    showmenu.style.display= "flex"
    document.querySelector(".menu-title").style.display ="none"

})
activMenu.addEventListener("mouseleave",function() {
    showmenu.style.display= "none"
    document.querySelector(".menu-title").style.display ="block"
})

for (let i= 0 ; i < ids.length; i++ ){
        ids[i].addEventListener("click",function(){
            display.removeChild(display.firstChild)
            console.log(this.id);
            // let elementid = this.id
            console.log(projectlist[this.id]);
            let iframelink =  "https://christiankv.github.io/portfolio/" + projectlist[this.id]
            let createdisplay = document.createElement("iframe");
            createdisplay.setAttribute("src",iframelink);
            createdisplay.style.width= "100%";
            createdisplay.style.height= "100%";
            createdisplay.classList="iframeDisplay"
            display.appendChild(createdisplay);
})

}


function makelist(i){
    // let classname = Object.getOwnPropertyNames(projectlist)[i]
    let createlist =document.createElement("p");
    createlist.classList = "choselist"
    createlist.id = projectslist[i]
    createlist.textContent=projectslist[i];
    projects.appendChild(createlist)
    ids = document.querySelectorAll(".choselist")
    // ids += document.querySelectorAll("id")
}

