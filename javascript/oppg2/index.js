let text = "Dinosaurs are a diverse group of reptiles[note 1] of the clade Dinosauria. They first appeared during the Triassic period, between 243 and 233.23 million years ago, although the exact origin and timing of the evolution of dinosaurs is the subject of active research. They became the dominant terrestrial vertebrates after the Triassic–Jurassic extinction event 201.3 million years ago; their dominance continued throughout the Jurassic and Cretaceous periods. The fossil record shows that birds are modern feathered dinosaurs, having evolved from earlier theropods during the Late Jurassic epoch, and are the only dinosaur lineage to survive the Cretaceous–Paleogene extinction event approximately 66 million years ago. Dinosaurs can therefore be divided into avian dinosaurs, or birds; and the extinct non-avian dinosaurs, which are all dinosaurs other than birds."
const nowords =["if","as","and"]
console.log(text.length > 200)

let a = 0
for(let a=0; a<=3; a++){
    console.log(a)
}

for(a=0; a<10; a++){
    let splitarray = text.split(" ");
    removtext = splitarray.indexOf("if","as","and");

    console.log(splitarray);

    console.log(text);

let newtext = ""
newtext = newtext + text.substring(text.indexOf("and")-5,text.indexOf("and")+8)

newtext = newtext + text.substring(text.indexOf("if")-5, text.indexOf("if")+7)
newtext = newtext + text.substring(text.indexOf("as")-5, text.indexOf("as")+7)

console.log(newtext);
}

text = text.replace("and", "og")
text = text.replace("as", "som")
text = text.replace("if", "hvis")
console.log(text)


let hp = 3
let dicelog = []
let won = 0

while(hp >0){
    rolldice()
    console.log(hp);
    console.log("your rolls", dicelog)
    console.log("you have won: ", won , " times");
}

function rolldice(){
    let yourdice = Math.ceil(Math.random()*6)
    console.log("your roll: ", yourdice);
    dicelog.unshift(yourdice)
    let npcdice = Math.ceil(Math.random()*6)
    console.log(" npc roll: ", npcdice);
    if (yourdice > npcdice){
        won+=1
        return
    }
    else if (yourdice<npcdice){
        hp-=1
        return
    }
}
// // 
let numbers= [1,2,3,4,5,6,7,8,9,10]
let words= ["hi", "hi2", "hi3","hi4", "hi5", "hi6","hi7", "hi8", "hi9","hi10"]

console.log(numbers);
for (i=1; i<9; i++){
    numbers.splice(i,1,22)
}
console.log(numbers);