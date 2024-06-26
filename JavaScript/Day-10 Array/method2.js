// let b=[12,45,18,9];
// console.log(b)

// //Sorted in ascending order
// b.sort((a,b)=>(a-b))
// console.log("Sorted array: "+b)

// //Sorted in descending order 
// b.sort((x,y)=>(y-x))
// console.log("Sorted array: "+b)

///ForEach loop
//Q1.
// let arr=[1,2,3,4,5];
// let arr1=[];
// let re=arr.forEach((v,i,a)=>{
//   arr1.push(v*10);
// })
// console.log(re)  //returns undefind
// console.log(arr1)

//Q2.Sum of values
// let arr=[1,2,3,4,5];
// let sum=0;
// arr.forEach((v)=>{
//     sum=sum+v;
// })
// console.log(`Sum is: ${sum}`)

// //Q3.Divide by 10
// let arr=[100,200,300,400,500];
// let arr1=[];
// arr.forEach((v)=>{
//    arr1.push(Math.floor(v/10))
// })
// console.log(arr1)


// //Q4.Square of number
// let arr=[10,20,30,40,50];
// let arr1=[];
// arr.forEach((v)=>{
//    arr1.push(v*v);
// })
// console.log(arr1)

//Q5.Factorial of number
// let arr=[1,2,3,4,5];
// let arr1=[];
// const getFactorial=(n)=>{
//   let fact=1;
//   for(let i=1;i<=n;i++)
//     fact=fact*i;

//   return fact;
// }
// arr.forEach((v)=>{
//    arr1.push(getFactorial(v));
// })
// console.log(arr1)

//Q6.Multiply number with 100
let arr=[1,2,3,4,5];

arr.forEach((val,index,arr)=>{
  arr[index]=val*10;
})
console.log(arr)