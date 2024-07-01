const courses=[
  {
    name:"Java-Full Stack",
    price:35000,
    duration:'5-months',
    skills:['sql','java','web','advance java','python']
  },
  {
    name:"Python full Stack",
    price:35000,
    duration:'6-months',
    skills:['python','web','django','Monogodb','sql']
  },
  {
    name:"Mern Stack",
    price:40000,
    duration:'4-months',
    skills:['mern','node','Express','Mongodb']
  }
  ,
  {
    name:"android -development",
    price:50000,
    duration:'6-months',
    skills:['java','web','kotlin','flutter','react native']
  }
]

courses.map(({name,price,duration,skills:[b,c,d,e]})=>{
  console.log(b)
  console.log(duration)
  console.log(name)

})

//Topic: advanced destructing
//using map  [
//             {},{} ]
/*
const result=[]
courses.map(({name,price})=>{
  if(price>=50000)
    result.push({name})
    
})
console.log(result)
/*


//using reduce
//{ keys:value}

/*
const result=courses.reduce((acc,{name,price},index)=>{
  if(price>=30000)
  {
    acc[`name${index}`]=name
  }
  return acc
},{})
console.log(result)

*/