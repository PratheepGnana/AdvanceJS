function startCountdown() {
    let secondsRemaining = 3
    
    const shutdownTimer = setInterval(function() {
        console.log(`Your device will shut down in ${secondsRemaining} seconds.`);
        secondsRemaining--;
        if (secondsRemaining < 0) {
            clearInterval(shutdownTimer);
            console.log("Your device is shutting down");
        }
    }, 1000);

    
/*
Challenge:
1. Every 1000 milliseconds, log out: 
    `Your device will shut down in ${secondsRemaining} seconds`.
    Decrement 'secondsRemaining'.
2. When 'secondsRemaining' hits zero, you should log out 
    `Your device is shutting down`. 
    At this point, the setInterval should be cleared. What method 
    can you use to do that? (We used clearTimeout to cancel setTimeout.)
*/
}
startCountdown()


// // function tick() {
// //   console.log("Tick:", new Date().toLocaleTimeString())
// // }

// // setInterval(tick, 1000)


// const timeOut1 = setTimeout(function(){},3000);
// console.log(timeOut1) // this will log the id of the timeout, which is a number.