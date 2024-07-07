const arr=[1,2,3,4,5]
// console.log(arr.prototype)
/*
function Car(model,price){
  this.model=model
  this.price=price
}
const c1=new Car("Honda city",'7 Lakh')
const c2=new Car("Range Rover","1 Cr")

console.log(c1)
Car.prototype.color="Black"
Car.prototype.drive=function(){
        console.log(`I am driving ${this.model} and ${this.color}`)
}
c1.color="White"
console.log(c1.color)
c1.drive()

*/

/*
function Car(name,model,price){
  this.name=name
  this.model=model
  this.price=price
}
const c1=new Car("Honda city","22",'7 Lakh')
const c2=new Car("Range Rover","old","1 Cr")

console.log(c1)
Car.prototype.sound="High bass"
Car.prototype.drive=function(){
        console.log(`I am driving ${this.model} and ${this.color}`)
}
Car.prototype.drive=function(){
  console.log(`I am driving ${this.model} and ${this.color}`)
}
Car.prototype.playSong=function(song){
       switch(song){
        case 'blue eyes': 
            console.log("Blue eyes hyptonize krdi aa menu")
           break;
       
       case 'brown rang': 
            console.log("playing brown rang")
            break;
        default:
            console.log("radio is playing")
       }
}
c1.playSong("brown rang")
c1.drive()
*/


//Topic:Create our own properties and methods inside array

/*
const a=[1,2,3,4,5]
Array.prototype.color="Red"
console.log(a.color)

Array.prototype.sum=function(){
  let total=0;
  for(let i=0;i<this.length;i++)
    {
      total=total+this[i];
    }
  return total
}
console.log(a.sum())

*/

/*
//Create our own custom map method
Array.prototype.customMap=function(callback){
    let newArr=[]
    for(let i=0;i<this.length;i++)
      {
        newArr[i]=callback(this[i],i,this)
      }
    return newArr
}
const a=[1,2,3,4,5]
console.log(a.customMap((val)=>{
         return val*10;
}))
*/

//Custom our own reduce
Array.prototype.customReduce=function(callback,acc=0){
  let res=0;
  for(let i=0;i<this.length;i++)
    {
      res=res+callback(acc,this[i],i,this)
      acc=0
    }
  return res
}
const a=[10,20,30,40,50]
console.log(a.customReduce((acc,val)=>{
         acc=acc+val
         return acc
}))

//Custom our own Filter
Array.prototype.customFilter=function(callback){
  let newArr=[]
  let j=0;
  for(let i=0;i<this.length;i++)
    {
      if(callback(this[i],i,this)===true){
        newArr[j]=this[i]
        j++;
      }
        
    }
  return newArr
}
const b=[10,20,30,40,50]
console.log(b.customFilter(val=>val>30))


