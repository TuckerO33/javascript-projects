const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let answer = input.question ("How many letters do you want to move?");
if (answer > 8) { 
    answer = 3
    console.log("Too many letters! Setting to 3.")
} else { 
    answer 

}
let pigArr = str.split("");
console.log (pigArr)
pigArr.splice (answer);
console.log (pigArr);
let backf = str.split ("");
backf.splice (0,answer);
console.log (backf)
let pigFinal = backf.concat (pigArr);
console.log (pigFinal);
let pigFinalStr = pigFinal.join ("");
console.log (pigFinalStr);
//Use a template  to print the original and modified string in a descriptive phrase.
console.log(In pig latin, "${str}" will be "${pigFinalStr}");
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
// if ( > 8) {
//     answer
// } else { 
//     answer 

// }