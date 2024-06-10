///Pallindrome without reversing
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

const input=+prompt("Enter a number");
if(checkPallindrom(input))
  console.log(`The number ${input} is a pallindrome number`)
else
    console.log(`The number ${input} is not  a pallindrome number`)