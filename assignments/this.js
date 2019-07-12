/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. A pointer for a window/console of an object
* 2. A reference to a specific incident in a constructor function
* 3. It is explicitly defined in a js call or apply method
* 4. The object bofore a dot calling of a function
*
* write out a code example of each explanation above
*/

// Principle 1
var name = {
    firstName: "Barbara",
    lastName: "Meadors",

    sayName: function(){
        console.log(this.firstName + " " + this.lastName + ` is my best friend.`);
    }
}
 name.sayName();

 var myBestFriendsName =  name.sayName.bind(name);
 myBestFriendsName();

// code example for Window Binding

// Principle 2
const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
    }
};
myObj.sayHello('Tammy');


// code example for Implicit Binding

// Principle 3
function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function () {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}
const tammmy = new CordialPerson ('Chris');
const chris = new CordialPerson ('Tammy');

tammmy.speak()
chris.speak()

function Person(attributes) {
    this.age = attributes.age;
    this.name = attributes.name;
    this.homeTown = attributes.homeTown;
    this.speak = function () {
        return `Hello, my name is ${this.name}`;
    };
}
 const fred = new Person ({
     age: 35,
     name: "Fred",
     homeTown: "Bedrock"
 });
 console.log(fred); console.log(fred.speak());
// code example for New Binding

// Principle 4

var dog = { 
    dogName: "Leonidas",
    nickName: "Sir Fat Fat"
}

function sayDogName(momName) {
    console.log(`${momName}, the name of my dog is ${this.nickName} ${this.dogName} the III.`);
}
sayDogName.apply(dog, ["Mom"]);
sayDogName.call(dog, "Mom");


// code example for Explicit Binding