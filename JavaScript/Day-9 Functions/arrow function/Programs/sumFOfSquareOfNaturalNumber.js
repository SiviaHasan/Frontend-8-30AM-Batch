const getSumOfSquare=(n)=>{
  let sum=0;
  for(let i=1;i<=n;i++)
    {
      sum=sum+(i*i);
    }
  return sum;
}

const n=+prompt("Enter a number: ")
console.log(`The sum of square of ${n} natural number is:  `+getSumOfSquare(n))