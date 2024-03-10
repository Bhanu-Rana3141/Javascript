// Objects are real world entity which have some properties, methods and they have some behaviour/functionality

/* FACTORY FUNCTION

function createRectangle(length, breadth) {

    return rectangle = {
        length,
        breadth,

        draw() {
            console.log("Drawing rectangle");
        }
    };
    // return rectangle;
}

let rectangleObj1 = createRectangle(5, 7);
let rectangleObj2 = createRectangle(1, 2);

*/


/* CONSTRUCTOR FUNCTION

function Rectangle(length, breadth) {

    this. length = length;
    this.breadth = breadth;
    this.draw = function() {
        console.log('drawing');
    }
}

let rectangleObject = new Rectangle(3, 4);

// EVERY OBJECT HAS A CONSTRUCTOR , function is also a object
rectangleObject -> rectangle -> Function(inbuilt) 



// DYNAMIC NATURE OF OBJECTS

// insertion
rectangleObject.color = 'black'
console.log(rectangleObject);

// deletion
delete rectangleObject.color;
console.log(rectangleObject);

*/



/* FOR-IN LOOP - used in objects
let rectangle = {
    length : 2,
    breadth : 5
};

console.log(rectangle);


// To check if property exists in object
if('length' in rectangle) {
    console.log('present');
}
else {
    console.log('Not present');
}

for(let key in rectangle) {
    console.log(key, rectangle[key]);
}

for(let key of Object.keys(rectangle)) {
    console.log(key);
}

for(let key of Object.entries(rectangle)) {
    console.log(key);
}

// FOR-OF LOOP - used on iterables ARRAYS
*/



/* OBJECT CLONING - 1 (Iteration)
let src = {
    a : 10,
    b : 20,
    c : 30
};

let dest = {};

for(let key in src) {
    dest[key] = src[key];
}

console.log(src);
console.log(dest);

src.a++;

console.log(src);
console.log(dest);


// OBJECT CLONING - 2 (Assign)
let src = {
    a : 10,
    b : 20,
    c : 30
};

let dest = Object.assign({}, src);

console.log(src);
console.log(dest);

src.a++;

console.log(src);
console.log(dest);


// OBJECT CLONING - 3 (Spread)
let src = {
    a : 20,
    b : 30,
    c : 40
};

let dest = {...src};

console.log(src);
console.log(dest);

src.a++;

console.log(src);
console.log(dest);



GARBAGE COLLECTOR - 
* is a tool that finds  variables that are not in use and deallocates memory from them automatically
* not controlled by programmer, it runs in background

*/


/* INBUILT OBJECTS 
// 1. Math
Math.random() - generates random no between 0 - 1
console.log(Math.max(1,4,6,8));
console.log(Math.round(3.5));
console.log(Math.abs(-4));


// 2. Strings 
let firstName = new String('Bhanu');
console.log(firstName);
console.log(typeof firstName); // OBJECT
 
let message = 'This is my first message';
console.log(message);
console.log(typeof message); // STRING

let words = message.split(' ');
console.log(words);
console.log(typeof words); // OBJECT


// 3. Date
let date = new Date();
console.log(date);

let date2 = new Date('July 12 2003');
console.log(date2);

let date3 = new Date(2003, 6, 12, 5);
console.log(date3);

date3.setFullYear(1998);
console.log(date3);

console.log(date3.getFullYear());
*/
