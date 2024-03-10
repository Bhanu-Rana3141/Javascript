/*

// DECLARATION AND PRINT

let marks = [85, 97, 44, 37, 76, 60];
for(let val of marks) {
    console.log(val);
}



// INSERTION IN ARRAY

* insert at start - unshift()
* insert at end - push()
* insert at middle - splice(index, no's to elements to delete, elements to be inserted)

let arr = [10,20,30,40,50,60];

console.log(arr.unshift(2000)); // return updated length
console.log(arr.splice(1, 1, 'hello'))
console.log(arr.push(1000)) // updated length will be printed



// DELETION IN ARRAY

* delete from start - shift()
* delete from middle - splice(index, no of elements to be deleted)
* delete from end - pop()

console.log(arr.shift());
console.log(arr.slice(1, 5));
console.log(arr.pop());


// to string() - actual array will not be changed

console.log(arr.toString());
console.log(typeof arr);



// SEARCH IN ARRAY FOR PRIMITIVE DATA TYPES - values are compared

let numbers = [1,3,6,7];

// index of 
console.log(numbers.indexOf(1));
console.log(numbers.indexOf(8)); // returns -1
console.log(numbers.indexOf(3, 2)); (element, starting index )

// includes - returns true or false (GOOD PRACTICE)
console.log(numbers.includes(4));
console.log(numbers.includes(6));


// indexOf, include FUNCTION CAN'T BE USED TO COMPARE OBJECTS BECAUSE THEY ARE ON DIFFERENT REFERENCES addresses are different


// SEARCH IN ARRAY OBJECT USING CALLBACK FUNCTIONS - references are compared

let courses = [
    {no:1, firstName:'Bhanu'},
    {no:2, firstName:'partap'}
];
console.log(courses);

find - call back function, predicate function - condition jis k basis p object ko find krenga 

let course = courses.find(function(course) { 
    return course.firstName === 'partap';      // if found OBJECT will be returned else UNDEFINED
});
console.log(course);

// Arrow Function
let course = courses.find(course => course.firstName === 'Bhanu');
console.log(course);
*/



/* EMPTYING ARRAY

let numbers1 = [1,2,3,4,5];
let numbers2 = numbers1;

console.log(numbers1);
console.log(numbers2);

// 1. pop function - using loop till length becomes 0
while(numbers1.length > 0) {
    numbers1.pop();
}

// 2. numbers = []
numbers1 = [];

// 3. slice function 
numbers1.splice(0, numbers1.length);

// 4. length = 0
numbers1.length = 0;

console.log(numbers1);
console.log(numbers2);
*/



/* COMBINE : 1. Concat 
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];

let combined = numbers1.concat(numbers2);
console.log(combined);


// 2. Spread
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];

let combined = [...numbers1, 'a', true, ...numbers2, 'b', false];
console.log(combined);

// Creating copy of combined array - Here SHALLOW COPY will be created, array contains primitive data types (strings, numbers), therefore copy of array will be created reference will not pass. If array contains object in that case reference is passed
let combinedCopy = [...combined];
console.log(combinedCopy);
*/



/* Slice
let marks = [10, 20, 30, 40, 50, 60];
// let sliced = marks.slice(); - copy of original array is created
// let sliced = marks.slice(2); - all elements from index 2 to last 
let sliced = marks.slice(2,5);
console.log(sliced);
*/



/* Iterating on Array
let arr = [10, 20, 30, 40, 50];

1. For of Loop
for(let value of arr) {
    console.log(value);
}

2. For Each function
arr.forEach(function(number) {
    console.log(number);
});

// Arrow Function
arr.forEach(number => console.log(number));
*/



/* Joining array
let arr = [10, 20, 30, 40, 50];
let joined = arr.join(',');
console.log(joined);


// Split array
let message = "This is a message"; // type - string
let splitedParts = message.split(' '); // string converted in array
console.log(splitedParts);

let joinedPart = splitedParts.join('_');
console.log(joinedPart);


// Sort - Firstly it converts array elements in string and then sorts them
let numbers = [10, 8, 2, 4, 6, 12];
numbers.sort();
console.log(numbers);
console.log(typeof numbers);
console.log(typeof numbers[0]);


// Reverse array
let numbers = [10, 20, 30, 40, 50];
numbers.reverse();
console.log(numbers);
*/


/* filter
let arr = [3, 5, -1, -2, 7, -6];
let filtered = arr.filter(function(value) {
    return value >= 0;
});
console.log(filtered);

// Arrow function
let filtered = arr.filter(value => value >= 0);
console.log(filtered);
*/


/* Mapping
let numbers = [1, 2, 3, 4];
console.log(numbers);

let mapping = numbers.map(function(value){
    return 'student ' + value;
});
console.log(mapping);

let mapping = numbers.map(value => 'student_no ' + value);
console.log(mapping);
*/

/*
let numbers = [1, 2, -6, -9];

let filtered = numbers.filter(value => value >= 0);
console.log(filtered);

// Creating object with filtered values
let filteredObj = filtered.map(function(num) {
    return {value : num};
});
console.log(filteredObj);


let items = numbers.filter(value => value >= 0).map(function(num) {     return {value : num} }) ;
console.log(items);
*/



/* REDUCING ARRAY

let arr = [1, 2, 3, 4];

// if 0 is passed then accumulator will have 0 and currValue will have value at 0th index in array
let sum = arr.reduce((accumulator, currValue) => accumulator + currValue, 0); 

// If 0 is not specified then accumulator will have value at 0th index, and currValue will have value at 1st index of array
// let sum = arr.reduce((accumulator, currValue) => accumulator + currValue); 
console.log(sum);
*/
