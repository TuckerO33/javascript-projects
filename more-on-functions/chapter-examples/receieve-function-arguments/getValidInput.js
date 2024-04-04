const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
// let validator = function (userInput) {
//   if (userInput[0] !== "a") {
//     console.log("ERROR :0, it doesn't start with 'a'");
//   } else {
//     return true
//   };
// }
// console.log(getValidInput("Create a password that starts with 'a' ",validator))

// TODO 2: write a validator 
// that ensures input is a vowel
let validator = function (userInput) {
  let vowels = ["a","e","i","o","u"];
  let valid = false
  let checker = userInput.toLowerCase().slice(0,1);

  for (let i = 0; i < vowels.length; i++) {
    valid = checker.includes(vowels[i]);
      if (valid) {
      break;
    }  
  }
  if (!valid) {
    console.log("ERROR :0, it doesn't start with a vowel");
  } else {
    return true
  };
}
console.log(getValidInput("Create a password that starts with a vowel ",validator))
// Be sure to test your code!
