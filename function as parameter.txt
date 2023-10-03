// Write JavaScript Program to Pass a Function as Parameter

function upperCase(word) {
  return word.toUpperCase();
}
function lowerCase(word) {
  return word.toLowerCase();
}
function transform(func, str) {
  return func(str);
}
console.log("Uppercase : " + transform(upperCase, "india"));
console.log("Lowercase : " + transform(lowerCase, "TamiLNaDU"));
