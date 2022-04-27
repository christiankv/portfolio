import React from "react";
import Nav from "./components/nav";

export default function App(){
    const info = {
        html : {
            oppg1 : {
                name: "03.12",
                about: "iframe"
            },
            oppg2 : {
                name: "04.12",
                about: "something"
            },
            oppg3 : {
                name: "04.13",
                about: "something"
            },
            oppg4 : {
                name: "05.12",
                about: "iframe"
                },
            oppg5 : {
                name: "06.12",
                about: "something"
                },
            oppg6 : {
                name: "07.13",
                about: "something"}
},
        javascript : {
                jsoppg1 : {
                    name: "03.12",
                     about: "iframe"
                    },
                jsoppg2 : {
                    name: "04.12",
                    about: "something"
                    },
                oppg3 : {
                    name: "04.13",
                    about: "something"
                    },
                oppg4 : {
                    name: "05.12",
                    about: "iframe"
                        },
                oppg5 : {
                    name: "06.12",
                    about: "something"
                        },
                oppg6 : {
                    name: "07.13",
                    about: "something"
                        }
},
        python : {
                pyoppg1 : {
                    name: "03.12",
                     about: "iframe"
                    },
                oppg2 : {
                    name: "04.12",
                    about: "something"
                    },
                oppg3 : {
                    name: "04.13",
                     about: "something"
                    },
                oppg4 : {
                    name: "05.12",
                    about: "iframe"
                        },
                oppg5 : {
                     name: "06.12",
                    about: "something"
                        },
                oppg6 : {
                    name: "07.13",
                    about: "something"
                        }
}
}
const [choices, setChoices]= React.useState(selections("html"))



function clickevent(id){
    id = id.target.id
    setChoices(selections(id))
    
    }
    
     


function selections(id){
    if (id === "html" ){
    const list = Object.keys(info.html) 
    // console.log(list);
    // console.log("html");
    return list
    }else if (id === "javascript"){
    const list = Object.keys(info.javascript) 
    // console.log(list);
    // console.log("js");
    return list
    }else if (id === "phyton") {
    const list = Object.keys(info.python) 
    // console.log(list);
    // console.log("python");
    return list

}}


    const versions =["javascript", "phyton", "html"]


    return(
        <div className="container">
                <Nav
                onclick = {clickevent}
                topbuttons = {versions}
                choicebtns = {choices}
/>
        </div>

    )
}