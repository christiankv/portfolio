
// // random script så repitere seg åså fortelle det ein historie om verdens mes uheldige person 
// //variable zone
// let isalive = false
// let isdead= true

// //code zone
// //"for"får scripte til å repitere sålenge ressurectioncouten er lavere en 10 så scriptet legger til 0.5 
// // hver gang det kjører si det må kjøre 2ganger for at syklusen skal ha tat en runde.
// for(let ressurectioncount = 0; ressurectioncount <=10; ressurectioncount = ressurectioncount+0.5){
//     if (isalive == true){
//         isalive= false
//         isdead= true
//         console.log("died");
//     }
//     else{
//         isdead =false
//         isalive= true
//         console.log("got ressurected");
//         console.log(ressurectioncount);
//     }
// }

//et script så sko fortella meg om det va påtide å ta meg ein røyk endå 
let needasmoke = Boolean(Math.round(Math.random()));
// ein timer så ska kjøra functionen om og om igjen
window.setInterval(smoketimer,300000);
// ein function så det ser ut til at funke men who knows. 
function smoketimer()       
{
// sjekk om den randome variabelen needasmoke e true eller false før an så fortelle meg om eg ska ut eller ikke.
if (needasmoke== true){
    console.log("get out now");
}
else {
    console.log("not not yet");
}}
