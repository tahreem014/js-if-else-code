
// let strength = 50;
// const totalStrength = 50;
// if ( totalStrength == strength ) {
//    console.log("all present");
//  }
// else {
//   console.log("some are absent");
// } 

// function resultNum(marks,number) {
//   console.log(number);
//   if(marks >= 80 && marks <=100){
//     console.log("grade is A");
//   }else if(marks >= 70 && marks < 80){
//     console.log("grade is B");
//   }else if(marks >= 60 && marks < 70){
//     console.log("grade is C");
//   }else if(marks >= 50 && marks < 60){
//     console.log("grade is D");
//   }else if(marks >=0 && marks < 50){
//     console.log("grade is F");
//   }else {
//     console.log("invalid input");
//   }
// }
// console.log(resultNum(67,60));

// for (let i = 13; i <= 25; i++) {
//   console.log(i);
// }

// for (let i = 2; i <= 12; i += 3) {
//   if (i === 10) {
//     break;
//   }
//   console.log(i);
// } 

// const arr = ['orange', 'apple', 'banana', 'pinapple'];
// for ( let i = 0; i <= arr.length; i++)
// console.log(arr[i])

// const shoppingList = {
//   1: "cloth",
//   2: "shoes",
//   3: "coat",
//   4: "bracelet",
// };

// for (let num in shoppingList ) {
//   console.log(num + ":" + shoppingList[num]);
// }  

// const array = [1, 2, 3, 4, 5, 6];
// for (const i in array) {
//   console.log(i);
// }

// const abc = ['orange', 'apple', 'mango', 'pinapple'];
// let x = "";
// for (let z of abc) {
//   console.log(x =  z);
// }

// const name = 'Tahrem';
// const age = 19;
// //  console.log(`My name is ${name} and I am ${age}`);
//  const hello = `My name is ${name} and I am ${age}`;
//  console.log(hello);

//  console.log(hello.length);

//  const fruits = ['orange', 'apple', 'banana', 'mango', 'pinapple'];
//   fruits[3] = 'orange';
//   fruits.push('apple');
//   fruits.unshift('pinapple');
//   fruits.pop('banana');

//   console.log(Array.isArray(fruits));
//   console.log(fruits.indexOf('pinapple'));
//   console.log(fruits);

// const person = {
//   firstName: 'Tahrem',
//   lastName: 'Nisa',
//   age: 20,
//   hobbies: ['sleeping', 'drama', 'eating',],
//   address: {
//     street: 70,
//     city: 'islamabad'
//   }
// }
// console.log(person);
// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[2]);
// console.log(person.address.city);

// let i = 2;
// while (i <= 12) {
//   //console.log(i);
//   i++;
// }

// const todos = [
//   {
//     id:1,
//     text:'take a trash out'
//   },
//   {
//     id:2,
//     text:'Meeting a boss'
//   },
//   {
//     id:3,
//     text:'enjoying'
//   }
// ]
// for(let todo of todos) {
//   console.log(todo.text);
// }

// todos.forEach(function(todo) {
//    console.log(todo.text);
//  });

// const todoText = todos.map(function(todo) {
//   return todo.text;
//  });
//  console.log(todoText);

// const todoId = todos.filter(function(todo) {
//   return todo.id;
// }).map(function(todo) {
//   return todo.text;
// })
// console.log(todoId);

// const student = 20;
// if(student == 50) {
//   console.log('present');
// }
// else{
//   console.log('absent');
// }

const x = 7;
const color = x > 10 ? 'red' : 'blue';

switch(color) {
    case 'red':
     console.log('color is red');
     break;
     case 'blue':
     console.log('color is blue');
     break;
     default:
     console.log('color is not red or blue');
     break;         
}

function addNum(num1, num2) {
    return num1 + num2;
}
console.log(addNum(34, 25));

const addNum = (num1, num2) => console.log(num1 + num2);
addNum(44, 77);

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}
Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}
const person1 = new Person('john', 'doe', '4-3-1980');
const person2 = new Person('mary', 'smith', '3-6-1999');

console.log(person2.getFullName());
console.log(person1.getFullName());