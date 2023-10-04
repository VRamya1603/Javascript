// Write a program to find a string is palindrome? 

let word = "lilly";
function palidrome(word) {
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] === word[word.length - 1 - i]) return true;
    else return false;
  }
}
console.log(palidrome(word));
