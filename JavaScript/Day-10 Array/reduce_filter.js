
// let arr=[10,20,30,40,50,30]
//reduce method

// const sum=arr.reduce((acc,value,index,array)=>{
//      acc=acc+value;

//      return acc;
// },0)

// console.log(`Sum is: ${sum}`) 

//filter method
// Q1.
// const res=arr.filter(value=>value>30)
// console.log(res)


// // Q2.
// const res=arr.filter((value,index)=>(index>3 && value>30))
// console.log(res)

// // Q3.
// let arr1=[8,18,23,28,34,38,88,68,78,48]
// const res=arr1.filter(value=>( value%8==0 && value%10==8))
// console.log(res)


// Q4.Wajsp to find array of prime number

// let arr2=[10,6,12,14,19,7,34,29,23]

// const checkPrime=n=>{
//   for(let i=2;i<=Math.sqrt(n);i++)
//     {
//       if(n%i==0)
//         return false;
//     }
//     return true;
// }

// const getPrime=(v)=>{
//    v.sort((a,b)=>(a-b))
//    return v.filter(value=> checkPrime(value))
// }
// console.log(getPrime(arr2))


// Array.isArray method
// let a=[]
// let b={}
// let c="see"

// console.log(Array.isArray(a))
// console.log(Array.isArray(b))
// console.log(Array.isArray(c))


// from() method
let b=234;//empty array formed 
let c="HEre is the king";
console.log(Array.from(c))

let d={
  name:"Sham",
  age:34
}

console.log(Array.from(d.name))
console.log(Array.from(d.age))