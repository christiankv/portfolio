import React, { useState, useEffect } from "react";
import { AdviceBox } from "./advicePage/adviceStyles";


export const AdvicePage = () => {
    const [fact, setFact] = useState()
    const [isLoaded, setIsLoaded] = useState()
    const [error, setError] = useState()

    const fetchData = () => {
        fetch("json\data.json")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true)
                    setFact(result)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }

    useEffect(() => {
        fetchData()
    }, [])
    if (fact) {
        console.log(fact)
        return (
            <div>
                <AdviceBox>{fact.slip.advice}</AdviceBox>
                <button onClick={fetchData}>get advice</button>
            </div>
        )
    }
    else if (error && isLoaded) {
        console.log(error)
        return (
            <div>
                <p>Sorry, there has been an error</p>
            </div>
        )
    }
    else return (
        <div>
            <AdviceBox>The page is loading</AdviceBox>
        </div>
    )
}

// const fetchData = () => {
//     fetch("https://api.adviceslip.com/advice")
//         .then(res => res.json())
//         .then(
//             (result) => {
//                 setIsLoaded(true)
//                 setFact(result)
//             },
//             (error) => {
//                 setIsLoaded(true)
//                 setError(error)
//             }
//         )
// }