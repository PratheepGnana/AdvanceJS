const playerGuess = 3;
const correctAnswer = 6;

/*
Challenge
1. Now improve the functionality of this code by 
   letting the player know if their guess was too high, 
   too low, or exactly right.
*/

const message =
  playerGuess > 8
    ? "Too high!"
    : playerGuess < 4
      ? "Too Low!"
      : "correect answer";

console.log(message);
