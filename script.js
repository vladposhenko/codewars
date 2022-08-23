// TASK: Create a function that takes in a list of button inputs and returns the final state
// OUTPUT: likeOrDislike([Dislike]) => Dislike
// likeOrDislike([Like,Like]) => Nothing
// likeOrDislike([Dislike,Like]) => Like
// likeOrDislike([Like,Dislike,Dislike]) => Nothing


function likeOrDislike(buttons) {
    let state = 'Nothing';
  
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i] === state) {
        state = 'Nothing'
      } else {
        state = buttons[i]
      }
    }
  
    return state
}

let Like = "Like"
let Dislike = "Dislike"


console.log(likeOrDislike([Like,Dislike,Dislike]));
