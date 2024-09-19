function calculateCartPrice(...amount){
  return amount;
}

// console.log(calculateCartPrice(100, 200, 300)); // [10, 20, 30]

const Items={
  Item: 'Hp Victus Laptop',
  RAM:'DDR4 8 gb',
  price:72000
}

function calculate(anyObject){
  console.log(`Laptop Name: ${anyObject.Item} RAM: ${anyObject.RAM} Price ${anyObject.price}`);
}

// calculate(Items);


function one(){
  const items = "Hp Laptop";
  
  function two(){
    const items1 = "Dell Laptop";
    // console.log(items);  
  }
  two();
}

one();

// ARROW FUNCTION

const objs = {
  name: 'Alice',
  greet() {
   
    const innerFunc = () => {
      console.log(this.name); 
    };
    innerFunc();
  }
};
// objs.greet();

function Timer() {
  this.seconds = 0;

  setInterval(() => {
    this.seconds++; // 'this' refers to the Timer instance
    console.log(this.seconds);
  }, 1000);
}

// new Timer(); // Logs the incrementing seconds value

const obj = {
  name: 'Bob',
  greet: () => {
    console.log(this.name); // 'this' does not refer to obj; it is inherited from the global scope or parent scope
  }
};
// obj.greet(); // Logs undefined in strict mode or the global object in non-strict mode

(function() {
  console.log("This is an IIFE!");
})();


(function(name) {
  console.log("Hello, " + name + "!");
})('Alice');
