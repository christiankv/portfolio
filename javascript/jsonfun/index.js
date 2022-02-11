

async function getjson(){
    const response = await fetch("https://raw.githubusercontent.com/christiankv/portfolio/main/javascript/jsonfun/json/caracter.json")
    const data = await response.json();
    console.log(data);
    start(data)
}







let npcs = []

getjson()
let data
function start(myjson){
    
    data = myjson
    let npc1 = new caracter(data.names[Math.floor(Math.random()*data.names.length)],data.type[Math.floor(Math.random()*data.type.length)])
    let npc2 = new caracter(data.names[Math.floor(Math.random()*data.names.length)],data.type[Math.floor(Math.random()*data.type.length)])
    let npc3 = new caracter(data.names[Math.floor(Math.random()*data.names.length)],data.type[Math.floor(Math.random()*data.type.length)])
    npcs.push(npc1)
    npcs.push(npc2)
    npcs.push(npc3)
    
    
    console.log(npcs);
}

function  chosewepon(type){
    if (type === "fighter"){
        let a = Math.floor(Math.random()*2)
        console.log(a);
        return data.fwep[a]
    } else if (type === "mage"){
        let a = Math.floor(Math.random()*3)
        console.log(a);
        return data.mwep[a]
    }   else if (type === "thief"){
        let a = Math.floor(Math.random()*2)
        console.log(a);
        return data.twep[a]
    }
}
function setstats(type){
        if (type === "fighter"){
            return data.fighter
        }else if (type ==="mage"){
            return data.mage
        }else if (type === "thief"){
            return data.thief
        }
}

class caracter{
    constructor(name,type,){
        this.name = `${name} the ${type}`
        this.class = type
        this.wepon = chosewepon(this.class)
        this.stats = setstats(this.class)      
    }
}
