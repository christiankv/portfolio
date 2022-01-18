let par = [2,4,6,8,10,12,14,16,16,18,20]
let odd = [1,3,5,7,9,11,13,15,17,19]

let number = []

number= par.concat(odd)
console.log(number);
number2 = number.slice(8,13)
console.log(number2);
console.log(number.indexOf(4))

let positivenr =number.some(positive)
console.log(positivenr);
function positive(value, index, array) {
    return value >0;
}

let newnumber =number.map(n=>n*2)
console.log(newnumber);

let numbersfinish= number.concat(newnumber.concat(number2))
console.log(numbersfinish.length);

value =numbersfinish.reduce(sum,0)
console.log(value);
function sum(total,numbersfinish){
    return total + numbersfinish
}





let bil = ["panser","hjul","ratt", "gir","førersete", "passasje sete", "bagasjerom","dør","motor","bensintank"]

bil.unshift("person")

console.log(bil);

bil.shift()
bil.splice(4,0,bil.shift())
console.log(bil);

bil.splice(7,1)

console.log(bil);

bil.push("kråke")
console.log(bil);
bil.pop()
console.log(bil);

let pi = Math.PI
let euler = Math.E


console.log(pi);
console.log(euler);

const thisispi = "  and this is PI: "
const thisisE = "This is Euler's number: "

pi = pi.toPrecision(6)
euler=euler.toPrecision(4)
console.log(pi);
console.log(euler);



function add (a,b){
    return parseFloat(a)+ parseFloat(b)
}

console.log(add(pi,euler));

console.log (thisisE,+euler+thisispi+pi)
