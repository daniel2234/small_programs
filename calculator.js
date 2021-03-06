const readline = require('readline-sync');
// const messages = require('./calculator_messages.json');
//Asking the user for another calculation
//Currently, our calculator asks the user for two numbers and an operation and then exits after displaying the result.
// Wouldn't it be nice if we could ask the user if they wanted to perform another calculation and start a new calculation when they respond with yes?



function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}


function playAgain(answer) {
  if (answer == 'yes' || 'y') {
    return true
  } else {
    return false
  }
}

prompt("Welcome to Calculator!");


prompt("What's the first number?");
let number1 = readline.question();


while (invalidNumber(number1)) {
  prompt("Hmm... that doesn't look like a valid number");
  number1 = readline.question();
}

prompt("What's the second number?");
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("Hmm. that doesn't look like a valid number.");
  number2 = readline.question();
}

prompt('What operation would you like to perform?'
             + '\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

while (!['1','2','3','4'].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4');
  operation = readline.question();
}

let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
  }
prompt(`The result is: ${output}`);
