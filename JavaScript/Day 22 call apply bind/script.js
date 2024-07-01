//Topic 1:call() method
/*
function greet(){
   console.log(`Good Morning ${this.name}`)
}
const person={
  name:"Sivia",
  age:22
}
const person2={
  name:"Hasan",
  age:21
}
greet.call(person)
greet.call(person2)

*/
/*
function getDetails(comp,sal){
  console.log(this)
  console.log("User id : "+this.userId)
  console.log("User name : "+this.userName)
  console.log("city : "+this.city)
  console.log("comp : "+comp)
  console.log("salary : "+sal)
}
const person={
  userId:1223,
  userName:"Hasanpreet Singh",
  city:"Bathinda"
}
getDetails.call(person,"IT infotech",20000)

*/

/*
//Topic 2: apply()method

function getDetails(comp,sal){
 if(this.age>18 && this.age<60){
         console.log(`${this.name} you are eligible to work`)
  return `comp is: ${comp} & sal is: ${sal}`
  
 }
 else if(this.age>60){
  return `${this.name} you are senior citizen`
 }
 else if(this.age>13){
  return `${this.name} go for intership`
 }
 else if(this.age>4){
  return `${this.name} you are a kid`

 }
  
}
const person1={
  name:"simba",
  age:24
}
const person2={
  name:"Tinku",
  age:16
}
console.log(getDetails.apply(person1,['XYZ',40000]))
console.log(getDetails.apply(person2))

*/

//Topic 3: bind() method

const user={
  name:"Sivia",
  age:21
}
function getResponse(){
  console.log(`name is: ${this.name}`)
  console.log("age is : "+this.age)
}
const res=getResponse.bind(user)
res()