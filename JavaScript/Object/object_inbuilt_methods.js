// const obj={
//    name:"Hasan",
//    age:23,
//    city:"Bathinda"
// }
// //1. Object.keys(obj_ref) for object keys return a array of key
// console.log(Object.keys(obj))

// //2. Object.values(obj_ref) for object keys return a array of key
// console.log(Object.values(obj))

// //3. Object.enteries(obj_ref) for object keys-value pair return a array of key
// const res=Object.entries(obj);
// console.log(res)

// //4. Object.fromEnteries(obj_ref) for object keys-value pair array to convert back into keys-value pair object
// console.log(Object.fromEntries(res))

//5. Object.assign(obj_ref) to store the keys-value pair from source1,source2,........ into the target Object

// const target={
//   name:"sivia",
//   age:23,
//   city:"Bathinda"
// }
// const source1={
//   state:"UP",
//   city:"noida"
// }
// const source2={
//   country:"India",
//   pincode:201301
// }
// const result=Object.assign(target,source1,source2)
// console.log(result)
// // sources doesnot get modified
// console.log(source1) 
// console.log(source2) 
// console.log(target)  //targeted object also get modified

// // without modify the targetted object
// const result1=Object.assign({},target,source1,source2)
// console.log(result1)
// // sources doesnot get modified
// console.log(source1) 
// console.log(source2) 
// console.log(target)


// 6.Object.freeze(obj_ref) to freeze the object no insertion,no update,no deletion
// Object.freeze(target)
// target.city="Ghaziabaad"
// target.state="UP"
// delete target.name
// console.log(target) 

// //7. to check a object is frozen or not
// console.log(Object.isFrozen(target))


// //8.Object.defineProperty(user,"city",{value:"Noida"});
// const user={
//    userName:"sivia"
// }
// Object.defineProperty(user,"city",{value:"Noida",
//     writable:true,
//     enumerable:true,
//     configurable:true
// });

// user.city="Bathinda"  //can't update  writeable:false
// console.log(Object.entries(user))  //don't show city   enumerable:false
// Object.defineProperty(user,"city",{value:"Bathinda"});// don't update bcz configurable:false

// user.city="Bathinda"  //can update  writeable:true
// console.log(Object.entries(user))  //do show city   enumerable:true
// Object.defineProperty(user,"city",{value:"Faridkot"});// do update bcz configurable:true
// console.log(user)

//9.Object.defineProperties(user,"city",{value:"Noida"},"state",{value:"Punjab"}); to add multiple key-value pair
// const user={
//   userName:"sivia"
// }
// Object.defineProperties(user,{"city":{value:"Bathinda"},"state":{value:"Punjab"}})
// // console.log(Object.entries(user))  //don't show city   enumerable:false
// // user.city="Bathinda"  //can't update  writeable:false
// // Object.defineProperties(user,{"city":{value:"Noida"},"state":{value:"Up"}})// don't update bcz configurable:false
// console.log(user)


// //10. Object.seal(Obj_ref) to pack the object,no insert,no deletion only update
// const user={
//   name:"sivia",
//   age:23,
  
// }
// console.log(Object.seal(user))  // return the object
// user.city="Bathinda"  //no insertion
// delete age;              // no deletion
// user.age=21             // only update
// console.log(user)

//11. Object.preventExtensions(Obj_ref) to prevent the insertion,only deletion and update
const user={
  name:"sivia",
  age:23,
  
}
// Object.preventExtensions(user)

// user.city="Bathinda"  //no insertion
// delete user.age;              //allow deletion
// user.name="Hasan"             //allow update
// console.log(user)

// 12. Object.isExtensible(obj_ref)      --> return true if object is extensible means allow insertion else false
// console.log(Object.isExtensible(user))  // return  false

//13. obj_ref.hasQenProperty("key") -->return true if key is present else return false

console.log(user.hasOwnProperty("city")) //--> return false
console.log(user.hasOwnProperty("age"))  //--> return true