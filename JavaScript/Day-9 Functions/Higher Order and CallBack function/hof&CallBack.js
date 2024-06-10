
// This is higher order function
function generic(task,a,b){
  return task(a,b)
}


// these are callback function

let sum=(a,b)=>a+b;
let sub=(a,b)=>a-b;
let prod=(a,b)=>a*b;
let divi=(a,b)=>a/b;
let pow=(a,b)=>a**b;

console.log(generic(sub,12,5))