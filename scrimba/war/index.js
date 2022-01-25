let deckid 

let cardslot = document.querySelectorAll(".card")

const cardsindec = document.getElementById("remaining-cards")
const yourscoretable = document.getElementById("your-score")
const enemyscoretable = document.getElementById("enemy-score")

let yourscore = 0
let enemyscore = 0
const deckbtn = document.getElementById("deck-btn")
const drawbtn = document.getElementById("draw-btn")
const result = document.getElementById("result")


deckbtn.addEventListener("click", newdeck)
drawbtn.addEventListener("click", drawcards)

function newdeck(){
    drawbtn.style.display = "inline-block"
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then(res => res.json())
    .then(data =>{ 
        console.log(data)
    deckid = data.deck_id
cardsindec.textContent = data.remaining
        yourscore = 0
        enemyscore = 0
        yourscoretable.textContent = yourscore
        enemyscoretable.textContent = enemyscore
    
})
}

function drawcards(){
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckid}/draw/?count=2`)
    .then(res => res.json())
    .then(data => {
        const card1 = data.cards[0]
        const card2 = data.cards[1]

    for (i=0; i<cardslot.length; i++){
    cardslot[i].innerHTML = `
    <img src=${data.cards[i].image} />`
    }
cardsindec.textContent = data.remaining


battle(card1,card2)
    if (data.remaining === 0){
        winner()
    }
})

}

function battle(card1, card2){
    const values = ["2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "JACK", "QUEEN", "KING", "ACE"]
    card1value = values.indexOf(card1.value)
    card2value = values.indexOf(card2.value)
    if (card1value>card2value){
        result.innerHTML = "you lost"
        enemyscore += 1
    } else if (card1value<card2value){
        result.innerHTML = "you won"
        yourscore += 1
    }else{
        result.innerHTML = "its a tie"
    }
    yourscoretable.textContent = yourscore
    enemyscoretable.textContent = enemyscore
}

function winner(){
    drawbtn.style.display = "none"
    if(yourscore > enemyscore){
        result.innerHTML = "you won the game"
    }else if (yourscore<enemyscore){
        result.innerHTML = "you lost the game"
    }else {
        result.innerHTML = "no surrivors"
    }

}