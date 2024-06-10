///This is the higher order function
function calculator(task,a,b){
  switch(task){
    case 'sum':
          console.log(`The sum is: ${a+b}`)
          break;
    case 'sub'  :
          console.log(`The sub is: ${a-b}`)
          break;  
    case 'prod'  :
          console.log(`The product is: ${a*b}`)
           break; 
   case 'divi'  :
          console.log(`The divison is: `,Math.floor(a/b))
          break; 
     default:
      console.log("Enter a valid operation")   
  }
}

const a=+prompt("Enter the first number")
const b=+prompt("Enter the second number")
const input=prompt('Enter operation sub,sum,prod,divi')

calculator(input,a,b)


