



let numbers = "1*2+32/4-3"
let newnumbers = []
let actionarray= []
// numbers.map(number=>{
//     return number
// })

// numbers.forEach(number=> {
// newnumbers.push(number)
// })
stringsplit(numbers)

function stringsplit(string){
    if (string.includes("*")){
    actionarray.push(numbers.indexOf("*"))
    }
        
    
    actionarray.push(numbers.indexOf("*"));
    actionarray.push(numbers.indexOf("+"))
    actionarray.push(numbers.indexOf("/"))
    actionarray.push(numbers.indexOf("-"))
    console.log(actionarray);
}


// spiliting(numbers)

// function spiliting(array){
    
//     // numbers =[]
//     array.forEach(element => {
//         let nrarray = []
//         if (element.includes("+")){
//             nrarray = element.split("+")
//             actionarray.push("+")
//             console.log(nrarray)
//             spiliting(nrarray)
//             }
//         else if(element.includes("-")){
//             nrarray=element.split("-")
//             actionarray.push("-")
//             spiliting(nrarray)
//             console.log(nrarray);
            
//         }else if(element.includes("*")){
//             nrarray=element.split("*")
//             actionarray.push("*")
//             spiliting(nrarray)
//             console.log(nrarray);
// }
            
//         else if(element.includes("/")){
//             nrarray=element.split("/")
//             actionarray.push("/")            
//             spiliting(nrarray)
//             console.log(nrarray);
// }
//         else{
//             newnumbers.push(element)
//             console.log(newnumbers);
//             console.log(actionarray)
//         }

//     });
// }


// function calculate(){
//     let nrarray = numbers.split("+")
//     console.log(nrarray);
    
// }


// calculate()

// let numarray= []
// let newnrarray= []
// numbers.forEach(number=> {
// // console.log(parseInt(number));
// const isnumber = parseInt(number)

// if (isNaN(isnumber)){
//     let nr =""
//     // console.log(number);
//     numarray.map(number=>{
//     nr += number
// })
// newnrarray.push(parseInt(nr))
//     numarray=[]
//     if (number=== "+"){

//     }

// }else{
//     numarray.push(number)
//     // console.log(numarray);
// }
// let nr =""
// numarray.map(number=>{
//     nr += number}
// )
// console.log(newnrarray);
// }) 
// }