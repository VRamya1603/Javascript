// Write a program to separate number and string into separate array. 

const mixedArray = ["pink", 7, -10, "red", "orange", 25, "blue"];

// filter method
const numbers = mixedArray.filter(item => typeof item ==='number');
const strings = mixedArray.filter(item => typeof item ==='string');
console.log("Numbers : " + numbers);
console.log("Strings : " + strings);

// push method
let numbers = [];
let strings = [];
for (let i = 0; i < mixedArray.length; i++) {
  if (typeof mixedArray[i] === "number") {
    numbers.push(mixedArray[i]);
  } else if (typeof mixedArray[i] === "string") {
    strings.push(mixedArray[i]);
  }
}
console.log("Numbers : " + numbers);
console.log("Strings : " + strings);

