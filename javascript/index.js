const activMenu = document.querySelector(".menu-btn");
const showmenu = document.querySelector(".menu-column");
const display = document.querySelector(".code-display");
const Wdisplay = document.querySelector(".welcome-display");
const projects = document.querySelector(".choice-list");
const htmlbtn = document.getElementById("html")
const projectswindow = document.querySelector(".projectslist")
let ids = document.querySelectorAll(".choselist")


const welcome =`welcome to my portfolio`
const message1 = "My name is christian. im a 30 years old guy that is learing programing at kodehode."
const message2 = "My name is christian. im a 30 years old guy that is learing programing at kodehode."
// const counter = welcome + message
let textcollection = [welcome, message1, message2]
// let writer = ""  
let welcomearray = []
let welcomemessage = ""
let welcometext = ""

let projectlist = {
    iframe : "html/03.12/",
    forms : "html/06.12/",
    transitions : "html/transitions/",
    Animations : "html/animations/"
}
let projectslist = []



startup()



// html area
const showcss = document.getElementById("showcss")
const showhtml = document.getElementById("showhtml")
const showpage = document.getElementById("showpage")
let versions = [showhtml, showpage,showcss]
let version = "html"
let activesite = "none"
let writing = false

for (let i= 0; i<versions.length; i++ ){
   versions[i].addEventListener("change",function(){
   version=this.value
//    console.log(activesite);
   if (activesite ==="none"){
       return
   }else{
     listclick(activesite)  
   }
   

//    console.log("the page version is:", version); 
})
}
function listclick(id){
        Wdisplay.style.display = "none"

        // console.log(version === "html");
        if( version === "html"){
            let link = "https://christiankv.github.io/portfolio/" + projectlist[id]+"index.html"
            removeelements()
            console.log(link);
            fetch (link)
            .then((response) => response.text().then(createhtmlsite));
        } else if ( version === "page"){
            let link ="https://christiankv.github.io/portfolio/" + projectlist[id] +"index.html"
            removeelements()
        let createdisplay = document.createElement("iframe");
        createdisplay.setAttribute("src",link);
        createdisplay.style.width= "100%";
        createdisplay.style.height= "100%";
        createdisplay.classList="iframeDisplay active"
        display.appendChild(createdisplay);
            }else if ( version === "css"){
                let link ="https://christiankv.github.io/portfolio/" + projectlist[id]+ "/css/style.css"
                removeelements()
                console.log(link);
                fetch (link)
            .then((response) => response.text().then(createhtmlsite));

            }
}
function makelist(){
    for ( let i = 0; i < Object.getOwnPropertyNames(projectlist).length; i++ ){
        projectslist.push(Object.getOwnPropertyNames(projectlist)[i])
    let createlist =document.createElement("p");
    createlist.classList = "choselist btn"
    createlist.id = projectslist[i]
    createlist.textContent=projectslist[i];
    projects.appendChild(createlist)
    ids = document.querySelectorAll(".choselist")
    // console.log(ids);
}}



// remove function

document.getElementById("clear").addEventListener("click",function(){
    Wdisplay.style.display = "flex"
    activesite = "none"
    removeelements()    
})
function removeelements(){
    while (display.firstChild){
        display.removeChild(display.lastChild)
    }
}

function removelist(){
    while (projects.firstChild){
        projects.removeChild(projects.lastChild)

    }
}
// menu area
activMenu.addEventListener("mouseover",function() {
    showmenu.style.display= "flex"
    document.querySelector(".menu-title").style.display ="none"

})

activMenu.addEventListener("mouseleave",function() {
    showmenu.style.display= "none"
    document.querySelector(".menu-title").style.display ="block"
})
htmlbtn.addEventListener("click", function(){
    projectswindow.style.display= "block"
    removelist()
    makelist()




// switching betwene ifram and HTML view
for (let i= 0 ; i < ids.length; i++ ){
        ids[i].addEventListener("click",function(){
            // document.getElementById(this.id).style.color="green"
            activesite.classList = "choselist btn"
            display.style.display = "block"
            listclick(this.id)
            writing = false
        activesite = this.id
        activesite.classList += " activebtn"
    })}
})  
function createhtmlsite(retrievedText){
    // console.log(retrievedText);
    let htmltext = document.createElement("textarea")
    htmltext.classList= "htmldisplay active"
    htmltext.id= "iframehtml"
    htmltext.readOnly = true
    htmltext.textContent= retrievedText
    display.appendChild(htmltext)

}
 function startup(){
        let welcomemessage =  document.createElement("H2");
        let welcometext1 =  document.createElement("p");
        let welcometext2 = document.createElement("p");
        let writinglist=[ welcomemessage, welcometext1, welcometext2]
for (let i = 0; i < writinglist.length; i++){
    Wdisplay.appendChild(writinglist[i])
// console.log(textcollection[i]); 
    writer(textcollection[i],writinglist[i])
}}

function writer(text,element){
    for (let i = 0; i<text.length; i++){
        // console.log(text[i])
        setTimeout(()=>{
           let tempmessage = text.slice(i, i+1)
            element.textContent += tempmessage
            // Wdisplay.appendChild(element)
        },75*i)}}

function buttoncolor(){
    for (let i= 0 ; i < ids.length; i++ ){
    document.getElementById(ids[i]).style.color="green"  
      }
    
}