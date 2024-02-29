// Write a program to find a given year is leap year? 

function isleapyear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return year + " is a leap year.";
  } else {
    return year + " is not a leap year.";
  }
}
console.log(isleapyear(2000)); //sample Project
