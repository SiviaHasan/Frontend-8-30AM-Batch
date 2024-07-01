
/* Topic:1 Calling this by itself     
*/
// console.log(this)

//Topic: 2 Calling this inside a function
/*
function getFullName(){
  console.log(this)
}
getFullName()
*/


/*
//Topic3: Calling this inside a object

const obj={
  fname:"Tony",
  lname:"Stark",
  getFullName:function(){
    console.log(this)
    return `${this.fname} ${this.lname}`
  }
}
console.log(obj.getFullName())

//if we destructure it refer the window object
const {getFullName}=obj
getFullName()

*/

//Topic 4:calling this inside a arrow function

/*const getFullName=()=>{
  console.log(this)
}
getFullName()
*/
const obj={
  fname:"Tony",
  lname:"Stark",
  fullName:()=>{
    console.log(this)
    return `${this.fname} ${this.lname}`
  }
}
console.log(obj.fullName())