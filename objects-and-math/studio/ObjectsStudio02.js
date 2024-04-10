

// Code your orbitCircumference function here:
function orbitCircumference(radius) {
  return 2*Math.PI*radius;
}

// Code your missionDuration function here:
function missionDuration(numberOfOrbits = 3, orbitRadius =2000, orbitSpeed =28000) { 
  let distance = numberOfOrbits*orbitCircumference(orbitRadius);
  let missionTime = Math.round((distance/orbitSpeed)*100)/100;
  console.log(`The mission will travel ${distance}km around the planet, and it will take ${missionTime}hrs`)
  return missionTime
}
// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(array){
  let randSelect= Math.floor(Math.random()*array.length);
  randSelect=array[randSelect];
  return randSelect;
}

let idNumbers = [291, 414, 503, 599, 796, 890];

let randArr =[];
while(randArr.length<3){
  //call randSelect? 
  let randCrewMember=selectRandomEntry(idNumbers);
  if(!randArr.includes(randCrewMember)){
    randArr.push(randCrewMember);
} else {
  console.log("crew member already in mission.")
}
}
console.log(randArr);
// Code your buildCrewArray function here:
function buildCrewArray(idArray,candArr){
  let crewArr=[];
  for(let i=0;i<candArr.length;i++){
    //loops over candidate array
    if(idArray.includes(candArr[i].astronautID)){
      crewArr.push(candArr[i]);
    }
  }
  return crewArr;
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate, orbitRadius = 2000, orbitSpeed = 28000) {
  let spacewalkHours = missionDuration(3, orbitRadius, orbitSpeed);
  let oxygenAmount = Math.round(candidate.o2Used(spacewalkHours)*1000)/1000;
  return `${candidate.name} will perform the spacewalk, which will last ${spacewalkHours} hours and require ${oxygenAmount} kg of oxygen`
}

function getMinOxygen (crew) {
  let candidate = crew[0];
  let o2Used = crew[0].o2Used(1)
  for (let i = 0; i < crew.length; i++) {
    if (crew[i].o2Used(1) < o2Used) {
      candidate = crew[i];
      o2Used = crew[i].o2Used(1);
    }
  } 
  return candidate
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
 
 console.log(oxygenExpended(selectRandomEntry(crew)))
 console.log(getMinOxygen(animals))