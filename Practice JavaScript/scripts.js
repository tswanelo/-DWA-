


function greet(surname){
    console.log(`Hi Tswanelo, ${surname}`)
}



/*define functions using function expressions. In this case, you assign an anonymous
 function to a variable. Function expressions are often used for creating anonymous
  functions or for passing functions as arguments to other functions.
*/


const add = function(a, b) {
    return a + b;
};


/*
Arrow functions provide a more concise syntax for creating functions, especially for
 one-liners. They are often used for short and simple functions.
*/


const multiply = (a, b) => a * b;


/*
To execute a function, you "call" it by using its name followed by parentheses containing
 the arguments (if any). When the function is called, the code inside its body is executed.
*/

greet ('Mokoena') // hello, Tswanelo
const result = add(3, 5); // 8
console.log(result)

/*
Functions can return a value using the return statement. This allows you to retrieve a value
 calculated or processed within the function.
*/


function square (num){
    return num * num ;
}

const squareValue = square(4);
console.log (squareValue)

/*
Scope:
Functions create their own scope in JavaScript. Variables defined inside a function
 are not accessible outside of that function, unless explicitly returned.

Parameters and Arguments:
*/

function fullName(firstName, LastName){
    return `${firstName}, ${LastName}`;
}

const name = fullName('Tswanelo, Mokoena')
console.log(name)

/*
Higher-Order Functions:
JavaScript allows functions to be passed as arguments to other functions and returned 
from functions. Functions that operate on other functions are known as higher-order functions.
*/

function applyOperation(a,b, operation){
    return operation(a,b);
}
const results = applyOperation(4,5 ,add)
console.log(results)

