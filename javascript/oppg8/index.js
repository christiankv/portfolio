

function person (name,age,intrests){
 this.name = name,
 this.age = age,
 this.intrests = intrests
} 

let me = new person("christian",30,"gaming")
    


console.log(me);


let random = me

random.name = "john"
random.age = 20
random.intrests = "fotball"

console.log(random);

