// setTimeout(function(){
//     console.log("i ran");
// },2000)

// const people = [
//     { name: "Jack", hasPet: true },
//     { name: "Jill", hasPet: false },
//     { name: "Alice", hasPet: true },
//     { name: "Bob", hasPet: false },
// ]

// let peoplewhitpets = filterArray(people, function(person){
//     return person.hasPet
// })

// console.log(peoplewhitpets);

// function filterArray(array, callback){
//     const resultingArray = []
//     for (let item of array){
//         const shouldbeincluded = callback(item)
//         if (shouldbeincluded){
//             resultingArray.push(item)
//         }
//     }
//     return resultingArray
// }

// const voters = [
//     {name: "Joe", email: "joe@joe.com", voted: true},
//     {name: "Jane", email: "jane@jane.com", voted: true},
//     {name: "Bo", email: "bo@bo.com", voted: false},
//     {name: "Bane", email: "bane@bane.com", voted: false}
// ]

// let alreadyvoted = voters.filter(voter => voter.voted).map(voter => voter.email)

// console.log(alreadyvoted);
