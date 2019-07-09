/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance heirarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all inherit from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properites and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions
  * destroy() // prototype method -> returns the string 'Object was removed from the game.'
*/

/*
  === CharacterStats ===
  * hp
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid ===
  * faction
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
/*
  * Inheritance chain: Humanoid -> CharacterStats -> GameObject
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/
let func1 = function(param1) {
  return param1
}

// Build next constructor 
function GameObject(attributes){
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}
//methods for this ^ constructor 
GameObject.prototype.destroy = function () {
  return `${this.name} was removed from the game`; 
}

 
//Build next constructor 
function CharacterStats(attributes){
  this.hp = attributes.hp;
  this.name = attributes.name; 
  GameObject.call(this, attributes); 
}
// Inheritance
CharacterStats.prototype = Object.create(GameObject.prototype); 

//methods for this ^ constructor 
CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage`; 
} 

//Test you work by uncommenting these 3 objects and the list of console logs below:

function Humanoid(attributes){  
  this.faction = attributes.faction; 
  this.weapons = attributes.weapons; 
  this.language = attributes.language; 
  CharacterStats.call(this,attributes);
}

Humanoid.prototype = Object.create(CharacterStats.prototype); 
//Humanoid methods under here. 
//greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
//^^ building above. 
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`; 
}

const witch = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 6,
  },
  hp: 12,
  name: 'Sabrina',
  faction: 'New York',
  weapons: [
    'Teenage Witch',
    'Nose Twitch',
    'Wand of Wanda'
  ],
  language: 'English',
  Health: 100
});


const magicCat = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 6,
    width: 2,
    height: 2,
  },
  hp: 18,
  name: 'Salem',
  faction: 'New York',
  weapons: [
    'Nose Twitch',
    'Tail Gestures',
    'Is in the form of a black cat'
  ],
  language: 'English',
  Health: 100
});

const boyFriend = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 10,
  },
  hp: 8,
  name: 'Josh',
  faction: 'New York',
  weapons: [
    'Intelligence',
    'Wittiness'
  ],
  language: 'English',
  Health: 100
});
// new constructor 
function Villian(attributes){
  Humanoid.call(this,attributes); 
  this.blackHair = attributes.blackHair;
  this.severeHalitosis = attributes.severeHalitosis;
  this.uglyStare = attributes.uglyStare;
  this.Health = attributes.Health;
}
//inherit
Villian.prototype = Object.create(Humanoid.prototype); 

//methods 
Villian.prototype.evilKackle = function () {
  this.Health -=10;
  return `The villian ${this.name} lets out an shrill kackle and says you will fail because I am ${this.name}`;
}

function Hero (attributes){
  this.blondeHair = attributes.blondeHair;
  this.greenEyes = attributes.greenEyes;
  this.smarts = attributes.smaRts;
  this.Health = attributes.Health;

  Humanoid.call(this, attributes);
}

Hero.prototype = Object.create(Humanoid.prototype);  

Hero.prototype.studyMagic = function () {
  this.Health -=20  
  return `The hero ${this.name} studies her spellbook and finds a spell to defeat the villian.`; 
}

Hero.prototype.scoldsNeice = function () {
  this.Health -=50; 
  return `The hero ${this.name} scolds her neice ${witch.name} because she has to rescue her.`
}
Hero.prototype.flawlessVictory = function() {
  this.Health -=30; 
  return `The hero uses the newly discovered spell using her weapons ${this.weapons}... and defeats the villian`; 
}
Hero.prototype.reassuresNeice = function () {
  this.Health -=50; 
  return `The hero ${this.name} reassures her neice ${witch.name} letting her know that she will save her.`
}


const auntZelda = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 10,
  },
  hp: 25,
  name: 'Aunt Zelda',
  faction: 'New York',
  weapons: [
    'Nose Twitch', 'Wand of her Mother', 'teaches Sabrina', 'supporter of Sabrina', 'Tries to do what is best for Sabrina', 'tries to keep Sabrina from using magic' 
  ],
  language: 'English',
  Hero: 'High',
  Health: 100
});

villian = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 8,
  },
  hp: 20,
  name: 'Willard',
  faction: 'Land of Magic',
  weapons: [
    'doubt','low confidence', 'unintelligent', 
  ],
  language: 'British',
  severeHalitosis: 'Extremely Nasty',
  Health: 100
});


console.log(witch.createdAt); 
console.log(magicCat.dimensions); 
console.log(boyFriend.hp); 
console.log(witch.name); 
console.log(boyFriend.faction);
console.log(witch.weapons); 
console.log(magicCat.language); 
console.log(magicCat.greet()); 
console.log(witch.takeDamage()); 
console.log(boyFriend.destroy()); 


console.log("A new battle is about to begin")
console.log(`The match ${witch.name} vs ${villian.name} has begun.`);
console.log(`The villian has the following weapons ${villian.weapons}`);
console.log(`The hero has the following weapons ${witch.weapons}`); 
console.log(`The villian has the following extra attribute ${villian.severeHalitosis} breath`); 
console.log(`The villian speaks the following language ${villian.language}`);
console.log(`The hero speaks the following language ${witch.language}`);
console.log(villian.evilKackle());
console.log(`${witch.name} has been reduced, ${witch.name} now has ${villian.Health}`);
console.log(auntZelda.studyMagic());
console.log(`${villian.name} has been reduced, ${villian.name} now has ${villian.Health}`);
console.log(auntZelda.scoldsNeice());
console.log(`${villian.name} has been reduced, ${villian.name} now has ${villian.Health}`) ;
console.log(auntZelda.flawlessVictory()); 
console.log(`${villian.name} has been reduced, ${villian.name} now has ${villian.Health}`);
console.log(`${auntZelda.name} WINS THE FIGHT AND SAVES ${witch.name}'s BOYFRIEND SO THEY CAN GO TO SCHOOL TOMORROW!`); 

// Stretch task: 
// * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villian and one a hero and fight it out with methods!

const auntHilda = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 9,
  },
  hp: 15,
  name: 'Aunt Hilda',
  faction: 'New York',
  weapons: [
    'Nose Twitch', 'Wand of her Mother', 'influences Sabrina', 'supporter of Sabrina', 'Tries to do what is best for herself rather than for Sabrina', 'tries encourage Sabrina from using magic', 'ultimately loves Sabrina' 
  ],
  language: 'English',
  Hero: 'High',
  Health: 100
});
const womanVillian = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 9,
  },
  hp: 10,
  name: 'Morgan',
  faction: 'Land of Magic',
  weapons: [
    'overly confident','too egotistical'
  ],
  language: 'English',
  uglyStare: 'Ugly Twisted',
  Health: 100,
});
console.log("A new battle is about to begin")
console.log(`The match ${witch.name} vs ${womanVillian.name} has begun.`);
console.log(`The villian has the following weapons ${womanVillian.weapons}`);
console.log(`The hero has the following weapons ${witch.weapons}`); 
console.log(`The villian has the following extra attribute ${womanVillian.uglyStare} look`);  
console.log(`The villian speaks the following language ${womanVillian.language}`);
console.log(`The hero speaks the following language ${witch.language}`);
console.log(womanVillian.evilKackle());
console.log(`${witch.name} has been reduced, ${witch.name} now has ${womanVillian.Health}`);
console.log(auntHilda.studyMagic());
console.log(`${womanVillian.name} has been reduced, ${womanVillian.name} now has ${womanVillian.Health}`);
console.log(auntHilda.reassuresNeice());
console.log(`${womanVillian.name} has been reduced, ${womanVillian.name} now has ${womanVillian.Health}`) ;
console.log(auntHilda.flawlessVictory()); 
console.log(`${womanVillian.name} has been reduced, ${womanVillian.Health} now has ${womanVillian.Health}`);
console.log(`${auntHilda.name} WINS THE FIGHT AND SAVES ${witch.name}'s BOYFRIEND SO THEY CAN GO TO SCHOOL TOMORROW!`); 