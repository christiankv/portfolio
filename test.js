const codebox = document.getElementById("codearea")
const projects = document.querySelector(".projects")
let version = "showpage"
let projectslist = []
let pageevents = []
let menu = [
    html =  document.getElementById("html"),
    javascript = document.getElementById("javascript"),
    python = document.getElementById("python"),
    scrimba =  document.getElementById("scrimba")
]

let radbox = [
    radhtml = document.getElementById("showhtml"),
    radpage = document.getElementById("showpage"),
    radcss = document.getElementById("showcss"),
    radjavascript = document.getElementById("showjs")

]
let activesite = "none"
let writing = false

for (let i = 0 ; i< radbox.length; i++){
    radbox[i].addEventListener("change", function(){
        console.log(version);
        version = this.id;
        console.log(version);
    })
}

const welcomemessage = `welcome to my portfolio. 
my name is christian and am learning programing at codehode.
currently i have learned html/css, javascripts and phyton.
click on one of the topics on top to see my projects`

codebox.textContent = welcomemessage

for (let i = 0; i<welcomemessage.length; i++ ){
    setTimeout(()=>{
        let tempmessage = welcomemessage.slice(0, i+1)
         codebox.textContent = tempmessage
     },100*i)
}

for (let i = 0; i<menu.length; i++){
    menu[i].addEventListener("click", function(){
        if (this.id === "html"){
            removelist()
            makelistHtml()

        }else if (this.id === "javascript"){
            removelist()
            makelistjs()

        }
    })
}

let projectlistHtml = {
    iframe : "html/03.12/",
    forms : "html/06.12/",
    transitions : "html/transitions/",
    Animations : "html/animations/",
    psudoelements : "html/psudoelements/",
    lists : "html/task22.11/",
    borders : "html/task26.11/oppg2/",
    paralexsite : "html/task26.11/opp1/"

}

let projectlistjs = {
    oppg1 : "javascript/25.11/",
    oppg2 : "javascript/25.11/oppg1/",
    oppg3 : "javascript/25.11/oppg2/",
    oppg4 : "javascript/02.12/",
    oppg5 : "javascript/09.12/"
}



function makelistHtml(){
    for ( let i = 0; i < Object.getOwnPropertyNames(projectlistHtml).length; i++ ){
        projectslist.push(Object.getOwnPropertyNames(projectlistHtml)[i])
    let createlist =document.createElement("p");
    createlist.classList = "choselist btn"
    createlist.id = projectslist[i]
    createlist.textContent=projectslist[i];
    projects.appendChild(createlist)
    ids = document.querySelectorAll(".choselist")
    document.getElementById(projectslist[i]).addEventListener("click", function(){
        console.log(this.id);
        })
    }
    }


function makelistjs(){
for ( let i = 0; i < Object.getOwnPropertyNames(projectlistjs).length; i++ ){
    projectslist.push(Object.getOwnPropertyNames(projectlistjs)[i])
let createlist =document.createElement("p");
createlist.classList = "choselist btn"
createlist.id = projectslist[i]
createlist.textContent=projectslist[i];
projects.appendChild(createlist)
ids = document.querySelectorAll(".choselist")
document.getElementById(projectslist[i]).addEventListener("click", function(){
    console.log(this.id);
    })}
}
function removelist()
{
    projectslist = []
        while (projects.firstChild){
        projects.removeChild(projects.lastChild)}
}

for (let i = 0; i<projectslist.length; i++){
    document.getElementById(projectslist[i]).addEventListener("click", function(){
        self.classList=("active")
    })
}