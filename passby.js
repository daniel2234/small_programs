//pass-by-reference
function changeName (name) {
  name = "bob";
}

function anotherFunction() {
  let name = "jim";
  changeName(name);
  console.log(name);
}

anotherFunction();


function capitalize(names) {
  for (let index = 0; index < names.length; index++) {
    names[index] = names[index][0].toUpperCase() + names[index].slice(1);
  }
}

let names = ["chris", "kevin", "naveed"];
capitalize(names);
console.log(names);

function capitalize(names) {
  return names.map(name => name[0].toUpperCase() + name.slice(1));
}

let names = ["chris", "kevin", "naveed"];
capitalize(names);
console.log(names);

function addNames(arr, name) {
  arr.push(name);
}

let names = ["bob", "kim"];
addNames(names, "jim");
console.log(names); //=> ['bob', 'kim', 'jim']


function addName(arr, name) {
  arr = arr.concat([name]);
}

let names = ["bob", "kim"];
addNames(names, "jim");
console.log(names);


//Return Values

function foo(number) {
  return number;
}

let number = 1;
let newNumber = foo(number);

function bar(array) {
  return array;
}

let array = [1,2,3];
let newArray = bar(array);
console.log(array === newArray);

