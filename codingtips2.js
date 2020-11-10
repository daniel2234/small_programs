const readline = require('readline-sync');

console.log('Enter your name');
let name  = readline.question();

while(name.trim() === ''){
  console.log("That's an invalid name. Try again");
  name = readline.question();
}

console.log(`Welcome ${name}!`);
console.log(`What would you like to do?`);


function total(num1, num2){
  console.log(num1 + num2);
}

function append(targerArr, valueToAppend) {
  targerArr.push(valueToAppend);
  return targerArr;
}

function total(num1, num2) {
  return num1 + num2;
}

//name functions appropriately
//dont write a function thatt does more than one of these things
// mutate a value
// output something
// return a meaningful value

//dont mutate a collection while iterating through it.
let words = ['scooby', 'do', 'on', 'channel', 'two'];

// words.forEach(word => {
//   console.log(word);
// })

words.forEach(word => {
  console.log(word);
  words.shift();
})

console.log(words);


//good practice
let pairs = [[6, 'scooby'], [2, 'do'], [2, 'on'], [3, 'two']];

pairs.forEach(pair => {
  pair.shift();
})

console.log(pairs);

//variable shadowing
let name = 'johnson';

['kim', 'joe', 'sam'].forEach(name => {
  console.log(`${name} ${name}`);
});


let name = 'johnson';

['kim', 'joe', 'sam'].forEach(fname => {
  name = fname;
})

//Don't use assignment in a conditional

let someVariable = getAValueFromSomewhere();

if(someVariable) {
  console.log(someVariable);
}

let numbers = [1,2,3,4,5];
let num;

while(num = numbers.shift()){
  console.log(num);
}

let names = ['kim', 'joe', 'sam']
names.forEach(_ => {
  console.log('Got a name!');
})

names.forEach((_, index) => {
  console.log(`${index + 1}: got a name!`);
});



