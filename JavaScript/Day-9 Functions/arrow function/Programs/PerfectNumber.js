const getPerfect=(n)=>{
  let i=1;
  let sum=0;
  while(i<=Math.floor(n/2)){
    if(n%i==0)
         sum=sum+i;
  i++;
  }
  return sum===n;
}

const input=+prompt('Enter a number  ')
if(getPerfect(input))
  console.log(`The number ${input} is a perfect number`)
else
   console.log(`The number ${input}  is not  a perfect number`)
