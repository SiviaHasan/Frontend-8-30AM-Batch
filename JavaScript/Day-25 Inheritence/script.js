//Topic : Prototyping in object
/*
const obj={
  name:"sivia",
  age:21
}
console.log(obj.__proto__)  
console.log(obj.__proto__.__proto__)
*/
/*
//Topic : Prototyping in function

function nothing(){
}
console.log(nothing)
console.log(nothing.__proto__)  
console.log(nothing.__proto__.__proto__)
console.log(nothing.__proto__.__proto__.__proto__)

*/

/*
//Topic : Prototyping with Array

const arr=[1.23,5,"new"]
console.log(arr)
console.log(arr.__proto__)  
console.log(arr.__proto__.__proto__)
console.log(arr.__proto__.__proto__.__proto__)

*/

/*
//Topic : Prototyping with String

const userName=new String("Sivia")
console.log(userName)
console.log(userName.__proto__)  
console.log(userName.__proto__.__proto__)
console.log(userName.__proto__.__proto__.__proto__)

*/


/*
//Topic : Inheritence with __proto__
const human={
  eat:function(){
    console.log(`Human ${this.name} can eat`)
  },
  sleep:function(){
    console.log(`Human ${this.name} can sleep`)
  }
}

const superHuman={
  name:"Homelander",
  fly:function(){
    console.log(`Super Human ${this.name} can fly`)
  },
  beam:function(){
    console.log(`Super Human ${this.name} can shoot laser beam with eyes`)
  }
}

superHuman.beam()
superHuman.__proto__=human      //Inheritence
superHuman.eat()
console.log(superHuman.__proto__)


const animal={
  speak:function(){
    console.log(`animal ${this.name} can sound ${this.sound}`)
  }
}
const dog={
  name:"sherro",
  sound:"Bhaoow Bhaoow"
}

dog.__proto__=animal
dog.speak()
console.log(dog.__proto__===animal)

*/

//Topic : Inheritence in ecum6

/*
const person={
  fname:"Hasan",
  lname:"Sivia",
  age:21,
  city:"Bathinda",
  getFullName:function(){
    console.log(` ${this.fname}  ${this.lname}`)
  }
}
const employee={
  desg:"SDE",
  salary:"14 LPA"
}

Object.setPrototypeOf(employee,person)
const inheritedObject=Object.getPrototypeOf(employee)
console.log(inheritedObject===person)

employee.getFullName()
console.log(employee)
*/
//Object.createMethod()


//Best way of inheritence

const animal={
  speak:function(){
    console.log(`animal ${this.name} can sound ${this.sound}`)
  }
}

/*
const newPet=Object.create(animal)
console.log(newPet)
newPet.name="sherro"
newPet.sound="Bhaoow Bhaoow"
console.log(newPet)
newPet.speak()
*/


/*
//directly available properties
const properties={
  name:{
    value:"sherro",
    writable:false,
    enumerable:true,
    configurable:false
  },
  sound:{
    value:"Bhaoow Bhaoow",
    writable:false,
    enumerable:false,
    configurable:true
  }
}

const pet=Object.create(animal,properties)
delete properties.sound
console.log(pet)
pet.speak()
console.log(Object.values(properties))
*/

/*
const properties={
  song:{
    value:function(){
    console.log(`${this.name }is  singing for ${this.girlfriend}`)
    return 'Thukr a ke mera pyar'
  }
 }
}
const parent={
 name:"Modi",
 desg:"PM",
 girlfriend:"Maloni"
}

console.log(properties)
const newobj=Object.create(parent,properties)
console.log(newobj.song())
*/

//Topic : Inheritanc by class and extends keyword

class Human{
  constructor(name){
    this.name=name;
  }
  eat(){
    console.log(`${this.name} can eat`)
  }
  sleep(){
    console.log(`${this.name} can sleep`)
  }
}

class SuperHuman extends Human{
  constructor(name,age,city,isWorking){
    super(name)
    this.age=age
    this.city=city
    this.isWorking=isWorking
  }

}

const supe1=new SuperHuman("homelander",34,"New york",true)
supe1.eat()
supe1.sleep()
console.log(supe1.isWorking)