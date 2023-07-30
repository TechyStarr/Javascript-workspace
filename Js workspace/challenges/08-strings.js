// # Strings

// 1. Create function fullName
// 2. accept two parameters "firstName" and "lastName"
// 3. add them together (concat) and then return result in uppercase
// 4. invoke fullName and pass some values
// 5. log result
// 6. change the order of arguments
// 7. refactor to object parameter

// function fullName (firstName, lastName) {
//     const fullName = `${firstName} ${lastName}`
//     return fullName.toUpperCase()
// }

// console.log(fullName('Joe', 'Kate'))

// // // change the order of arguments
// console.log(fullName('Kate', 'Joe'));


// // refactor to object parameter
// function fullName({firstName, lastName}) { // setup as object parameter
//     const fullName = `${firstName} ${lastName}`;
//     return fullName.toUpperCase();
// }

// console.log(fullName({lastName:'Kate', firstName:'Joe'}))