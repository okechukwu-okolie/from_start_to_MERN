//types of variables initiators
var name = 'john'
console.log(name);// affected by hoisting and no longer in use

let age = 30
console.log(age);// is not affected by hoisting and is run at the point in the code where it is used
age = 35;// the value of the variable can be changed because javascript is a dynamically typed language

const pie = 3.142;
console.log(pie);// it is used when the variable is not expected to change. this will however not change irespective of the dynamic nature of javascript because it is meant to be constant.

// DATA TYPES

//PRIMITIVE DATA TYPES
//string
let school = 'the honeybee school'

//number
let count = 1
//undefined
let setColour = undefined;

//boolean
let isQuote = false;
//null
let setSize = null


//REFERENCE DATA TYPES
//object
let person = {
    name: 'John',
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

//array

let numbers = [1, 2, 3, 4, 5]

//functions

function greet() {
    console.log('Hello');
}

greet()



