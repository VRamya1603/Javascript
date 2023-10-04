// Write a program to find sum of digits 

let input = 45678;
let remainder;
let sum = 0;
while (input) {
  remainder = input % 10;
  sum += remainder;
  input = Math.floor(input / 10);
}
console.log("Sum of the digits : " + sum);
