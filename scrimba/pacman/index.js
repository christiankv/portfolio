const width = 28
const grid = document.querySelector(".grid")
const scoreDisplay =document.querySelector("#score")
const squares = []
let score = 0

console.log(grid);
console.log(score);

const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 
]

function createboard(){
    for (let i = 0; i <layout.length; i++) {
    const square = document.createElement("div")
    grid.appendChild(square)
    squares.push(square)
    if (layout[i] === 0){
        squares[i].classList.add("pac-dot")
    }else if (layout[i]=== 1){
        squares[i].classList.add("wall")
    }else if(layout[i]=== 2) {
        squares[i].classList.add("ghost-lair")
    }else if(layout[i]=== 3) {
        squares[i].classList.add("power-pellet")
    }
}}

createboard()


let pacmancurrentindex = 490
squares[pacmancurrentindex].classList.add("pacman")

function control(e){
    squares [pacmancurrentindex].classList.remove("pacman")
    console.log(pacmancurrentindex);
    switch(e.key) {
        case "ArrowDown":
        console.log('pressed down')
        if( 
            !squares[pacmancurrentindex +width].classList.contains("ghost-lair")&&
            !squares[pacmancurrentindex + width].classList.contains("wall") &&
            pacmancurrentindex + width < width * width
            ) 
            
            pacmancurrentindex += width
        break
        case "ArrowUp":
        console.log('pressed up')
        if(
            !squares[pacmancurrentindex-width].classList.contains("ghost-lair")&&
            !squares[pacmancurrentindex-width].classList.contains("wall") &&
            pacmancurrentindex - width >=0
            ) 
            pacmancurrentindex -= width
        break
        case "ArrowLeft": 
        console.log('pressed left')
        if(
            !squares[pacmancurrentindex- 1].classList.contains("ghost-lair")&&
            !squares[pacmancurrentindex - 1].classList.contains("wall") &&
            pacmancurrentindex % width !== 0
            ) 
            pacmancurrentindex -=1
            if (pacmancurrentindex === 364) {
                pacmancurrentindex = 391
            }
        break
        case "ArrowRight":
        console.log('pressed right')
        if(
            !squares[pacmancurrentindex+1].classList.contains("ghost-lair")&&
            !squares[pacmancurrentindex+1].classList.contains("wall") &&
            pacmancurrentindex % width <width - 1
            ) pacmancurrentindex +=1

            if (pacmancurrentindex === 391) {
                pacmancurrentindex = 364
            }
        break}
        squares[pacmancurrentindex].classList.add('pacman')
        pacdoteat()
        powerpelleteaten()
        checkwin()
        checkgameover()
}

document.addEventListener("keyup",control)

function pacdoteat(){
    if (squares[pacmancurrentindex].classList.contains("pac-dot")){
        squares[pacmancurrentindex].classList.remove("pac-dot")
        score++
        scoreDisplay.textContent = score
    }
}

function powerpelleteaten(){
    if (squares[pacmancurrentindex].classList.contains("power-pellet")){
        squares[pacmancurrentindex].classList.remove("power-pellet")
        score+= 10
        ghost.forEach(ghost => ghost.isScared = true)
        setTimeout(unScareGhosts, 10000)
}

function unScareGhosts(){
    ghosts.forEach(ghost => ghost.isScared = false)
}

}
class Ghost {
    constructor(className, startIndex, speed){
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.isScared = false
        this.timerId = NaN

    }
}

const ghosts = [ 
    new Ghost('blinky', 348, 250),
    new Ghost('pinky', 376, 400),
    new Ghost('inky', 351, 300),
    new Ghost('clyde', 379, 500)
]

ghosts.forEach(ghost => {
    squares[ghost.currentIndex].classList.add(ghost.className)
    squares[ghost.currentIndex].classList.add('ghost')
})
ghosts.forEach(ghost => moveGhost(ghost))

function moveGhost(ghost){
    console.log('moved ghost')
    const directions = [-1, +1, -width, +width]
    let direction = directions[Math.floor(Math.random()*directions.length)]

    ghost.timerId = setInterval(function(){
        if (          
        !squares[ghost.currentIndex + direction].classList.contains('wall') &&
        !squares[ghost.currentIndex + direction].classList.contains('ghost')){
            squares[ghost.currentIndex].classList.remove(ghost.className)
            squares[ghost.currentIndex].classList.remove("ghost","scared-ghost")
            ghost.currentIndex += direction
            squares[ghost.currentIndex].classList.add(ghost.className)   
            squares[ghost.currentIndex].classList.add("ghost") 
        } else direction = directions[Math.floor(Math.random() * directions.length)]
     
        if (ghost.isScared){
            squares[ghost.currentIndex].classList.add("scared-ghost")
        }

        if (ghost.isScared && squares[ghost.currentIndex].classList.contains("pacman")){
            squares[ghost.currentIndex].classList.remove("ghost", "scared-ghost")
            ghost.currentIndex = ghost.startIndex
            score += 100
            squares[ghost.currentIndex].classList.add("ghost")
        }
        checkgameover()


    },ghost.speed)
}


function checkgameover(){
    if(squares[pacmancurrentindex].classList.contains("ghost")&&
    !squares[pacmancurrentindex].classList.contains("scared-ghost")){
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        document.removeEventListener("keyup",control)
        scoreDisplay.textContent = "You LOSE"
    }
}

function checkwin(){
    if (score === 274){
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        document.removeEventListener("keyup",control)
        scoreDisplay.textContent = "You Win!!"
    }
}