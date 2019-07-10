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
function sayName(name) {
    console.log(this);
    return name;
}
sayName('Tammy Fisher')

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

// code example for New Binding

// Principle 4
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


// code example for Explicit Binding