//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let fuel = ""
let astronautsAboard = ""
let altitude = 0



/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
  const input = require('readline-sync');

  fuel = input.question("What's the starting fuel level? (must be between 5k and 30k) ");
Number(fuel);
while (fuel > 30000 || fuel < 5000) {
  console.log("Invalid fuel amount: Try again, doufus.");
  fuel = input.question("What's the starting fuel level? (must be between 5k and 30k) ");
  Number(fuel);
};
console.log("That'll do. Let's see how many we'll have aboard.")



//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  astronautsAboard = input.question("How many 'nauts we got?? ");
  Number(astronautsAboard);
while (astronautsAboard > 7 || astronautsAboard < 1) {
  console.log("WOOOAHH that's not right. Keep it under 7. (and more than 0, obvs)");
  astronautsAboard = input.question("How many 'nauts we got?? ");
  Number(astronautsAboard);
}
  console.log("Great! Let's launch!")
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while(fuel >= (100 * astronautsAboard)) {
  fuel = fuel - astronautsAboard * 100;
  altitude = altitude + 50;
  console.log("Fuel level at " + fuel + ", and altitude at " + altitude + " km" )
};
console.log("Not enough fuel to go any higher!");


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
console.log ("The shuttle gained an altitude of " + altitude + " km");
if (altitude < 2000) {
  console.log("Failed to reach orbit :(((((")
} else {
  console.log("Orbit achieved!!")
}