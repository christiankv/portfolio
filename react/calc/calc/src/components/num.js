import React from "react"

export default function Num(prop){
    return (
        <p className="num"
        onClick={()=> prop.Click(prop.value)}
        >{prop.value}</p>
    )}
