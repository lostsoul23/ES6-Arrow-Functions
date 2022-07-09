import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

// // Way 1:
// function square(x) {
//   return x * x;
// }

// const newNumbers = numbers.map(square);

// console.log(newNumbers);

// // Way 2: (Anonymous functions):
// const newNumbers = numbers.map(function (x) {
//   return x * x;
// });

// console.log(newNumbers);

// // Way 3 (Arrow functions/ The Fat Arrow):
// const newNumbers = numbers.map((x) => x * x);
// // const newNumbers = numbers.map(x => x * x); // even MORE compact

// console.log(newNumbers);

// const newNumbers = numbers.filter((num) => num < 10);
// // const newNumbers = numbers.filter((num) => num < 10); // even MORE compact

// console.log(newNumbers);

// const newNumbers = numbers.reduce(
//   (accumulator, currentNumber) => accumulator + currentNumber
// );

// console.log(newNumbers);

// const newNumber = numbers.find((num) => num > 10);

// console.log(newNumber);

// const newNumber = numbers.findIndex((num) => num > 100); // returns -1 if Invalid

// console.log(newNumber);

// ---------------------------- Given from Before ---------------------------------

////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })

////Find - find the first item that matches from an array.
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })

////FindIndex - find the index of the first item that matches.
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })
