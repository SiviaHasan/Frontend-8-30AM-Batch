//Topic:Destructing
/*
const users={
  userName:"sivia",
  age:23,
  state:"Punjab",
  city:"Bathinda",
  atmpin:8900

}
//Topic : Object destructing 
const {userName,age,state,city,atmpin}=users
console.log(userName)
console.log(age)
console.log(state)
console.log(city)
console.log(atmpin)
*/

//Topic: Nested Destructing

const users={
  userName:"sivia",
  age:23,
  country:{
    countryName:"India",
    state:"Punjab",
    city:"Bathinda"
  }
}

/*
//1st way of extracting nested object
const {userName,age,country}=users
const {countryName,state,city}=country  //here country not become empty
console.log(userName)
console.log(age)
console.log(country)
console.log(state)
console.log(city)
console.log(countryName)

*/

/*
//2nd  way of extracting nested object

const {userName,age,country:{countryName,state,city}}=users 
console.log(userName)
console.log(age)
// console.log(country) //here country becomes empty not defined
console.log(state)
console.log(city)
console.log(countryName)  

*/

//Topic :  array destructing
const youtubers=['carry Minti',"Elvish yadav",'Punnet superstar','techincal guruji','ashish chanchlni','Hell2Round']

/*
const [a,b,c,d,e,f]=youtubers  //variable name can be anything
console.log(a)
console.log(c)
console.log(b)
console.log(e)
console.log(d)
console.log(f)
*/

/*
//For individual value

const [,,c,d,f,]=youtubers
console.log(c)
console.log(d)
console.log(f)
*/

//Topic:Nested array destructing

const movie=[ ['Jawan','SRK'],['Dunkey','SRK'],['Kalki','Prabha'],['Kick','Salman']]
/*
//1st way
const[a,b,c,d]=movie
const[movie1,actor1]=a

console.log(movie1)
console.log(actor1)

*/
/*
//2nd way
const [ ,,[movie1,actor1]=a, [movie2,actor2]]=movie
console.log(movie1)
console.log(actor1)
 console.log(movie2)
console.log(actor2)
*/

/*
//Topic :Destructing array in Function
let user=['Tinku','Dinga','Sivia']
function getJob([name1,name2,name3]){
  console.log(name1)
  console.log(name2)
 console.log(name3)
}

getJob(user)
*/

//Topic:Destructng object in function
   
const user={
  userName:"sivia",
  age:23,
  state:"Punjab",
  city:"Bathinda",
  atmpin:8900

}
function getJob({userName,age,state,city,atmpin}){
  console.log(userName)
  console.log(age)
 console.log(state)
 console.log(city)
 console.log(atmpin)
}
getJob(user)
