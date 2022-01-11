const activMenu = document.querySelector(".menu-btn");
const showmenu = document.querySelector(".menu-column");
const display = document.querySelector(".code-display");
const projects = document.querySelector(".choice-list");
let projectlist = {
    iframe : "../html/03.12/index.html"
}


activMenu.addEventListener("mouseover",function() {
    showmenu.style.display= "flex"
    document.querySelector(".menu-title").style.display ="none"

})
activMenu.addEventListener("mouseleave",function() {
    showmenu.style.display= "none"
    document.querySelector(".menu-title").style.display ="block"
})

document.getElementById("iframe").addEventListener("click",function(){
 let createdisplay = document.createElement("iframe");
 createdisplay.setAttribute("src",projectlist.iframe);
 createdisplay.style.width= "100%";
 createdisplay.style.height= "100%";
 display.appendChild(createdisplay);
})
// `<iframe src=${projectlist.iframe} frameborder="0" width="100%" height="100%"></iframe>`
// display = document.createElement = iframe [src=projectlist.iframe, frameborder="0", width="100%", height="100%"]