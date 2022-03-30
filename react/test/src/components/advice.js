import React, { useEffect } from "react";






export default function Advice(){
    const theAdvice = 
    async function adviceslips(){
           await fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => {
                theAdvice = data
            });
    return  (
        <p>{theAdvice}</p>
    ) 
    }
    useEffect(() => {
    Advice()
    },[])
    if (theAdvice){
        console.log(theAdvice)
    }
}

n