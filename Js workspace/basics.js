// // Statements
// console.log('Hello World!');

// // comments
// // single line comment
// /* multi-line
// comment */

// // variables - var, let, const

// // var is globally scoped
// var name = 'John Doe';
// console.log(name);

// // let is block scoped
// let name2 = 'Sarah Doe';
// console.log(name2);

// // const is block scoped and cannot be reassigned or left undefined
// const name3 = 'Tom Doe';
// console.log(name3);

// // Assigning variables later
// let greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // variable naming conventions
// // letters, numbers, _, $
// // cannot start with a number but must start with letter, $ or _
// // case sensitive - firstName and firstname are different variables
// let firstName = 'John'; // camel case
// let first_name = 'Sara'; // underscore
// let FirstName = 'Tom'; // pascal case

// // String Concatenation
// const name = 'John';
// const lastName = 'Doe';

// // this is a bad way to concatenate strings
// console.log('Hello there, your name is ' + name + ' ' + lastName)

// let fullName = name + ' ' + lastName;
// console.log(fullName);

// // or

// fullName = `${name} ${lastName}`;
// console.log(fullName);

// Numbers basics
// const num = 34;
// const num2 = 2.456; // this is a number
// const num3 = '2.456'; // this is a string not a number

// console.log(num);
// console.log(num2);
// console.log(num3); // this will display a string in black text colour

// // math operations
// const add = num + num2;
// const sub = num - num2;
// const prod = num * num2;
// const div = num / num2;

// console.log(add);
// console.log(sub);
// console.log(prod);
// console.log(div);

// // maths operators
// // +=, -=, /=, *=, --, %
// // modulus (%) operator returns the remainder after integer division
// let number = 40;
// number += 5; // this is same as "number = number + 5"
// number++; // adds 1 to the number
// console.log(number);

// const slices = 10;
// const children = 3;
// const amount = slices % children;

// console.log(amount);

// const random = 4 + 6 + 10 * 10;
// const random2 = (4 + 6 + 10) * 10;
// console.log(random);
// console.log(random2);


// // Implicit Type Conversion

// // perform math operations on strings
// let num3 = '10'
// let num4 = '23'
// const result2 = num3 - num4 // when changed to '+', it performs string concatenation
// console.log(result2);

// // when changed to '+', it performs string concatenation
// let num = '10'
// let num2 = '23'
// const result = num + num2 
// console.log(result);


// // Data types
// // primitive - string, number, boolean, null, undefined, symbol
// // Object - arrays, object literals, functions, dates, anything else

// // String
// const text = 'some text';

// // Number 
// const number = 45

// // Boolean
// let value1 = true
// let value2 = false

// // Null
// const result = null

// // Undefined
// let greeting;


// // typeof - operator(typeof variable) (typeof value)
// console.log(typeof text);
// console.log(typeof number);
// console.log(typeof value1);
// console.log(typeof value2);
// console.log(typeof null);
// console.log(typeof greeting);


// Arrays, functions and Objects 
// Arrays offers an easy way to store list items, access and perform various functions with them
// Arrays - [], 0 index based

const friends = ['kate', 'lina', 'darcy', 'kitan', 45, undefined, null]

// console.log(friends);
// console.log(friends[1]);

// friends[4] = 'lucy'
// console.log(friends)

// // Array methods
// // push - add to the end of the array
// friends.push('jane')
// console.log(friends)

// // pop - remove from the end of the array
// friends.pop()
// console.log(friends)

// // unshift - add to the beginning of the array
// friends.unshift('jane')
// console.log(friends)

// // shift - remove from the beginning of the array
// friends.shift()
// console.log(friends)

// // indexOf - find the index of an item in the array
// console.log(friends.indexOf('darcy'))

// // includes - check if an item is in the array
// console.log(friends.includes('darcy'))

// // concat - join two arrays together
// const friends2 = ['kate', 'lina', 'darcy', 'kitan', 45, undefined, null]
// const friends3 = ['jane', 'lucy', 'mary', 'jane', 45, undefined, null]

// console.log(friends2.concat(friends3))

// // reverse - reverse the order of the array
// console.log(friends2.reverse())

// // slice - copy a portion of the array
// console.log(friends2.slice(1, 3))

// // splice - remove or replace existing items and/or add new items
// console.log(friends2.splice(1, 3, 'jane', 'lucy', 'mary'))

// // join - join all items in the array into a string
// console.log(friends2.join(' '))



// Functions - block of code that can be called repeatedly
// declare, call, pass arguments, return values
// function greet() {
//     // logic
//     console.log('Hi, '+ name)
// }

// greet()

// // function params and arguments
// function greet(name) {
//   // logic
//     console.log('Hi, ' + name);
// }

// greet('Bob');

// // multi function params
// function greet(name) {
//   // logic
//     console.log('Hi, ' + name);
// }

// greet('Bob');

