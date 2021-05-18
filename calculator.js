const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.


const int_num1 = parseInt(prompt("Please enter the first number: "));
const int_num2 = parseInt(prompt("Please enter the second number: "));
const operator = prompt("Please choose the operation (+, -, /, *): ");



if ( !isNaN(int_num1) && !isNaN(int_num2) ) {
     if (operator === '+') 
    console.log(int_num1 + int_num2); 
    else if (operator === '-')
    console.log(int_num1 - int_num2);
    else if (operator === '/')
    console.log(int_num1 / int_num2);
    else if (operator === '*')
    console.log(int_num1 * int_num2);
    else console.log("operation not valid")

} else console.log("invalid number")





// console.log(`Hi, I'm ${int_num2 + 5}.`);
