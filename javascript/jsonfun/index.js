// const myjson = fetch("caracter.json")
//                 .then(response => response.json())
//                 .then(json => console.log(json));
//                 const caracterdata = JSON.parse(myjson)
//                 const caracterdata = JSON.parse(myjson)

// console.log(caracterdata);

async function getcaracterinfo(){
    fetch("json/caracter.json")
        .then(response => response.json())
        .then(json => console.log(json));

}                

getcaracterinfo()