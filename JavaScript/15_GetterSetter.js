// Getter and setter 

    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        // Getter
        get greeting() {
            return `Hello, my name is ${this.name}!`;
        }

        // Setter
        set greeting(newGreeting) {
            console.log(`New greeting: ${newGreeting}`);
        }
    }
    
    const person = new Person('Alice', 25);
    console.log(person.greeting); // Hello, my name is Alice!
    
    person.greeting = 'Good morning!'; // New greeting: Good morning!
    console.log(person.greeting); // Good morning, my name is Alice!
    
    person.age = 26; // Changing the age
    console.log(person.greeting); // Good morning, my name is Alice! (The greeting remains unchanged)
    
    console.log(person.age); // 26 (The age has been updated)
    