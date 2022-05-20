import React from "react";


export default function Nav(prop){
    
    
    
    return(
        <div className="nav">
                <div className="title">
                    <h4 className="title-top">welcome to</h4>
                    <h1 className="title-main">My portfolio</h1>
                </div>
                <p id="about" onClick={prop.clickevent}>About</p>
                <p id="projects" onClick={prop.clickevent}>Projects</p>
                <p id="cv" onClick={prop.clickevent}>CV</p>
                <p  id="contact" onClick={prop.clickevent}>Contact</p>
        </div>
    )
}