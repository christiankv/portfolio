//variablezone
let isloaded = true

//codezone
if (isloaded == true)
    console.log("'Your data is loaded and ready to be used");
else
    console.log("Your data needs more time to load or another error occured");



// variable zone
let age =18

//codezone
if (age >=20){
    if(age <50){
        console.log("perfect");
    }
    else{
    console.log("to old");
    }
}
else if (age <20){
    console.log("to young");
}

//variablezone
//name variable med user input
let name = window.prompt("your name")

//codezone
//enkel if setting med bruk av "null" for det er det user inputen returnerer hvis du ikke skriver noe
if (name == null){
    window.alert("no name")
}
else{
    console.log(name, "acceted");
}

//variablezone
let worldisending = true
let year = 2021

//scriptzone
if (worldisending==true){
    if (year==2021){
    console.log("OMG it's all over!");
    }
    else if(year>2021){
        console.log("We still have some time to save it!");
    }
}
else {
    console.log( "Oh... OK... I think we're good");
}

// coffe logic
// variablezone
let coffeempty = true
let needscoffee = false

// if you dont have coffe in ur cup fill it wheter u need to or not since ul soon need more
if (coffeempty== true & needscoffee ==true | needscoffee == false ){
    console.log("fill your cup");
}
// aslong as you have coffe drink whenever u feel the need
else if (coffeempty == false & needscoffee == true) {
    console.log("drink coffee");
}
    else {
        console.log("put down your cup");
}