// Write a program to find smallest number and biggest number in the list? 

const list = [5, 29, -7, 84, 91, -3, 13];

let min = list[0];
for (let i = 0; i < list.length; i++) {
  if (list[i] < min) {
    min = list[i];
  }
}
console.log("The smallest number in the list is " + min);

let max = list[0];
for (let i = 0; i < list.length; i++) {
  if ( max < list[i]) {
    max = list[i];
  }
}
console.log("The biggest number in the list is " + max);
