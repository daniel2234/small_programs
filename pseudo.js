// START

// # Given a collection of integers called "numbers"

// SET iterator = 1
// SET savedNumber = value within numbers collection at space 1

// WHILE iterator <= length of numbers
//   SET currentNumber = value within numbers collection at space "iterator"
//   IF currentNumber > savedNumber
//     savedNumber = currentNumber
//   ELSE
//     skip to the next iteration

//   iterator = iterator + 1

// PRINT savedNumber

// END

function findGreatest(numbers) {
  let savedNumber = numbers[0]

  numbers.forEach(num => {
    if(num > savedNumber) {
      savedNumber = num;
    }
  })

  return savedNumber;
}

// a function that returns the sum of two numbers

function sum(num1, num2) {
  return num1 + num2
}


// a function that takes an array of strings, and returns a string that is all those strings concatenated together
function concatenatedArrays(stringArray) {
  let concatenatedString = ''
  for (let i = 0; i < stringArray.length; i++) {
    concatenatedString += stringArray[i]
  }
  return concatenatedString
}

console.log(concatenatedArrays(['a','b','c']))

// a function that takes an array of integers, and returns a new array with every other element

function everyOther(arrayOfIntegers) {
  let everyOtherElementArray = []
  for(let i = 0; i < arrayOfIntegers.length; i+= 2) {
      everyOtherElementArray.push(arrayOfIntegers[i])
  }
  return everyOtherElementArray
}

console.log(everyOther([1,2,3,4,5,6,7,8,9]))
