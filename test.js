class site {
    constructor(site,type){
        this.site = site
        this.type = type
        const link = "https://christiankv.github.io/portfolio/" + site 
    }
        check(){
            console.log(link);
        }
        createsite(){
            
            if ( type === "html"){
                if (version === "showpage"){
                    let link =  link + "index.html"
                    iframe.style.display = "block"
                    codebox.style.display= "none"
                    iframe.setAttribute("src",link) 
                }
                if( version === "showhtml"){
                    let link =  link + "index.html"
                    codebox.style.display = "block"
                    iframe.style.display = "none"
                    console.log(link);
                    fetch (link)
                    .then((response) => response.text().then(createhtmlsite));
              }  
                if(version === "showcss"){
                    let link =  link + "/css/style.css"
                    codebox.style.display = "block"
                    codebox.style.textAlign= "left"
                    iframe.style.display = "none"
                    console.log(link);
                    fetch (link)
                    .then((response) => response.text().then(createhtmlsite));
                }
                if(version === "showjs"){
                    let link =  link + "index.js"
                    codebox.style.display = "block"
                    codebox.style.textAlign= "left"
                    iframe.style.display = "none"
                    console.log(link);
                    fetch (link)
                    .then((response) => response.text().then(createhtmlsite));
                }
            }
            else if (type === "javascript"){
                if(version === "showjs"){
                    let link =  link + "index.js"
                    codebox.style.display = "block"
                    codebox.style.textAlign= "left"
                    iframe.style.display = "none"
                    console.log(link);
                    fetch (link)
                    .then((response) => response.text().then(createhtmlsite));
                }
            }
        
        }}
const codebox = document.getElementById("codearea")
const projects = document.querySelector(".projects")
const iframe = document.getElementById("pageview")
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

// for (let i = 0; i<welcomemessage.length; i++ ){
//     setTimeout(()=>{
//         let tempmessage = welcomemessage.slice(0, i+1)
//          codebox.textContent = tempmessage
//      },100*i)
// }
let type = "html"

for (let i = 0; i<menu.length; i++){
    menu[i].addEventListener("click", function(){
        if (this.id === "html"){
            type = this.id
            removelist()
            makelistHtml()
        }else if (this.id === "javascript"){
            radjavascript.checked = true;
            version = "showjs"
            type = this.id
            removelist()
            makelistjs()
        }
    })
}

let projectlistHtml = {
    iframe :("html/03.12/"),
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

const sitelist = projectlistHtml + projectlistjs

function makelistHtml(){
    for ( let i = 0; i < Object.getOwnPropertyNames(projectlistHtml).length; i++ ){
        projectslist.push(Object.getOwnPropertyNames(projectlistHtml)[i])
    let createlist =document.createElement("p");
    createlist.classList = "choselist btn"
    createlist.id = projectslist[i]
    createlist.textContent=projectslist[i];
    projects.appendChild(createlist)
    ids = document.querySelectorAll(".choselist")

    }
    
    for (let i = 0; i <projectslist.length; i++){
      document.getElementById(projectslist[i]).addEventListener("click", function(){
        let id = this.id
        console.log(id) 
        createsite(this.id)
  
      })}
    //     console.log(this.id)
    //     if (version === "showpage"){
    //         let link =  "https://christiankv.github.io/portfolio/" + projectlistHtml[this.id] +"index.html"
    //         iframe.style.display = "block"
    //         codebox.style.display= "none"
    //         iframe.setAttribute("src",link) 
    //     }
    //     if( version === "showhtml"){
    //         let link = "https://christiankv.github.io/portfolio/" + projectlistHtml[this.id]+"index.html"
    //         codebox.style.display = "block"
    //         iframe.style.display = "none"
    //         console.log(link);
    //         fetch (link)
    //         .then((response) => response.text().then(createhtmlsite));
    //   }  
    //     if(version === "showcss"){
    //         let link = "https://christiankv.github.io/portfolio/" + projectlistHtml[this.id]+"/css/style.css"
    //         codebox.style.display = "block"
    //         codebox.style.textAlign= "left"
    //         iframe.style.display = "none"
    //         console.log(link);
    //         fetch (link)
    //         .then((response) => response.text().then(createhtmlsite));
    //     }
    //     if(version === "showjs"){
    //         let link = "https://christiankv.github.io/portfolio/" + projectlistHtml[this.id]+"index.js"
    //         codebox.style.display = "block"
    //         codebox.style.textAlign= "left"
    //         iframe.style.display = "none"
    //         console.log(link);
    //         fetch (link)
    //         .then((response) => response.text().then(createhtmlsite));
    //     }
    // })}
}
    
    function createhtmlsite(retrievedText){
        codebox.textContent = retrievedText
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
// document.getElementById(projectslist[i]).addEventListener("click", function(){
//     console.log(this.id);
//     }
    // )
}
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

function createsite(id){
    console.log(type);
    console.log(id);
    // const link = "https://christiankv.github.io/portfolio/" + sitelist[id]
    if (id === "projectslist"){return}
    if ( type === "html"){
        if (version === "showpage"){
            let link =  "https://christiankv.github.io/portfolio/" + projectlistHtml[id] + "index.html"
            iframe.style.display = "block"
            codebox.style.display= "none"
            iframe.setAttribute("src",link) 
        }
        if( version === "showhtml"){
            let link =  "https://christiankv.github.io/portfolio/" + projectlistHtml[id] + "index.html"
            codebox.style.display = "block"
            iframe.style.display = "none"
            console.log(link);
            fetch (link)
            .then((response) => response.text().then(createhtmlsite));
      }  
        if(version === "showcss"){
            let link =  "https://christiankv.github.io/portfolio/" + projectlistHtml[id] + "/css/style.css"
            codebox.style.display = "block"
            codebox.style.textAlign= "left"
            iframe.style.display = "none"
            console.log(link);
            fetch (link)
            .then((response) => response.text().then(createhtmlsite));
        }
        // if(version === "showjs"){
        //     let link =  "https://christiankv.github.io/portfolio/" + sitelist[id] + "index.js"
        //     codebox.style.display = "block"
        //     codebox.style.textAlign= "left"
        //     iframe.style.display = "none"
        //     console.log(link);
        //     fetch (link)
        //     .then((response) => response.text().then(createhtmlsite));
        // }
    }
    else if (type === "javascript"){
        if(version === "showjs"){
            let link =  "https://christiankv.github.io/portfolio/" + projectlistjs[id] + "index.js"
            codebox.style.display = "block"
            codebox.style.textAlign= "left"
            iframe.style.display = "none"
            console.log(link);
            fetch (link)
            .then((response) => response.text().then(createhtmlsite));
        }
    }

}

projects.addEventListener("click", (e) => createsite(e.target.id))