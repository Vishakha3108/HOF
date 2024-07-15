/* The gole of this program is to genrate a random number after a delay of 3 second, and store the delay in a variable so can be modified. The program display a message every second indicating the time remaining untill the random number is genrated and then output the generated number. */

function genrateRandomNumber() {
    return Math.floor(Math.random() * 100);
}

function genrateRandomNumberWithDelay(delayInSecond) {
    console.log(`Generating a random number after a delay of ${delayInSecond} seconds...`);
    let countdown = 3;
    const countdownInterval = setInterval(() => {
        console.log(`${countdown} seconds remainig...`);
        countdown--;

        if (countdown === 0) {
            clearInterval(countdownInterval);
            const randomNumber = genrateRandomNumber();
            console.log(`Random number generated: ${randomNumber}`);
        }
    } , 1000)
}

genrateRandomNumberWithDelay(3);