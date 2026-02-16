const playerGuess = 6
const correctAnswer = 6

/*
Challenge 
1. Refactor the if else statement to use a ternary operator.
*/

let message = ''
// if (playerGuess === correctAnswer) {
//     message = 'Correct!'
// }
// else {
//     message = 'Wrong!'
// }
message = playerGuess === correctAnswer ? 'Correct!' : 'Wrong!';


console.log(message)