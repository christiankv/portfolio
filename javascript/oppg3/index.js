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



// console.log(total());