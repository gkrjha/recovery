// function hello (){
//   console.log('Hello from app.js');
// }
// hello();
// console.log(hello.name);
// hello.newProp = 'new property';
// console.log(hello.newProp);

// Function Expression

// const myFunc = function(){
//   console.log('Hello from myFunc');
// }
// myFunc();
// console.log(myFunc.name);

// console.log(hello.prototype);




function createUser(name, age ,email, address, password) {
 let user = Object.create(createUser.prototype);
  user.name = name;
  user.age = age;
  user.email = email;
  user.address = address;
  user.password = password;
  // user.is18=userMethod.is18;
  return user;
}

console.log(createUser.prototype);
createUser.prototype.is18 = function(){
 
    return this.age >=18;
  
}

createUser.prototype.about=function(){
  return `${this.name} is ${this.age} years old. Email: ${this.email}, Address: ${this.address}`
}

createUser.prototype.sing=function(){
  return "la la la lal ala "
}



const user1 = createUser('user1',25,'isbciuasb','dsvfsdv','dsvsddvs');
console.log(user1.is18());
console.log(user1.about());
console.log(user1.sing());

const user2 = createUser('user1',5,'isbciuasb','dsvfsdv','dsvsddvs');
console.log(user2.is18());

