const getPower=(a,b)=>{
    let pow=1;
    while(b>0){
      pow=pow*a;
      b--;
    }
  return pow;
}
const input=+prompt('Enter the number a: ')
const input1=+prompt("Enter the numbe b: ")
console.log(`${input} to the power ${input1} is :`,getPower(input,input1) )