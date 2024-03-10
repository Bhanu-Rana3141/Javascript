// Q. Calculate Sum ?
let sum = 0;
for(let i=1; i<=5; i++) {
    sum += i;
}
console.log(sum);

// Q. Store info of student in object and print it ?
let student = {
    name : "Bhanu Rana",
    age : 20,
    cgpa : 9.48
}

console.log(student['age']); // student.age

for(let key in student) {
    console.log("key : ", key, ", value: ", student[key] );
}

// Q. A gameNum is given, take a number as input from user till the user enters gameNum ?

let gameNum = 25;
let userNum = prompt("Enter number : ");

while(userNum != gameNum) {
    userNum = prompt("You entered wrong number, enter again : ");
}

console.log("congratulations, you entered correct answer");