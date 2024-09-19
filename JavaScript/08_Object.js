

// let user={
//   name:"Gaurav",
//   "First Name": "Gaurav",
//   "Last Name": "Jha",
//   educations:["10th","Diploma","B-tech"],
//   age:25,
//   city:"Chandighar",
//   email:"email@gmail.com",
//   phone:9999999999,
//   address:{
//     street:"xyz",
//     city:"Chandighar",
//     state:"UP",
//     country:"India"
//   }
 
// }

// // console.table(user);

// //add new property
// user.hobbies=["Reading","Playing","Coding"];

// // console.log(user);

// //update property

// user.age=26;

// // console.log(user);

// //delete property 

// delete user.phone;

// // console.log(user);

// //nested object

// console.log(user.address.city);

// // console.log(user["First Name"]);



// //array of objects

// let users=[
//   {
//     name:"Gaurav",
//     "First Name": "Gaurav",
//     "Last Name": "Jha",
//     educations:["10th","Diploma","B-tech"],
//     age:25,
//     city:"Chandighar",
//     email:"email@gmail.com",
//     phone:9999999999,
//     address:{
//       street:"xyz",
//       city:"Chandighar",
//       state:"UP",
//       country:"India"
//     }
//   },
//   {
//     name:"Rahul",
//     "First Name": "Rahul",
//     "Last Name": "Jha",
//     educations:["12th","Graduation","M-tech"],
//     age:24,
//     city:"Mumbai",
//     email:"rahul@gmail.com",
//     phone:8888888888,
//   }]

//   // console.log(users);
//   // console.log(users[1].name);


//   let email = "gaurav0310@gmail.com";

//   user.email=email;
//   // console.log(user);

//   // Object.freeze(user)
//   // if any one try to update value from user freeze method not allowe him
//   user.name="Gaurav Updated"
//   // console.log(user);


//   user.greeting=function(){
//     // console.log(`hello ${this.name}`); 
//   }

//   // console.log(user.greeting());
  

  const userMethod = {
    is18 : function(){
      if(this.age >=18){
        return `${this.name} is ${this.age} year old`;
        
      }else {
        return `${this.name} is ${this.age} year old`;
        
      }
    }
  }

  function createUser(name, age ,email, address, password) {
   let user = {};
    user.name = name;
    user.age = age;
    user.email = email;
    user.address = address;
    user.password = password;
    user.is18=userMethod.is18;
    return user;
  }


  const user1 = createUser('user1',25,'isbciuasb','dsvfsdv','dsvsddvs');
  console.log(user1.is18());


  const user2 = createUser('user1',5,'isbciuasb','dsvfsdv','dsvsddvs');
  console.log(user2.is18());

  

// const person1={
//   name:"Gaurav",
//   age:18,
//   about:function(hobbies,music){
//   console.log(`${this.name} is ${this.age} year old and ${hobbies} , ${music}` )
//   }  }
//   const person2={
//   name:"Tarun kumar",
//   age:20
//   }
//   person1.about.apply(person2,["Codeing", "Anime"])
  

// const person1 = {
//   name: "Gaurav",
//   age: 18,
//   about: function(hobbies, music) {
//     console.log(`${this.name} is ${this.age} years old. Hobbies: ${hobbies}, Favorite music: ${music}`);
//   }
// };

// const person2 = {
//   name: "Tarun Kumar",
//   age: 20
// };

// // Using apply to invoke person1.about with person2 as `this`
// person1.about.apply(person2, ["Coding", "KK"]);

// const person1 = {
//   name: "Gaurav",
//   age: 18,
//   about: function(hobbies, music) {
//     console.log(`${this.name} is ${this.age} years old. Hobbies: ${hobbies}, Favorite music: ${music}`);
//   }
// };

// const person2 = {
//   name: "Tarun Kumar",
//   age: 20
// };

// // Using bind to create a new function with person2 as `this`
// const aboutPerson2 = person1.about.bind(person2, "Coding", "KK");

// // Now you can call the new function, and it will use person2 as `this`
// aboutPerson2();


