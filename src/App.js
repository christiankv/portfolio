import React from "react";
import Nav from "./components/nav";
import Info from "./components/info";
import Main from "./components/main";


export default function App(){
    const info = [
        {
            id: "html",
            language : "html",
            title: "03.12",
            info: "iframe"
        },
        {
            id: "javascript",
            language : "javascript",
            title: "03.12",
            info: "iframe"
        },        
        {
            id: "python",
            language : "python",
            title: "03.12",
            info: "how to make an if setting that works"
            }

    ]





// const [choices, setChoices]= React.useState("html")





function clickEvent(id){
    
    if (id.target.id === ""){
        id = id.target.parentElement.id;
    } else id = id.target.id;
    
    console.log(id);
    
    

}
    return(
        <div className="container">
        <Nav
            clickevent = {clickEvent}
            content = {info}

/>
            <Info/>
            <Main/>
        </div>

    )
}