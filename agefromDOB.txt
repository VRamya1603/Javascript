//Write a program to find age from date of birth

function calAge(dateOfBirth) {
  let today = new Date();
  let birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  return "Age :" + age;
}
console.log(calAge("1998-03-16"));
