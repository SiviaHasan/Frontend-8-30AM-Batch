// a Pallendrome number with reversing

const checkPallindrom=(n)=>{
   let rev="";
   let b=n;
   while(n>0)
    {
      let rem=n%10;
      rev=rev*10+rem;

      n=Math.floor(n/10);
    }
  return b===rev;
}

const input=+prompt('Enter a number')
if(checkPallindrom(input))
  console.log(`The number ${input} is a pallindrome number`)
else
    console.log(`The number ${input} is not  a pallindrome number`)