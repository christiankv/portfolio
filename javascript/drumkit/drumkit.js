const sounds = [
  openhat = new Audio("sound/openhat.wav"),
  tom = new Audio("sound/tom.wav"),
  clap = new Audio("sound/clap.wav"),
  hihat = new Audio("sound/hihat.wav"),
  snare = new Audio("sound/snare.wav"),
  tink = new Audio("sound/tink.wav"),
  kick = new Audio("sound/kick.wav"),
  ride = new Audio("sound/ride.wav")  
]
const body = document.querySelector("body")
const container = document.querySelector(".container")


body.addEventListener("keydown", (e)=> playsound(e))
body.addEventListener("touchstart",(e)=> playsound(e))
body.addEventListener("mousedown",(e) => playsound(e))


body.addEventListener("keyup", click)
body.addEventListener("mouseup",click)
body.addEventListener("touchend",click)

function click(){
document.getElementById("tom").style.boxShadow = "black 10px 20px 5px"
document.getElementById("openhat").style.boxShadow = "black 10px 20px 5px"
document.getElementById("clap").style.boxShadow = "black 10px 20px 5px"
document.getElementById("hihat").style.boxShadow = "black 10px 20px 5px"
document.getElementById("snare").style.boxShadow = "black 10px 20px 5px"
document.getElementById("tink").style.boxShadow = "black 10px 20px 5px"
document.getElementById("kick").style.boxShadow = "black 10px 20px 5px"
document.getElementById("ride").style.boxShadow = "black 10px 20px 5px"
}
function playsound(e){
    {
        for (sound in sounds){
            sounds[sound].pause()
            sounds[sound].currentTime = 0;
        }
       let keypress = e.code
        if (keypress === "KeyA" | e.target.id == "openhat"){
            openhat.play()
            document.getElementById("openhat").style.boxShadow = "gray 10px 20px 5px"

        } else if (keypress === "KeyS" | e.target.id == "tom"){
            document.getElementById("tom").style.boxShadow = "gray 10px 20px 5px"
            tom.play()

        }else if (keypress === "KeyD" | e.target.id == "clap"){
            document.getElementById("clap").style.boxShadow = "gray 10px 20px 5px"
            clap.play()
        }else if (keypress === "KeyW" | e.target.id == "hihat"){
            document.getElementById("hihat").style.boxShadow = "gray 10px 20px 5px"
            hihat.play()
        }else if (keypress === "KeyQ" | e.target.id == "snare"){
            document.getElementById("snare").style.boxShadow = "gray 10px 20px 5px"
            snare.play()
        }else if (keypress === "KeyE" | e.target.id == "tink"){
            document.getElementById("tink").style.boxShadow = "gray 10px 20px 5px"
            tink.play()
        }else if (keypress === "Space" | e.target.id == "kick"){
            document.getElementById("kick").style.boxShadow = "gray 10px 20px 5px"
            kick.play()
        }else if (keypress === "KeyR" | e.target.id == "ride"){
            document.getElementById("ride").style.boxShadow = "gray 10px 20px 5px"
            ride.play()
        }
    
    }
}