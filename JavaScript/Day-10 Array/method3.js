// let arr=[1,2,3,4,5,6,7,8,9,10];
// const generic=(arr1,mid,n1,n2)=>{
//   arr1.splice(0,mid).forEach((value,index)=> {
//     arr1.splice(index,0,value*n1);  
//   });

//   arr1.splice(mid,arr.length-mid).forEach( (value,index)=> {
//     arr1[mid+index]=value*n2;
//   });

//   return array;
// }

// const v1=+prompt('Enter multiple v1: ')
// const v2=+prompt('Enter multiple v2')
// let mid=Math.floor(arr.length/2)
// let res=generic(arr,mid,v1,v2);
// console.log(res)


//Map Function
// let arr=[1,2,3,4,5];
// let res=arr.map((val,index)=>{
//   return val*10
// })


// //Q1.
// let arr=[1,2,3,4,5];
// let res=arr.map(val=>val*10)
// console.log(res)

// //Q2.Square
// let arr=[1,2,3,4,5];
// let res=arr.map(val=>val*val)
// console.log(res)

// //Q3.Add 10
// let arr=[1,2,3,4,5];
// let res=arr.map(val=>val+10)
// console.log(res)

// //Q4.Average
// let arr=[100,90,80,70,60];
// let res=arr.map(val=>Math.floor(val/2))
// console.log(res)

//Q5.
// let arr=[1,[2,3,[4,5,[36,78]],[6,7]],[8,9]];
// let newR=[]
// const get=(arr)=>{
//       arr.map(val=>{
//             if(Array.isArray(val)){
//                   get(val)
//             }
//             else{
//                   newR.push(val)
//             }
                  
//       })
// }
// get(arr)
// console.log(newR)

// flat method
// let arr=[1,[2,3,[4,5,[36,78]],[6,7]],[8,9]];
// const res=arr.flat(3)
// console.log(res)

