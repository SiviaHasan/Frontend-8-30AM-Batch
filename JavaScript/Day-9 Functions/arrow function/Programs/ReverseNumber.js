const getReverse=(n)=>{
  let rev=0;
  while(n>0){
    rev=rev*10+(n%10);
    n=Math.floor(n/10);
  }
  return rev;
}
const n=prompt('Enter a number: ')
console.log(`The reverse of the number ${n} is : `+getReverse(n))