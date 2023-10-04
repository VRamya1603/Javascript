// Write a program to sort in assending order in an array?

const list1 = [5, 29, -7, 84, 91, -3, 13];
let sort = list1.sort(function (a, b) {
  return a - b;
});
console.log("Assending order : " + sort);
