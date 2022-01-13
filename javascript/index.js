const activMenu = document.querySelector(".menu-btn");
const showmenu = document.querySelector(".menu-column");
const display = document.querySelector(".code-display");
const projects = document.querySelector(".choice-list");
const htmlbtn = document.getElementById("html")
const projectswindow = document.querySelector(".projectslist")
let ids = document.querySelectorAll(".choselist")


const welcome =`welcome to my portfolio`
const message = "My name is christian. im a 30 years old guy that is learing programing at kodehode."
const counter = welcome + message
let welcomearray = []
let welcomemessage = ""
let welcometext = ""

let projectlist = {
    iframe : "html/03.12/index.html",
    forms : "html/06.12/index.html",
    transitions : "html/transitions/index.html",
    Animations : "html/animations/index.html"
}
let projectslist = []



startup()



// html area
const showhtml = document.getElementById("showhtml")
const showpage = document.getElementById("showpage")
let versions = [showhtml, showpage]
let version = "html"
let activesite = "none"
let writing = false

for (let i= 0; i<versions.length; i++ ){
   versions[i].addEventListener("change",function(){
   version=this.value
   console.log(activesite);
   if (activesite ==="none"){
       return
   }else{
     listclick(activesite)  
   }
   

//    console.log("the page version is:", version); 
})
}
function listclick(id){
        console.log(version === "html");
        if( version === "html"){
            let link = "https://christiankv.github.io/portfolio/" + projectlist[id]
            removeelements()
            console.log(link);
            fetch (link)
            .then((response) => response.text().then(createhtmlsite));
        } else if ( version === "page"){
            let link ="https://christiankv.github.io/portfolio/" + projectlist[id]
            removeelements()
        let createdisplay = document.createElement("iframe");
        createdisplay.setAttribute("src",link);
        createdisplay.style.width= "100%";
        createdisplay.style.height= "100%";
        createdisplay.classList="iframeDisplay active"
        display.appendChild(createdisplay);
}}
function makelist(i){
    let createlist =document.createElement("p");
    createlist.classList = "choselist btn"
    createlist.id = projectslist[i]
    createlist.textContent=projectslist[i];
    projects.appendChild(createlist)
    ids = document.querySelectorAll(".choselist")
    // console.log(ids);
}



// remove function

document.getElementById("clear").addEventListener("click",function(){
    
    activesite = "none"
    if (writing === false){
       startup() 
       removeelements()
    }
    
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
    for ( let i = 0; i < Object.getOwnPropertyNames(projectlist).length; i++ ){
        projectslist.push(Object.getOwnPropertyNames(projectlist)[i])
        console.log(projectlist);
        makelist(i)
        } 




// switching betwene ifram and HTML view
for (let i= 0 ; i < ids.length; i++ ){
        ids[i].addEventListener("click",function(){
            listclick(this.id)
            writing = false
        activesite = this.id})}
})  
function createhtmlsite(retrievedText){
    console.log(retrievedText);
    let htmltext = document.createElement("pre")
    htmltext.classList= "htmldisplay active"
    htmltext.id= "iframehtml"
    htmltext.textContent= retrievedText
    display.appendChild(htmltext)

}
 function startup(){
              welcomemessage =  document.createElement("H2") 
              welcometext =  document.createElement("p")
              

    for (let i = 0; i<counter.length; i++){
        setTimeout(()=>{
        writing = true      

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
                if (counter.length - welcomearray - welcome === 0 ){
                   writing= false
                }
                
            }
        ,150*i )}}
