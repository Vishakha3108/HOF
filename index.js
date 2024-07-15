/*The problem is to creat a program that uses the setTimeOut() function to revers a given string after a delay of 2 second before reversing the string. The reversed string should then be printed as output. */

let input = "PW Skills";

function reverseString(inputString) {
    return inputString.split("").reverse().join("");
}

function reverseWithDelay(inputString) {
    setTimeout(function (){
        let reversed = reverseString(inputString);
        console.log("Reversed String: " + reversed);
} , 2000)
}

reverseWithDelay(input);