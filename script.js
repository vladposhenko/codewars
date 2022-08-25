// TASK: Create a function that takes in a list of button inputs and returns the final state
// OUTPUT: likeOrDislike([Dislike]) => Dislike
// likeOrDislike([Like,Like]) => Nothing
// likeOrDislike([Dislike,Like]) => Like
// likeOrDislike([Like,Dislike,Dislike]) => Nothing

// TASK 1
// function likeOrDislike(buttons) {
//     let state = 'Nothing';
  
//     for (let i = 0; i < buttons.length; i++) {
//       if (buttons[i] === state) {
//         state = 'Nothing'
//       } else {
//         state = buttons[i]
//       }
//     }
  
//     return state
// }

// let Like = "Like"
// let Dislike = "Dislike"


// console.log(likeOrDislike([Like,Dislike,Dislike]));


// TASK 2

// TASK: Given a Divisor and a Bound , Find the largest integer N , Such That ,
// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0

// MY VARIANT
// function maxMultiple(divisor, bound){
//     while(bound != divisor) {
//         if(bound % divisor === 0) return bound
//         bound--
//     }
// }

// BEST VARIANT

// function maxMultiple(divisor, bound) {
//     return Math.floor(bound / divisor) * divisor;
// }

// console.log(maxMultiple(37,200));


// TASK 3

// Task: An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// OUTPUT: 
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// MY VARIANT

function isIsogram(str){
    let arr = str.toLowerCase().split("")
    let result = []
    arr.forEach((word) => {
        if(result.indexOf(word) === -1) result.push(word)
    })
    return arr.length > result.length ? false : true
}


console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("aba")); // false
console.log(isIsogram("moOse")); // false
console.log(isIsogram("isIsogram")); // false

// BEST VARIANT 

// function isIsogram(str){
//     return new Set(str.toUpperCase()).size == str.length;
// }
