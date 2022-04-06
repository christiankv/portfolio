const radiobtn = document.querySelector(".title--radio")
const shownprojects = document.querySelector(".main--projects")

const btns = [
    htmlR = document.getElementById("htmlR"),
    javascriptR = document.getElementById("javascriptR"),
    pythonR = document.getElementById("pythonR")
]
const radiobtns = [
     html = document.getElementById("html"),
     javascript = document.getElementById("javascript"),
     python = document.getElementById("python")
]

let projects = []


let myjson = `
{
    "html" : {
        "oppg1" : {
            "name": "03.12",
            "about": "iframe"
        },
        "oppg2" : {
            "name": "04.12",
            "about": "something"
        },
        "oppg3" : {
            "name": "04.13",
            "about": "something"
        },
        "oppg4" : {
            "name": "05.12",
            "about": "iframe"
            },
        "oppg5" : {
            "name": "06.12",
            "about": "something"
            },
        "oppg6" : {
            "name": "07.13",
            "about": "something"
            }},
    "javascript" : {
        "oppg1" : {
            "name": "03.12",
            "about": "iframe"
        },
        "oppg2" : {
            "name": "04.12",
            "about": "something"
        },
        "oppg3" : {
            "name": "04.13",
            "about": "something"
        },
        "oppg4" : {
            "name": "05.12",
            "about": "iframe"
            },
        "oppg5" : {
            "name": "06.12",
            "about": "something"
            },
        "oppg6" : {
            "name": "07.13",
            "about": "something"
            }}
}
`

let type = "html"
radiobtn.addEventListener("click", e => {
    htmlR.className = "black"
    javascriptR.className = "black"
    pythonR.className = "black"
    e.target.className = "white"
})

radiobtns.forEach(element => {
   element.addEventListener("change", e =>{
    type = e.target.id
    console.log(type);
    getjson()

}) 
}); 








class Pagesetting {
    constructor(language,name,task){
        this.language = language
        this.name = name
        this.task = task
        this.link = `./${language}/${name}/`
    }

    
    getlink(){
    console.log(this.link);
    }
    html(){
        makebtn(this.name,this.link + "index.html" )
        // console.log()
    }
    css(){
        console.log(this.link + "css/style.css")
    }
    javascript(){
        console.log(this.link + "javascript/index.js")
    }
    about(){
        console.log(this.task);
    }
}
async function getjson(){
    // const response = await fetch("https://raw.githubusercontent.com/christiankv/portfolio/main/tests/json/projects.json")
    // const data = await response.json();
    const data = JSON.parse(myjson)
    // console.log(info);
    if (type === "html"){
        start(data.html)
    }else if (type === "javascript"){
        start(data.javascript)
    }else if (type === "python"){
        start(data.python)
    }
    
    
}
// getjson()


function start(data){   
    for(let i = 0; i<Object.keys(data).length; i++){
    let task = new Pagesetting(type, Object.values(data)[i].name, Object.values(data)[i].about)
    projects.push(task)
    projects[i].html()
}
console.log(projects)
projects[0].getlink()
projects[0].css()
projects[0].javascript()
projects[0].about()}

function makebtn(name,link){
    let btn = document.createElement("button")
    btn.classList = "projects--btn"
    btn.id = name
    btn.textContent = name
    shownprojects.appendChild(btn)

}