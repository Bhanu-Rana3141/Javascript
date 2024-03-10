// Hoisting : is a process of moving function declaration to the top of file and it is done automatically by JS Engine, when the execution starts
/* Function Declaration - function can be called top or bottom of function declaration
function run() {
    console.log('running');
}
run();
*/


/* Function Assignment - assigning function in a variable called function assignment, and hoisting is absent here

// 1. Named function assignment
let stand = function walk() {
    console.log('walking');
}
stand();

let jump = stand;
jump();

// 2. Anonymous function assignment
let stand2 = function() {
    console.log('Are you walking ?');
}
stand2();
*/



/* Argument object - special type of object - all input parameters will be stored in it

function sum(a, b) {
    console.log(arguments);
    let total = 0;
    for(let value of arguments) {
        total += value;
    }
    return total;
}

// console.log(sum(2)); // NaN
// console.log(sum()); // NaN
// console.log(sum(2, 3, 4, 5));

console.log(sum(1, 2, 3, 4, 5));
*/



/* Rest Operator (replacement of arguments) - all input parameters will be stored in Array

// Rest Parameter should be last parameter
function sum(num, ...args) { // here 1 will be stored in num rest all inputs in Array
    console.log(args);
}

console.log(sum(1, 2, 3, 4, 5));
*/



/* Default Parameters - if value is passed during function call, then that value will be considered otherwise default value will be considered
function interest(p, r=10, t=5) {
    return (p*r*t)/100;
}
console.log(interest(300, undefined, 5));
*/



/*
// getter - setter - without using getter we can get value, but setter is used to change value
// Getter - access properties
// Setter - change properties

let person = {
    firstName : 'Bhanu',
    lastName : 'Rana',

    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },

    set fullName(value) {
        if(typeof(value) !== String) {
            throw new Error('You have not entered a number');
        }
        let parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'Rahul Kumar'; // setter is called and this is not a function because here function keyword is not used
// console.log(person.fullName)


// Read Only function - value can't be changed, so setter will be used

// console.log(typeof fullName) // type - function
// console.log(typeof(fullName())); // type - string



// ERROR HANDLING - try & catch

// if any part of code has probability to give error store that in try block, and if it contains error, the error will be sent to catch block

try {
    person.fullName = 1; // setter will be called 
}
catch(e) {
    alert(e);
}
*/