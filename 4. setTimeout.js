function logAnswer(answer,points) {
    console.log(`The answer is ${answer} of course! If you got that right, giver yourself ${points} points.`)
}

console.log('What is the capital of Peru?')

const timeOut = setTimeout(logAnswer,3000, 'Lima', 10);
/*
Challenge:
    1. After a 3 second delay, call the 'logAnswer' function.
    2. Make sure 'logAnswer' has all the info it needs. 
       The answer is 'Lima' and it's 10 points for getting it right. 
*/

// Lets use the cleartimeout method 

document.getElementById('stop').addEventListener('click', function(){

    clearTimeout(timeOut)

    console.log("Time Out Cleared");
});

