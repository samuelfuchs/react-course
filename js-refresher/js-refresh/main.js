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
class Human {
  constructor() {
    this.gender = 'male'
  }

  printGender() {
    console.log(this.gender)
  }
}

class Person extends Human {
  constructor() {
    super()
    this.name = 'Max'
    this.gender = 'female'
  }

  printMyName() {
    console.log(this.name)
  }
}

const person = new Person()
person.printMyName()
person.printGender()
