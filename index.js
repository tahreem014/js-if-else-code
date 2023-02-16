
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

const abc = ['orange', 'apple', 'mango', 'pinapple'];
let x = "";
for (let z of abc) {
  console.log(x =  z);
}

const name = 'Tahrem';
const age = 19;
//  console.log(`My name is ${name} and I am ${age}`);
 const hello = `My name is ${name} and I am ${age}`;
 console.log(hello);

 console.log(hello.length);

 const fruits = ['orange', 'apple', 'banana', 'mango', 'pinapple'];
  fruits[3] = 'orange';
  fruits.push('apple');
  fruits.unshift('pinapple');
  fruits.pop('banana');

  console.log(Array.isArray(fruits));
  console.log(fruits.indexOf('pinapple'));
  console.log(fruits);

