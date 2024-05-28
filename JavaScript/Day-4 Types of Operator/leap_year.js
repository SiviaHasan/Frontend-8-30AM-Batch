// let year=+prompt('Enter the year')
let year=2000;
let res=((year%100!=0) && (year%4==0)) || (year%400==0) ? "it is a leap year" :"I is not a leap year";
console.log(res);