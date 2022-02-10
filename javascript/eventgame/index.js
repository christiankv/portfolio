const gamebar = document.getElementById("gamebar")
const startbtn = document.getElementById("startbtn")

let isalive = true
let gamelocation = []
let currentposition = 37
let startgame
let rounds = 1
let speed = 500



startbtn.addEventListener("click", (gamestart))

    for (let i = 0; i<75;i++){
       let box = document.createElement("div")
        box.classList = "gameblock"
        gamebar.appendChild(box)
        gamelocation.push(box)
        // console.log(gamelocation.length);
    }
function gamestart(){
startbtn.style.display= "none"
startgame = setInterval(game,speed)

}



function game(){
rounds +=1
let a = Math.floor(rounds*0.1)
let b = Math.ceil(Math.random()*2)
console.log(b);
console.log(speed);
 if (currentposition<gamelocation.length & b===1){
    gamelocation[currentposition].classList = "gameblock"
    currentposition +=a
    gamelocation[currentposition].classList = "gamebar2"
}else if (currentposition<gamelocation.length & b===2){
    gamelocation[currentposition].classList = "gameblock"
    currentposition -=a
    gamelocation[currentposition].classList = "gamebar2"
}else if (currentposition=== 0) {
    clearInterval(startgame)
    startbtn.style.display= "block"
    currentposition = 37
}else{
    clearInterval(startgame)
    startbtn.style.display= "block"
    currentposition = 37
}
}

const body = document.querySelector("body")
console.log(body);
body.addEventListener("keypress",function(e){
    console.log(e);
    if (e.key === "a" | e.key === "A"){
    gamelocation[currentposition].classList = "gameblock"
    currentposition -=1
    gamelocation[currentposition].classList = "gamebar2" 
    }else if(e.key === "d" | e.key === "D"){
    gamelocation[currentposition].classList = "gameblock"
    currentposition +=1
    gamelocation[currentposition].classList = "gamebar2" 
    }
})