// push method
// let arr=new Array(12,34,56,12);
// console.log("length is: "+arr.length)
// console.log(arr)
// arr.push(89)
// console.log(arr.length)
// console.log(arr)
// console.log("length is: ",arr.push(45))  // return length of array


// pop method
// let arr=new Array(12,34,56,12);
// console.log("length is: "+arr.length)
// console.log(arr)
// arr.pop()
// console.log(arr.length)
// console.log(arr)
// console.log("element deleted: ",arr.pop())  // return deleted element


//Unshift method
// let arr=new Array(12,34,56,12);
// console.log("length is: "+arr.length)
// console.log(arr)
// arr.unshift(11)
// console.log(arr.length)
// console.log(arr)
// console.log("length of array: ",arr.unshift(13)) //return the length of array
// console.log(arr)

// Shift method
// let arr=new Array(12,34,56,12);
// console.log("length is: "+arr.length)
// console.log(arr)
// arr.shift()
// console.log(arr.length)
// console.log(arr)
// console.log("deleted element: ",arr.shift()) //return the deleted element
// console.log(arr)

//IndexOf method

// let arr=new Array(12,34,56,12);
// console.log("length is: "+arr.length)
// console.log(arr)
// console.log(arr.indexOf(56))
// console.log(arr)
// console.log(arr.indexOf(12)) //default starting index is 0
// console.log(arr.indexOf(12,1)) //second argumment startind index

//Includes method retur true if element is present
// let arr=new Array(12,34,56,12);
// console.log("length is: "+arr.length)
// console.log(arr)
// console.log(arr.includes(56))
// console.log(arr)
// console.log(arr.includes(12)) //default starting index is 0
// console.log(arr.includes(12,1)) //second argumment startind index

// splice method
// let arr=new Array(12,34,56,12);
// console.log("length is: "+arr.length)
// console.log(arr)
// console.log(arr.splice(1,2,100,200)) //returns array of deleted element
// console.log(arr)
// console.log(arr.splice(1,0,300)) //insert element at index 1
// console.log(arr)

// slice method
// let arr=new Array(12,34,56,12,89,67);
// let co_ele=[];
// let co;
// console.log("length is: "+arr.length)
// console.log(arr)
// console.log(arr.slice(1,3)) //returns array of copied element

// co=arr.slice(0,2);
// console.log(co)
// co_ele=arr.slice(1,4);
// console.log(co_ele);


//reverse method
// let arr=new Array(12,34,56,17);
// console.log("length is: "+arr.length)
// console.log(arr)
// console.log(arr.reverse())  //modify the array

//
let arr=new Array(1,2,3,4,5,6,7,8,9,10);
let arr1;
let arr2=[];

const splitArray=a=>{
  let mid=Math.floor(a.length/2);
    arr1=a.slice(0,mid);
    arr2=a.slice(mid);

}
splitArray(arr);
console.log(arr1)
console.log(arr2)




