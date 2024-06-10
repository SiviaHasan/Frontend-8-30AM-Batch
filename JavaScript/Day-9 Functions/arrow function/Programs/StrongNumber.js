const getFactorial=(n)=>{
  let fact=1;
  while(n>0){
    fact=fact*n;
    n--;
  }
  // console.log(fact)
  return fact;
  
}

const checkStrong=(n)=>{
  let sum=0;
  const number=n;
  while(n>0){
    sum=sum+getFactorial(n%10);
    n=Math.floor(n/10);
  }
  // console.log(sum)
  return number===sum;
}

const v=+prompt("ENter a number:  ");
if(checkStrong(v))
  console.log(`The number ${v} is a strong number`)
else
  console.log(`The number ${v} is not a strong number`)