let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
};

let superChimpTwo = {	
   name:"Brad",	
   species:"Chimpanzee",
   mass:11,
   age:6,
   astronautID: 3,
}
let dog = {
   name:"Leroy",
   species:"Beagle",
   mass:14,
   age:5,
   astronautID: 4,
}

let lilBug = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
}

let crew = [superChimpOne, superChimpTwo, salamander, dog, lilBug]

for (let i=0; i<crew.length; i++) {
   crew[i]["move"] = Math.round(Math.random()*10)
}

function crewReports(animal){
   console.log(`${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`)
}
crewReports(lilBug);

function fitnessTest(array) {
   let raceResults = [];
   let animal;
   for (let i = 0; i < array.length; i++) {
      animal = array[i];
      raceResults.push(movesCounter(animal));
      } return raceResults
}
function movesCounter (animal) {
   raceProgress = animal.move
   let moves = 1;
   while (raceProgress < 20) { 
      raceProgress += raceProgress;
      moves++;
   } return (`${animal.name} took ${moves} turns to take 20 steps`);
}
   for (i = 0; i < fitnessTest(crew).length; i++) {
      console.log(fitnessTest(crew)[i])
   }
// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!