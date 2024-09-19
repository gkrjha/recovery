// function createUser(name,address){
//   this.name = name;
//   this.address = address;
// }

// createUser.prototype.about=function(){
//   return `User Name : ${this.name} \n User Address : ${this.address}`
// }
// const user = new createUser("gaurav", "chandighar");
// new Keyboard
// create a new Empty object
// return this
// means it create like createUser.prototype

// console.log(user.about()); //User Name : gaurav  User Address : chandighar
// console.log(user);




function createUser(name, age ,email, address, password) {
   this.name = name;
   this.age = age;
   this.email = email;
   this.address = address;
   this.password = password;
   
 }

 createUser.prototype.is18 = function(){
     return this.age >=18;
 }
 createUser.prototype.about=function(){
   return `${this.name} is ${this.age} years old. Email: ${this.email}, Address: ${this.address}`
 }
 createUser.prototype.sing=function(){
   return "la la la lal ala "
 }
 
 
 
 const user1 = new createUser('user1',25,'isbciuasb','dsvfsdv','dsvsddvs');
 console.log(user1.is18());
 console.log(user1.about());
 console.log(user1.sing());
 
 const user2 =new createUser('user1',5,'isbciuasb','dsvfsdv','dsvsddvs');
 console.log(user2.is18());
 
 