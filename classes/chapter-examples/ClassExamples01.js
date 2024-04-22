//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass, cupSize){
     this.name = name;
     this.age = age;
     this.mass = mass;
     this.cupSize = cupSize
   }
}

let fox = new Astronaut('Fox', 7, 12, "A");
let tittisaurus = new Astronaut("Tittisaurus", 112, 3000,"DDDDDDDDD")

console.log(fox);
console.log(fox.age, fox.color);

fox.age = 9;
fox.color = 'red';

console.log(fox);
console.log(fox.age, fox.color);

//Try modifying or adding properties below.