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

// Build next constructor 
function GameObject(gameObejectAttributes){
  this.createdAt = gameObejectAttributes.createdAt;
  this.dimensions = gameObejectAttributes.dimensions;
}
//methods for this ^ constructor 
GameObject.prototype.destroy = function () {
  return `${this.name} was removed from the game`; 
}
 
//Build next constructor 
function CharacterStats(characterStatsAttribute){
  this.hp = characterStatsAttribute.hp;
  this.name = characterStatsAttribute.name; 
  GameObject.call(this, characterStatsAttribute); 
}
// Inheritance
CharacterStats.prototype = Object.create(GameObject.prototype); 

//methods for this ^ constructor 
CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage`; 
} 

function Humanoid(humanoidAttributes){  
  this.faction = humanoidAttributes.faction; 
  this.weapons = humanoidAttributes.weapons; 
  this.language = humanoidAttributes.language; 
  CharacterStats.call(this,humanoidAttributes);
}

//Humanoid methods under here. 
Humanoid.prototype = Object.create(CharacterStats.prototype); 


Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`; 
}
//greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
//^^ building above. 

//Test you work by uncommenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  hp: 5,
  name: 'Bruce',
  faction: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});


const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  hp: 15,
  name: 'Sir Mustachio',
  faction: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Toungue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 10,
  name: 'Lilith',
  faction: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.hp); // 15
console.log(mage.name); // Bruce
console.log(swordsman.faction); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.



// Stretch task: 
// * Create Villian and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villians different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villian and one a hero and fight it out with methods! 

// new constructor 
function Villian(villianAttributes){
  Humanoid.call(this, villianAttributes); 
  this.uglyStare = villianAttributes.uglyStare;
  this.health = villianAttributes.health;
}
//inherit
Villian.prototype = Object.create(Humanoid.prototype); 

//methods 
Villian.prototype.boomingVoice = function () {
  this.health -= 10;
  return `The villian ${this.name} lets out a booming voice that states you will die because I am ${this.name}`;
}

function Hero (heroAttributes){
  this.goodLooks = heroAttributes.goodlooks;
  this.health = heroAttributes.health;
  
  Humanoid.call(this, heroAttributes);
}

Hero.prototype = Object.create(Humanoid.prototype);  

Hero.prototype.superSmart = function () {
  this.health -=20;
  console.log(this.health); 
  return `The hero ${this.name} is witty and super smart`; 
}
Hero.prototype.stealth = function () {
  this.health -=50; 
  return `The hero ${this.name} is very stealthy`
}
Hero.prototype.windTunnel = function() {
  this.health-= 30; 
  return `The hero creates a wind tunnel using his weapons ${this.weapons} sending ${willard.name} to the underworld... and thereby defeats the villian`; 
}


const rick = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 10,
  name: 'Sir Rick',
  faction: 'Forest Kingdom',
  weapons: [
    'Strength', ' Intense Training', ' Kindness', ' Bright Blue Piercing Eyes', ' Sword of the Elves', ' Shield of Light'
  ],
  language: 'Elvish and Common Tongue',
  goodLooks: 'High',
  health: 100
});

willard = new Villian({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  hp: 10,
  name: 'Willard',
  faction: 'Forest Kingdom',
  weapons: [
    'Severe Halitosis',' Staff of Darkness', ' Magic from the Underworld'
  ],
  language: 'Jibberish',
  uglyStare: 'Wicked Grin',
  health: 100
});

console.log("A new battle is about to begin")
console.log(`The match ${rick.name} vs ${willard.name} has begun.`);
console.log(`The villian has the following weapons ${willard.weapons}`);
console.log(`The hero has the following weapons ${rick.weapons}`); 
console.log(`The villian has the following extra attribute ${willard.uglyStare} look`); 
console.log(`The villian speaks the following language ${willard.language}`);
console.log(`The hero speaks the following language ${rick.language}`);
console.log(willard.boomingVoice());
console.log(`${rick.name} has been reduced, ${rick.name} now has ${willard.health}`);
console.log(rick.superSmart());
console.log(`${willard.name} has been reduced, ${willard.name} now has ${willard.health}`);
console.log(rick.stealth());
console.log(`${willard.name} has been reduced, ${willard.name} now has ${rick.health}`) ;
console.log(rick.windTunnel()); 
console.log(`${willard.name} has been reduced, ${willard.name} now has ${rick.health}`);
console.log(`${rick.name} WINS GETS THE PRETTY LADY!`); 