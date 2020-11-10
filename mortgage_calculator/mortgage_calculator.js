const readline = require('readline-sync');
const MESSAGES = require('./mortgage_calculator.json');


function prompt(message) {
  console.log(`=> ${message}`)
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function validMonths(number) {
  return (number >= 1 && number <= 12) ? false : true;
}

function annualInterestRateConvertedToMonthlyRate(annualPercentage) {
    return (annualPercentage / 100) / 12
}

function monthlyPayment(loanAmount, monthlyInterestRate, loanDuration) {
  let monthlyPayment = Number(loanAmount) * (monthlyInterestRate /
                      (1 - Math.pow((1 + monthlyInterestRate),(-loanDuration))));
  return monthlyPayment;
}



prompt(MESSAGES['message'])

// //loan amount
prompt("What is the loan amount?");
let loanAmount = readline.question();

while (invalidNumber(loanAmount)) {
  prompt(MESSAGES['valid']);
  loanAmount = readline.question();
}

//annual percentage (APR)
//need to fixed Annual Percentage Rate
prompt("What is the Annual Percentage Rate?");
let annualPercentage = readline.question();

while (invalidNumber(annualPercentage)) {
  prompt(MESSAGES['valid']);
  annualPercentage = readline.question();
}

let monthlyInterestRate = annualInterestRateConvertedToMonthlyRate(annualPercentage);

// loan duration
prompt("What is the loan duration in months?")
let loanDuration = readline.question()

while(validMonths(loanDuration)) {
  prompt("Interesting....the chooses are (1-12)")
  loanDuration = readline.question()
}

let totalAmount = monthlyPayment(loanAmount, monthlyInterestRate, loanDuration);

prompt(`Total monthly payment ${totalAmount.toFixed(2)}`)

