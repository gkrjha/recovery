
class CreateUser{
  constructor(name, age, email, address, password) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.address = address;
    this.password = password;
  }
  is18() {
    return this.age >= 18;
  }
  about() {
    return `${this.name} is ${this.age} years old. Email: ${this.email}, Address: ${this.address}`
  }
  sing() {
    return "la la la lal ala "
  }

}
const user2 =new CreateUser('user1',5,'isbciuasb@gmail.com','dsvfsdv','dsvsddvs');
// console.log(user2.is18());
// console.log(user2.about());


class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  isCute(){
    return `${this.name} is So cute`;
  }

  eat(){
    return `${this.name} is eating`;
  }

  play(){
    return `${this.name} is playing`;
  }
  sleep(){
    return `${this.name} is sleeping`;
  }

}

class Dog extends Animal {
  constructor(name,age, breed){
    super(name,age);
    this.breed = breed;
  }
  bark(){
    return `${this.name} is barking like ${this.breed}`;
  }
}

const tommy = new Dog("Tommy",2,"jerman");
console.log(tommy.isCute())
console.log(tommy.bark())