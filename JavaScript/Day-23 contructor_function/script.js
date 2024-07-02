//Topic :Constructor function
/*
function Car(model,color,price){
  this.model=model;
  this.color=color;
  this.price=price;
}

let car1=new Car("Verna","Black","18 lakh")
console.log(car1)
*/

//Topic: Nested fuction
/*
function SetName(userName){
  this.userName=userName
}
function CreateUser(userName,age,city){
  SetName.call(this,userName)
  this.age=age
  this.city=city
}

let user1=new CreateUser("Sivia",21,"Bathinda");
console.log(user1)
*/

/*
function CompanyInfo(comp,city){
  this.comp=comp
  this.city=city
}
function CreateEmployee(userId,userName,age,comp,city){
  CompanyInfo.call(this,comp,city)
  this.userId=userId
  this.userName=userName
  this.age=age
}  

let employee1=new CreateEmployee(121,"Sivia",21,"Infosys","Bathinda");
console.log(employee1)

*/


//Topic: Nested Object
/*
function CreateCountry(countryName,state,city){
  this.countryName=countryName;
  this.state=state;
  this.city=city
}
function CompanyInfo(compName,countryName,state,city){
  this.compName=compName
  this.country=new CreateCountry(countryName,state,city);

}
function CreateUser(userId,userName,compName,countryName,state,city){
  this.userId=userId
  this.userName=userName
  this.company=new CompanyInfo(compName,countryName,state,city)
}

let user1=new CreateUser(112,"Tinku","Infotech","INdia","Punjab","Chandigarh")
console.log(user1)
*/