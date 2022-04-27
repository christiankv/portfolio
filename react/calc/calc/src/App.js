import React from "react"
import Display from "./components/display"
import Num from "./components/num"




export default function App() {
    const [display, newdisplay]= React.useState("")
    const btns = [
        5,6,7,8,9,
        0,1,2,3,4,
        "=","/","*", "+","-"
    ]

    

    function displayfunc(value){
        newdisplay(prev=> prev+ value)
    }

    const numb = btns.map(btn =>  <Num value ={btn} Click={displayfunc}/>)
    
    return (
        <div className="">
            <Display value={display}/>
            <div className="numbpanel" >
             {numb}   
            </div>
           
        </div>
    )
}