// // default params
// function greet(name = 'John') {
//     // logic
//     console.log('Hi, ' + name);
// }

// greet();



// // return values
// function greet(name = 'John') {
//     // logic
//     return 'Hi, ' + name;
// }

// console.log(greet());

// const wallHeight = 901

// function calculate(value) {
//     const newValue = value * 2.54
//     return newValue
// }

// const width = calculate(100)
// const height = calculate(wallHeight)

// const dimensions = [width, height]
// console.log(dimensions)


// // Function Expression
// function addValues(num1, num2){
//     return num1 + num2
// }

// const firstValue = addValues(3,5)
// const secondValue = addValues(48, 829)
// // function expression
// const add = function(num1, num2){
//     return num1 +num2
// }
// const thirdValue = add(5, 6)
// const values = [firstValue, secondValue, thirdValue]
// console.log(values)



// // Objects - key/value pairs
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//         street: '50 main street',
//         city: 'Boston',
//         state: 'MA'
//     },
//     greeting: function() { // creating a function
//         console.log('Hello, I live here')
//     }
// }

// console.log(person)
// // using dot notation to access an object's property
// console.log(person.firstName)
// console.log(person.hobbies[2]);
// person.greeting()

// // destructuring - pull out values from an object
// const { firstName, lastName, address: { city } } = person
// console.log(firstName, lastName, city)

// // add properties to an object
// person.email = 'john@gmail'
// console.log(person)

// // Arrays of objects
// const todos = [
//     {
//         id: 1,
//         text: 'take out trash',
//         isCompleted: true

//     },
//     {
//         id: 2,
//         text: 'meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'dentist appointment',
//         isCompleted: false
//     }
// ]

// console.log(todos)
// console.log(todos[1].text)

// // convert to JSON
// const todoJSON = JSON.stringify(todos)
// console.log(todoJSON)

// Conditional statements
// >, <, >=, <=, ==, ===, !=, !===
// If statement
// if (30 > 15) {
//     console.log('30 is greater')
// }

// // If else statement
// const num1 = 20
// const num2 = 30

// if (num1 > num2) {
//     console.log('First number is bigger')
// } else {
//     console.log('Second number is bigger')
// }

// // // If else if statement
// const num3 = 20
// const num4 = 30

// if (num3 > num4) {
//     console.log('First number is bigger')
// } else if (num4 > num3) {
//     console.log('Second number is bigger')
// }
// else {
//     console.log('The numbers are equal')
// }


// // ! - alternative to else
// const value = false
// if (!value) {
//     console.log('value is true')
// }

// const value1 = num1 == num2
// const value2 = num1 === num2

// console.log(value1);
// console.log(value2);

// // Logical Operators
// // ||-OR, &&-AND, !-NOT

// const name = 'peter'
// const age = 24

// if (name === 'bob' || age === 24) {
//     console.log('Hello there')
// }

// // Switch statements
// //dice values : 1 - 6

// const dice = 1

// if (dice === 1) {
//     console.log('You got one');
// }

// switch (dice) {
//     case 1:
//         console.log('You got one');
//         break;
//     case 2:
//         console.log('You got two');
//         break;
//     case 3:
//         console.log('You got three');
//         break;
//     case 4:
//     console.log('You got four');
//     break;

//     default:
//         console.log('You did not roll the dice');
//         break;
// }


// // Loops - repeatedly run a block of code while condition is true
// // Loop types - while loop, do while loop, for loop

// let amount = 10

// // while loops
// while (amount > 0) {
//     console.log('I have ' + amount + " dollars and I'm going to the mall")
//     amount--
// }

// // do while loop
// // code block first before condition

// let money = 0

// do {
//     console.log('You have ' + money + ' dollars')
//     money++
// }
// while (money < 10)


// // for loop

// let i;
// for (i = 0; i < 10; i++) {
//     console.log('The number is: ' + i)
// }

// for (let number = 11; number >= 0; number--) {
//     console.log('and the number is: ' + number)
// }


// // String properties and methods
// // wrapper string objects - javascript string methods

// let text = 'Peter Stevens'
// let result = text.length
// console.log(result)

// console.log(text.toLowerCase())
// console.log(text.toUpperCase())
// console.log(text.charAt(7));
// console.log(text.trim())
// console.log(text.includes('eter'));
// console.log(text.slice(2, 3));
// console.log(text.indexOf('t'))
// console.log(text.trim().toLowerCase().startsWith('peter'))


// Template literals - ES6+
// backticks chars `` 
// interpolation

// const name = "Peter"
// const age = 24

// const value =  `Hey it's ${name} and he is ${age} years old` 
// console.log(value)


// // Array properties and methods
// let names = ['john', 'bob', 'barry', 'olga', 'ben']

// //length
// console.log(names.length)
// console.log(names[3]);
// console.log(names[names.length-1]);

