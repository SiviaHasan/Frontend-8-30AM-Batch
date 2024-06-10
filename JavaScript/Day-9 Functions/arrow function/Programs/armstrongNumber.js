const getCount=(n)=>{
  let count=0;
  while(n>0){
    count++;
    n=Math.floor(n/10);
  }
  return count;
}
const getarmstrong=(n)=>{
  let sum=0;
  let number=n;
  let count=getCount(n);
  while(n>0){
    sum=sum+Math.pow(n%10,count);
    n=Math.floor(n/10);
  }
  return sum===number;
}

const n=+prompt("Enter a number :")
if(getarmstrong(n))
  console.log(`The number ${n} is a armstrong number `)
else 
  console.log(`The number ${n} is not armstrong number`)