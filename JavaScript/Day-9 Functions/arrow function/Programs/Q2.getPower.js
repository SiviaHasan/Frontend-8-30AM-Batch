 const getPower=(a,b)=>{
  let pow=1;
  while(b>0){
    pow=pow*a;
    b--;
  }
  return pow;
 }

 const getResult=(getPower(5,3)-getPower(3,3))/getPower(2,3)
 console.log(getResult)