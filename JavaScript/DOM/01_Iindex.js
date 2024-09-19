// const btns = document.querySelector('#btns');
// const num=10;
// btns.addEventListener('click', () => {
//   // Create a new div element
//   const divs = document.createElement('div');

//   // Set the inner HTML of the div
//   divs.innerHTML = `<div><h2>Gaurav: ${num}</h2></div>`
//   document.body.appendChild(divs);
// });


// const buttons = document.querySelectorAll('button');

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function() {
//         console.log(`Button ${i + 1} clicked: ${this.textContent}`);
//     });
// }



// document.getElementById('title').textContent="Chai or Code"
// document.getElementById('title').innerHTML="<h4>JavaScript with chai or Code</h4>"
// document.getElementById('title').innerText="JavaScript with chai or Code"

// const classname=document.getElementById('title').className
// console.log(classname);

const classname=document.getElementById('title').getAttribute('class')
console.log(classname);

const Setclassname=document.getElementById('title').setAttribute('class','test')
console.log(Setclassname);

const classnames=document.getElementById('title').getAttribute('class')
console.log(classnames);

// document.getElementById('title').style.backgroundColor = '#000'

// NodeList to Array
// Array.from(NodeList)



// Creating and ADD DOM elements 