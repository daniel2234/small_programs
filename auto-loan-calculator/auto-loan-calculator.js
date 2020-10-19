let readline = require('readline-sync');

function prompt(output) {
  console.log(`===> ${output}`)
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function convertAnnualToMonthlyRate(annualPercentageRate){
  let convertValue = ((annualPercentageRate / 100) / 12);
  return convertValue;
}

function monthlyPayment(loanAmount, monthlyRate, loanDurationInMonths ){
  return loanAmount * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -(loanDurationInMonths))))
}

while(true) {
  prompt('Auto Loan Calculator - Unofficial Mercedes-Benz UI Terminal');
  prompt('1. The loan amount.');
  prompt('2. The annual percentage rate (APR)');
  prompt('3. The loan duration in months.');

  prompt('Please enter the loan amount');
  let loanAmount = readline.question();

  while(invalidNumber(loanAmount)) {
    prompt("Hmm...that does not look like a valid number.");
    loanAmount = readline.question()
  }

  prompt('Please enter the APR(%)');
  let annualPercentageRate = readline.question();

  while(invalidNumber(annualPercentageRate)) {
    prompt("Hmm...that does not look like a valid number.");
    annualPercentageRate = readline.question()
  }

  let monthlyRate = convertAnnualToMonthlyRate(annualPercentageRate);

  prompt('Please enter the loan duration in months');
  let loanDurationInMonths = readline.question();

  while(invalidNumber(annualPercentageRate)) {
    prompt("Hmm...that does not look like a valid number.");
    annualPercentageRate = readline.question()
  }

  let monthlyPaymentAmount = monthlyPayment(loanAmount, monthlyRate, loanDurationInMonths);

  prompt(`Your monthly payment will be: ${monthlyPaymentAmount.toFixed(2)}`);

  prompt('Would you like to try another calculation?');
  let answer = readline.question();
  while (answer !== 'n' && answer !== 'y') {
    prompt('Please enter "y" or "n".')
    answer = readline.question()
  }

  if(answer === 'n') break;
}







