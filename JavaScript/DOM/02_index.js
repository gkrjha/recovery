/*
const parent = document.querySelector('.parent');
console.table(parent)
console.log(parent.children)
console.log(parent.children[1].innerHTML);

for(let i = 0; i < parent.children.length;i++) {
  console.log(parent.children[i].tagName);
  //style
  parent.children[i].style.backgroundColor = 'red';
  parent.children[i].style.color = 'white';
  parent.children[i].style.padding = '10px';
  parent.children[i].style.border = '1px solid black';
}

console.log(parent.firstElementChild);

console.log(parent.lastElementChild);

console.log(parent.childElementCount);

const dayOne = document.querySelector('.day')
console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);
console.log("NODES::",parent.childNodes);

*/


/*
const addDiv=document.createElement('div');
console.log(addDiv)
addDiv.className='main'
addDiv.id='MyId';
addDiv.setAttribute('title', "Page Generated title")
addDiv.style.backgroundColor='green'
addDiv.style.padding='20px'
addDiv.innerText="Chai or Code"
document.body.appendChild(addDiv)

*/

function addLanguages(language) {
  const li=document.createElement('li')
  li.innerHTML=`${language}`
  document.querySelector('.language').appendChild(li)
}
const languages=["Python", "Java", "JavaScript", "Ruby","GoLanguage"]
languages.forEach(addLanguages)
addLanguages("Pythons")


// Edit
const secondLang= document.querySelector("li:nth-child(2)")
const newLi=document.createElement("li")
newLi.textContent="Mojo"
secondLang.replaceWith(newLi)

const secondLangs= document.querySelector("li:last-child")
secondLangs.remove();