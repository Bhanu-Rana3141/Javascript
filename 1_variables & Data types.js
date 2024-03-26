/* 

* JS is used to add functionality in web document
* single threading language - processing 1 cmd at a time
* JavaScript is a dynamically typed language – no need to specify data type of variables, the interpreter itself identifies the data type of variable
* google chrome uses V8 engine
* created by netscape , names : mocha - liveScript - javaScript
* can be used to create mobile apps, websites, networking apps, games

* console - window used to print data


# VARIABLE - named memory location used to store value
let a = 'hello' -> string literal
let a = 5       -> number literal
let a = true    -> boolean literal


Q. Difference between NULL and UNDEFINED ?
* NULL – knowing that no value is stored
    a = NULL;
    data type - object
* UNDEFINED – don’t know what value is stored in variable
    b = undefined
    data type - undefined


# WAYS TO DECLARE VARIABLES
const, let, var

accountCity = "Rajpura"
const accountId = 144345;
let accountEmail = "bhanu@google.com"
var accountPassword = "12345"
let accountState; // undefined

accountId = 45 -> const can't be updated
accountEmail = "rana@123"
accountPassword = "980"
accountCity = "Karnal"

console.table([accountId, accountEmail, accountPassword, accountCity]);

Q. Why var is not used for declaring variables ?
VAR -> is a global scope variable and get's changed if updated inside or outside of scope, which is not considered to be a good practice. Therefore in 2015 new version of js ES6(ecma script was introduced)
ECMA - is an organisation which set some standard

*/

