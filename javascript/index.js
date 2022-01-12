const activMenu = document.querySelector(".menu-btn");
const showmenu = document.querySelector(".menu-column");
const display = document.querySelector(".code-display");
const projects = document.querySelector(".choice-list");
let ids = document.querySelectorAll(".choselist")

let projectlist = {
    iframe : "html/03.12/index.html",
    forms : "html/06.12/index.html",
    transitions : "html/transitions/index.html",
    Animations : "html/animations/index.html"
}
let projectslist = []

console.log(projectslist);


backbtn()

document.getElementById("backbtn").addEventListener("click", function(){
    removeelements()
    startup()
})


for ( let i = 0; i < Object.getOwnPropertyNames(projectlist).length; i++ ){
projectslist.push(Object.getOwnPropertyNames(projectlist)[i])
makelist(i)
}


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
            removeelements()
            if (this.id == "backbtn" ){
                return
            }
            else{
            let iframelink =  "https://christiankv.github.io/portfolio/" + projectlist[this.id]
            let createdisplay = document.createElement("iframe");
            createdisplay.setAttribute("src",iframelink);
            createdisplay.style.width= "100%";
            createdisplay.style.height= "100%";
            createdisplay.classList="iframeDisplay"
            display.appendChild(createdisplay);
            }


})

}

function backbtn(){
    let back = document.createElement("p")
    back.classList= "choselist"
    back.id= "backbtn"
    back.textContent= "back"
    projects.appendChild(back)


}

function makelist(i){
    let createlist =document.createElement("p");
    createlist.classList = "choselist"
    createlist.id = projectslist[i]
    createlist.textContent=projectslist[i];
    projects.appendChild(createlist)
    ids = document.querySelectorAll(".choselist")
}
const welcome =`welcome to my portfolio`
 ""
const message = "My name is christian "
const counter = welcome + message
let welcomearray = []
let welcomemessage = ""
let welcometext = ""





 function startup(){
              welcomemessage =  document.createElement("H2") 
              welcometext =  document.createElement("p")

    for (let i = 0; i<counter.length; i++){
        setTimeout(()=>{

            if (i<welcome.length){            
                // display.removeChild(display.firstChild)
                // welcomemessage =  document.createElement("H2")  
                welcomearray = counter.slice(0,i+1)
                welcomemessage.textContent = welcomearray
                display.appendChild(welcomemessage)
            }
            else{
                // display.removeChild(display.firstChild)

                welcomearray = counter.slice(welcome.length,i+1)
                welcometext.textContent = welcomearray
                display.appendChild(welcometext)}
                console.log(welcomearray);
            }
        ,250*i )}
}
    
startup()

// removing elements

function removeelements(){
    while (display.firstChild){
        display.removeChild(display.lastChild)
    }
}