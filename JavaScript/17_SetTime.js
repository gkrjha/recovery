// console.log("SCRIPT START");
// setTimeout(()=>{console.log("SetTimeout");
// },5000)
// console.log("SCRIPT END");

// let conuter=document.getElementById("conuter")
//  function printNumbers(i) {
//   if (i <= 15) {
//     console.log(i);
//     conuter.textContent=i;
//     setTimeout(() => printNumbers(i + 1), 1000); 
//   }
// }

// setTimeout(() => printNumbers(1), 1000); 







// let conuter = document.getElementById("conuter");

//         function printNumbers(i) {
//             if (i <= 5) {
//                 console.log(i);
//                 conuter.textContent = i;
//                 if(i==5){
//                   const divs=document.createElement("div");
//                   const addClass=divs.innerHTML="<Button>Start</Button>";
//                   conuter.appendChild(divs);
//                 }
//                 setTimeout(() => printNumbers(i + 1), 1000);
//             }
//         }

//         setTimeout(() => printNumbers(1), 1000);
       

// console.log("Starting");
// let id=setTimeout(()=>{
//   console.log("Setting up");
  
// })

// for(let i=0; i<1000;i++){
//   // console.log(i);
// }
// clearTimeout(id)
// clearInterval(id);
// console.log("end");


let bgchanger = document.getElementById("bgchanger");
let stop = document.getElementById("stop");
const body = document.body;
let intervalId;

bgchanger.addEventListener("click", () => {
  // if (!intervalId) {  // Check if the interval is already running
    intervalId = setInterval(() => {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }, 1000);
  // }
});

stop.addEventListener("click", () => {
  clearInterval(intervalId);
  // intervalId = null;  // Reset intervalId to allow restarting
});





// synchronous programming vs asynchronous programming
// synchronous programming
// synchronous programming single threaded
// console.log("script start");

// for (let i = 1; i < 10000; i++) {
//   console.log("inside for loop");
// }

// console.log("script end");

// setTimeout

console.log("script start");

const id = setTimeout(() => {
  console.log("inside setTimeout");
}, 1000);

for (let i = 1; i < 100; i++) {
  console.log("....");
}
console.log("settimeout id is ", id);
console.log("clearing time out");
clearTimeout(id);
console.log("Script end");




