const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'en';

function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return Number.isNaN(Number(number));
}

function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}

let play = true;

while (play) {
  prompt(messages('welcome', LANGUAGE));

  prompt(messages('first', LANGUAGE));
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(messages('fallback', LANGUAGE));
    number1 = readline.question();
  }

  prompt(messages('welcome', LANGUAGE));
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(messages('fallback', LANGUAGE));
    number2 = readline.question();
  }

  prompt(messages('operation', LANGUAGE));
  let operation = readline.question();

  while (!['1','2','3','4'].includes(operation)) {
    prompt(messages('choose', LANGUAGE));
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

  console.log(`The result is: ${output}`);

  prompt(messages('again', LANGUAGE));
  let answer = readline.question();
  while (!['n', 'y'].includes(answer)) {
    prompt(messages('again', LANGUAGE));
    answer = readline.question();
  }
  if ( answer === 'n') {
    play = false;
  }
}
