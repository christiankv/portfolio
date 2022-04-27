import React from "react";

export default function Nav(prop){
    function Smallbtns(){
        const btn = prop.topbuttons.map(element => <small 
            id={element} 
            className="chocebtns"
            onClick={prop.onclick}
            >{element}</small> )
        return btn
    }
    function Choices(){
        const btn = prop.choicebtns.map(element => <p 
            id={element} 
            className="chocebtns"
            onClick={prop.onclick}
            >{element}</p>)
        return btn
    }
    
        
    return(
        <div className="navbar">
            <div className="title">
            <small>welcome to</small>
            <h1>my portfolio</h1>
            </div>
            <div className="version">
            <Smallbtns/>
            </div>
            <Choices/>

        </div>
    )
}