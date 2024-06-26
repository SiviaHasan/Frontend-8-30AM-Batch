// //2.Object creation by using new keyword and object Constructor

// const user=new Object();
// console.log(user)

// const user1=new Object("Sivia");
// console.log(user1)

// const user2=new Object({userName:'Sivia',age:23,city:'noida'});
// console.log(user2)

// console.log(Object)

// //3.By using new keyword and Constructor function

// function CreateUser(userId,userName,loginCount)
// {
//   this.userId=userId
//   this.userName=userName
//   this.loginCount=loginCount
  
// }
// // console.log(CreateUser)
// const user=new CreateUser(112,"Hasan",2)
// console.log(user)



// //4. By using the class
// class User{
//   constructor(userId,userName,city){
//     this.userId=userId
//     this.userName=userName
//     this.city=city
//   }
// }
// const user1=new User(23,"Hasan","Bathinda")
// console.log(user1)


//We can't use arrow function in object

// const user={
//   name:"sivia",
//   age:23,
//   city:'noida',
//   getDetails:function(){
//     console.log(`user name is ${this.name}`)
//     console.log(`user age is ${this.age}`)
//     console.log(`user name is ${this.city}`)
//   }
// }

// console.log(user.getDetails())


// const user={
//   name:"sivia",
//   age:23,
//   city:'noida',
//   getDetails:()=>{
//     console.log(`user name is ${this.name}`)
//     console.log(`user age is ${this.age}`)
//     console.log(`user name is ${this.city}`)
//   }
// }

// console.log(user.getDetails())

const user={
  name:"sivia",
  age:23,
  city:'noida',
  getDetails:()=>{
    console.log(this)//it give window variable
    console.log(`user name is ${user.name}`)
    console.log(`user age is ${user.age}`)
    console.log(`user name is ${user.city}`)
  }
}

console.log(user.getDetails())