// // concat
// const lastNames = ['pep', 'roni', 'oni', 'bana']
// const allNames = names.concat(lastNames)
// console.log(allNames)
// // reverse
// console.log(allNames.reverse())

// unshift
// allNames.unshift('sas')
// allNames.unshift('isa')
// console.log(allNames)

// // shift
// allNames.shift('sas');
// allNames.shift('isa');
// console.log(allNames);

// push
// allNames.push('sas')
// console.log(allNames)

// pop
// allNames.pop()
// allNames.pop()
// allNames.pop()
// console.log(allNames)

// // splice - mutates original array
// const specificNames = allNames.splice(4, 1)
// console.log(specificNames)
// console.log(allNames)


// // Reference vs Value
// // Primitive data types - String, Number, Symbol, Boolean, undefined, null
// // Non primitive - Arrays, Functions, Objects = Object
// // typeof

// // when assigning primitive data types value to a variable
//     //any changes are made directly to that value, without
//     // affecting original value
// const number = 1
// let number2 = number
// number2 = 7
// console.log(`The first value is ${number}`)
// console.log(`The second value is ${number2}`)


// // when assigning non-primitive data type value to a variable 
// //     it is done by reference any changes will affect all
// //     the reference.
// let person = {name: 'bob'}
// let person2 = { ...person } // let person2 = {...person} gets the copy of the reference object
// person2.name = 'susy'
// console.log(`The name of the first person is ${person.name}`)
// console.log(`The name of the second person is ${person2.name}`);


// // Null and Undefined both represent no value
// // undefined - "javascript can not find any value for this"

// let number = 20 + null
// console.log(number)
// let number2 = 20 + undefined
// console.log(number2)


// // Truthy and Falsy
// // "", '', ``, 0, -0, Nan, false, null, undefined

// const bool1 = true
// const bool2 = 2 > 1

// const text = 'john'
// if (text) {
//     console.log('Hey, the value is truthy');
// } else {
//     console.log('Hey, the value is falsy')
// }

// Unary operator = typeof
// let text = 'some text'
// console.log(typeof text) // operand

// binary operator - assignment
// let number = 3
// let number2 = 2 + 5

// ternary operator 
// condition ? (runs if true) : (runs if false)

// const value = 2 > 1

// value ? console.log('value is true') : console.log('value is false')


// Global Scope vs Local Scope
// any variable outside code block {} is said to be in Global scope
// can be access anywhere in the program
// Gotchas : name collisions, modify by mistake

// let name = 'bob'
// name =  'peter'

// function calculate() {
//     console.log(name)
//     name = 'orange'
//     function inner () {
//         name = 'inner name value'
//         console.log(`this is from inner function ${name}`)
//     }
//     inner()
// }
// calculate()

// if (true) {
//     console.log(name)
//     name = 'kate'
// }
// console.log(`my name is ${name} and I'm awesome`)


// // Local Scope - cannot be accessed from outside code blocks
// // if - NOT VAR

// let name = 'boo'

// function calculate () {
//     const name = 'john'
//     const age = 24
//     globalVariable = 'global variable'
// }

// calculate()
// console.log(globalVariable)

// if (true) {
//     const name = 'john'
// }
// console.log(`my name is ${name} and I'm awesome`);




// // Variable lookup 
// const globalNumber = 5

// function add(num1, num2) {
//     const globalNumber = 20 // js in the absence of this will do a lookup and use the one defined outside the local scope/function body
//     const result = num1 + num2 + globalNumber
//     function multiply () {
//         const globalNumber = 100
//         const multiplyResult = result * globalNumber
//         console.log(multiplyResult)
//     }
//     multiply()
//     return result
// }

// console.log(add(3, 4))



// Callback functions, high order functions, functions as First
    // class objects/citizens
// Functions are first class objects - stored in a variable
    // expression, passed as an argument to another function
    // return from the function (closure)

// High Order Function - accepts another function as an argument
    // or returns another function as a result

// Callback function - passed to another function as an argument
    // and executed inside that function

// function morning(name) { //callback function
//     return `Good morning ${name.toUpperCase()}`
// }

// function greet(name, callb) { high order function
//     const myName = 'john'
//     console.log(`${callb(name)}, my name is ${myName}`)
// }

// greet('bob', morning)




// Array Iterators
// forEach, map, filter, find, reduce
// iterate over array - no loop required
// accept CALLBACK function as an argument, calls callback
    // against eaxh item in a array. reference item in the 
    // callback parameter

// forEach - does not return new array

const people = [
    {
        name: 'bob', 
        age: 23,
        position: "Developer"
    },
    {
        name: 'peter', 
        age: 33,
        position: "Data analyst"
    },
    {
        name: 'bob', 
        age: 22,
        position: "Designer"
    }
]

function showPerson(person) {
    console.log(person)
    console.log(person.position.toUpperCase())
}

// people.forEach(showPerson)

people.forEach(function(item) {
    console.log(item.position.toUpperCase());
})

