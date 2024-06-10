const getCount=(n)=>{
  let count=0;
  while(n>0)
    {
      count++;
      n=Math.floor(n/10);
    }
  return count;
}
const checkPallindrom=(n)=>{
     let count=getCount(n);
     let c=count;
     let p=n;
     let i=0;
     while(i<Math.floor(c/2))
      {
        let r=n%10;
        let l=Math.floor(+(p/Math.pow(10,count-1)))%10;
        if(l!==r)
          return false;

        n=Math.floor(n/10);
        i++;
        count--;
      }
    return true;

}

const input1=+prompt('Enter number a: ')
const input2=+prompt('Enter number b: ')
let count=0;
for(let i=input1;i<input2;i++)
  {
    if(checkPallindrom(i)){
      console.log(`The number ${i} is a pallindrome number`)
      count++;
    }
      
  }
console.log(`Total such number are: ${count}`)
