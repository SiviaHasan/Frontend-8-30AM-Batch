// const myFeature={
//   feature:"Bubbles",
//   data:200,
//   details:{
//     sender:200,
//     status:"ok",
//     receive:205,
//     status:"ok"
//   },
//   display:true,
//   storage:['html','css','js']

// }
// // to send from client to server into json string from object or value
// const stringOutput=JSON.stringify(myFeature);
// console.log(stringOutput)

// // to send from server to client need  into back js object or value  from  json string
// const normalObject=JSON.parse(stringOutput)
// console.log(normalObject)


// Assignment 
const users=[
  {
    name:"Sidhart",
    age:17,
    Married:false,
    gender:'M'
  }
  ,
  {
    name:"Chombu",
    age:23,
    Married:true,
    gender:'M'
  },
  {
    name:"Chombi",
    age:21,
    Married:true,
    gender:'F'
  },
  {
    name:"Vidhi",
    age:18,
    Married:false,
    gender:'F'
  },
  {
    name:"Dinga",
    age:24,
    Married:true,
    gender:'M'
  }
  ,{
    name:"Simba",
    age:28,
    Married:false,
    gender:'M'
  }
]

const male=[];
const female=[];
const both=[];
const generic=(arr)=>{
   arr.forEach(object => {
      if(object.age>18 && object.Married==true && object.gender==='M')
         male.push(object.name)
      else if(object.age>18 && object.Married==true && object.gender==='F')
        female.push(object.name)
      else if(object.age>18 && object.Married==false)
        both.push(object.name)

  });
}
generic(users)
console.log("Male married: ",male)
console.log("Female married: ",female)
console.log("both unmarried: ",both)