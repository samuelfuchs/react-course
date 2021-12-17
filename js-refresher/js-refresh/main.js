// const myName = 'Max'
// console.log(myName)

// myName = 'Manu'
// console.log(myName)

// ===== Arrow functions =====
/*
function name(params) {
  // ...
}

const myFnc = () => {
  // No more issues with the this keyword!
}
*/

// function printMyName(name) {
//   console.log(name)
// }

// const printMyName = (name, age) => {
//   console.log(name, age)
// }

// printMyName('Max', 28)

// const multiply = (number) => number * 2

// console.log(multiply(2))

// ===== Exports and Imports =====
// When exporting things we use export default xyz or we can export specific things, like constants and functions.
// When IMPORTING things we use import xyz from './xyz.js' (we can choose a name) IF we exported as default. We use import { xyz } from './xyz.js' if we exported something specific. (we CANNOT choose a name, it must be that specific name and name it 'as' something different)

// ===== Classes =====
// classes are blueprints for JS Objects

// in a class we have: properties & classes
// properties are variables
// methods are funcions

// class Human {
//   constructor() {
//     this.gender = 'male'
//   }

//   printGender() {
//     console.log(this.gender)
//   }
// }

// class Person extends Human {
//   constructor() {
//     super()
//     this.name = 'Max'
//     this.gender = 'female'
//   }

//   printMyName() {
//     console.log(this.name)
//   }
// }

// const person = new Person()
// person.printMyName()
// person.printGender()

// ===== Classes, Properties and Methods =====

// class Human {
//   gender = 'male'

//   printGender = () => {
//     console.log(this.gender)
//   }
// }

// class Person extends Human {
//   name = 'Max'
//   gender = 'female'

//   printMyName = () => {
//     console.log(this.name)
//   }
// }

// const person = new Person()
// person.printMyName()
// person.printGender()

// ===== The Spread & Rest Operator =====
// symbolized by '...'

// Spread Operator
// Used to split up array elements OR object properties

// const numbers = [1, 2, 3]
// const newNumbers = [...numbers, 4]

// console.log(newNumbers)

// // --

// const person = {
//   name: 'Max',
// }

// const newPerson = {
//   ...person,
//   age: 28,
// }

// console.log(newPerson)

// // Rest operator
// // Used to merge a list of function arguments into an array

// const filter = (...args) => {
//   return args.filter((el) => el === 1)
// }

// console.log(filter(1, 2, 3))

// ===== Destructuring =====

// // Array destructuring
// const numbers = [1, 2, 3]
// ;[num1, , num3] = numbers
// console.log(num1, num3)

// // Object destructuring

// ===== Reference and Primitive Types Refresher =====

// objs and arr are object types - we only copy a pointer, not the entire thing.
// const person = {
//   name: 'max',
// }

// const secondPerson = person

// person.name = 'Manu'

// console.log(secondPerson)

// to copy the entire thing we use the spread operator:
// const person = {
//   name: 'max',
// }

// const secondPerson = { ...person } // this is a real copy!

// person.name = 'Manu'

// console.log(secondPerson)

// ===== Refreshing Array Functions =====

// const numbers = [1, 2, 3]
// const doubleNumArray = numbers.map((num) => {
//   return num * 2
// })

// console.log(numbers)
// console.log(doubleNumArray)
