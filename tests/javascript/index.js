class pagesetting {
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

let task1 = new pagesetting("html", "iframe","make a button")

task1.getlink()
task1.html()
task1.css()
task1.javascript()
task1.about()