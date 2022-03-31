const radiobtn = document.querySelector(".title--radio")
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
        console.log(this.link + "index.html")
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
    const response = await fetch("https://raw.githubusercontent.com/christiankv/portfolio/main/tests/json/projects.json")
    const data = await response.json();
    
    // console.log(info);

    start(data.html)
    
}
getjson()
// function info(data, i ){

// return data.Object.keys(data)[i] + ".name"
// }

function start(data){
    console.log(data);
    const newdata = JSON.parse(`data.${Object.keys(data)[1]}.name`)
    console.log(newdata);
;


}
// let task1 = new Pagesetting(type, html[0],)

// task1.getlink()
// task1.html()
// task1.css()
// task1.javascript()
// task1.about()