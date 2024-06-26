//insert a key value pair
// const student={
//   name:"shikhar",
//   roll:8

// }
// console.log(student.name)
// student.city="Bathinda"
// student["Math score"]=90
// console.log(student.city)
// console.log(student)

// //update a key value pair
// const student={
//   name:"shikhar",
//   roll:8

// }
// console.log(student.roll)
// student.roll=15

// console.log(student)


// //delete a key value pair
// const student={
//   name:"shikhar",
//   roll:8,
//   Hobbie:"video games"

// }
// console.log(student.roll)
// student.roll=15
// console.log(delete student.Hobbie)

// console.log(student)
// //Inspect a key
// console.log("roll" in student)
// console.log("Hobbie" in student)

// //Nested Object
// const user={
//   userName:"Ankit",
//   coutry:{
//     countryName:"India",
//     state:{
//       stateName:"UP",
//       city:"Noida"
//     }
//   }
// }
// console.log(user.coutry.countryName)

// //!1.Shallow copy
// const obj={
//   userName:"sivia",
//   age:21
// }
// const copy_obj=obj;
// console.log(obj)
// console.log(copy_obj)
// copy_obj.age=34
// console.log(obj)
// console.log(copy_obj)

//2.Deep Copy
const obj={
    userName:"sivia",
    age:21
}
const copy_obj={}
for(element in obj){
  copy_obj[element]=obj[element]
}
console.log(obj)
console.log(copy_obj)
copy_obj.userName="hasan"
console.log(obj)
console.log(copy_obj)