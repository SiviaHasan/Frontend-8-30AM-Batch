
//Topic spread
/*
const person={
     name:"Sivia",
     age:21,
     skills:['web','sql','python']    
} 
const employee={
  compName:"Tech Mehindra",
  desg:"SDE",
  ...person

}
console.log(employee)
*/

//Tppic :Spread Operator in array destructiong
/*
const oldfav=["All the best","Dhol","welcome","Dhammal"]
let newfav=["Dhammal2",...oldfav]

console.log(newfav)

*/

//Topic: Spread operation inside a function
/*let arr=[10,20,30,40,50]

function printSum(a,b,c,d,e){
  return a+b+c+d+e
}
console.log(printSum(...arr))
*/


// function getValue(...arr1){
//   console.log(arr1)
// }
// getValue(10,20,30,40,50)

/*
//Topic: Rest Operator used inside object
const country={
  countryName:"India",
   state:"Up",
   city:"Noida",
   pincode:201301,
   phone:'+91-'
}


const {...temp}=country
console.log(temp)
console.log(temp.countryName)



const {state,city,...temp}=country
console.log(temp)
console.log(temp.countryName)
console.log(state)
*/

/*
//Topic :Rest opertor inside array 
let arr=[1,2,3,4,5]

const [...a]=arr
const [b,c, ,...d]=arr
console.log(a)
console.log(b)
console.log(d)
*/

//Topic :Rest operator inside  a function
/*
let  arr=[10,20,30,40,50]
const calculate=(...temp)=>{
   const sum=temp.reduce((acc,value)=>{
    acc=acc+value;
    return acc;
   },0)
   return sum
}
console.log(calculate(...arr))
*/

/*
const user={
  name:"sivia",
  age:21,
  isWorking:false,
  city:"Bathinda"
}

function getDetails(...obj){
  obj.map(val=>{
    console.log(val.name)
    console.log(val.age)
    console.log(val.isWorking)
    console.log(val.city)
  })
}
getDetails({...user})
*/

const item1={
  name:"Eyelinear",
  price:500
}
const item2={
  name:"Hairstiner",
  price:3500
}
const item3={
  name:"Dress",
  price:1000
}

function calculate(...cart){
  const total_amount=cart.reduce((acc,val)=>{
           acc=acc+val.price
           return acc;
  })
  return total_amount;
}
const shopping=[item1,item2,item3]
const res=calculate(...shopping)

console.log(`Total amount is: ${res} /-`)
