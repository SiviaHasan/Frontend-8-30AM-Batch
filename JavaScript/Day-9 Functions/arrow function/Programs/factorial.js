const getFactorial=(n)=>{
  let fact=1;
  while(n>0){
    fact=fact*n;
    n--;
  }
  return fact;
}

const n=+prompt("Enter a number: ")
console.log(`The factorial of ${n} is `,getFactorial(n))