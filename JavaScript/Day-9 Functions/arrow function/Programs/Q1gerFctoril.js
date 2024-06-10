const getFactorial=(n)=>{
  let fact=1;
  while(n>0){
    fact=fact*n;
    n--;
  }
  return fact;
}

const getResult=()=>(getFactorial(7)-getFactorial(4))/getFactorial(3)
console.log(getResult())