
// let myjson = fetch("/json/caracter.json")

// console.log(myjson);

// console.log(JSON.parse(myjson));

// async function getcaracterinfo(){
//     fetch("https://christiankv.github.io/portfolio/javascript/jsonfun/json/caracter.json")
//         .then(response => response.json())
//         .then(json=> console.log(json))
        

// }
// // fetch("https://christiankv.github.io/portfolio/javascript/jsonfun/json/caracter.json")
// let carcterdata = 

// getcaracterinfo()

// // console.log(carcterdata);


const myjson = `{
    "names":["christian","petter","ola"],
    "class":["fighter","mage","thief"],
    "fwep":["sword","2hsword"],
    "mwep":["staff","orb","book"],
    "twep":["dagger","bow"]
}`

 let data = JSON.parse(myjson)


console.log(data.names);