const bucket = ['Coffee','salt','vegitabele','rice','chips','cheese','paneer','curd']

//Create Promise

const friedRice=new Promise((resolve, reject) => {
  if(bucket.includes("salt") && bucket.includes("rices") && bucket.includes("paneer")){
    resolve('All ingredients are available');
  }else{
  reject('Not all ingredients are available');
  }
})


//Consume Promise
friedRice.then((data)=>{
  console.log(data);
},(err)=>{
  console.log(err);
  
})
let count=0;
for(let i=0;i<100000000;i++){
count=count+i
}

console.log(count);