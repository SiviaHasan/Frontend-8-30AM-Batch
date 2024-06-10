const getSum=(n)=>{
  let sum=0;
  while(n>0){
    sum=sum+n;
    n--;
  }
  return sum;
}

const a=+prompt("Enter the number a: ")
console.log(`The sum of ${a} natural number is: `+getSum(a))