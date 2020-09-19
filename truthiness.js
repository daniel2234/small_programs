console.log(true)
console.log(false)

function makeLonger(string, longer) {
  if(longer) {
    return string + string;
  } else P
  return string;
}

makeLonger("abc", true)
makeLonger("xyz", false)

function isDigit(char) {
  if(char >= "0" && char <= "9") {
    return true;
  } else {
    return false;
  }
}

isDigit("5");
isDigit("a");

if(value === true) {
  console.log("It's true!")
} else if(value === false) {
  console.log("It's false!")
} else {
  console.log("It's not true or false!")
}

//Expressions and Conditionals
let num = 5;

if(num < 10) {
  console.log("small number")
} else {
  console.log("large number")
}

function isSmall(number) {
  return number < 10;
}

let num = 15

if (isSmall(num)) {
  console.log("small number")
} else {
  console.log("large number")
}


let secondNum = 5;
if (num) {
  console.log("valid number");
} else {
  console.log("error!")
}


console.log(num === true);


let name;
if (name = getNameFromUser()) {
  console.log(`Hi ${name}`)
} else {
  console.log("you must enter your name!")
}


let name = getNameFromUser()
if(name) {
  console.log(`Hi ${name}`)
} else {
  console.log("You must enter your name!")
}


let name = getNameFromUser()
if (name === "") {
  console.log("you must enter your name!")
} else {
  console.log(`Hi ${name}`)
}
