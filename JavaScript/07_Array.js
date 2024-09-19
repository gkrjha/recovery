const array=[1,2,3,4,5,6,7,8,9,10,11,12];
const unSortedArray=[34,56,23,78,54,65,90,78,56]
const Naruto=['Minato','Kakashi','Jiraya','Itachi','Nagato','Naruto','Sasuke','Sakura','Hinata','Zabuja','Madhara','HashiRama']

const myArray=new Array(1,2,3,4);

// console.table(array);

// console.table(Naruto);

// console.table(myArray);

let anime=Naruto.sort((a,b)=>{
  return a.localeCompare(b)
})
// console.table(anime);

const sorted=unSortedArray.sort((a,b)=>{
  return a-b;
})
// console.table(sorted);

Naruto.push('Shisuee')
// console.table(Naruto);

Naruto.unshift('Minato')

// console.table(Naruto)

Naruto.shift()
Naruto.shift()
Naruto.shift()

// console.table(Naruto)

// console.table(Naruto.includes('Kakashi'))
// console.table(Naruto.indexOf('Kakashi'))

let DragonBall=['Gohan','Goku','Vegita','Trunks','Chichi','Goku Black']

// console.table(DragonBall);


//slice or splice

// console.table(DragonBall.slice(2,4))

DragonBall.splice(2,2,'Vegeta','Trunks')

// console.table(DragonBall)


const onePieceCharacters = [
  'Monkey D. Luffy',
  'Roronoa Zoro',
  'Nami',
  'Usopp',
  'Sanji',
  'Tony Tony Chopper',
  'Nico Robin',
  'Franky',
  'Brook',
  'Jinbe'
];

const demonSlayerCharacters = [
  'Tanjirou Kamado',
  'Nezuko Kamado',
  'Zenitsu Agatsuma',
  'Inosuke Hashibira',
  'Kanao Tsuyuri',
  'Giyuu Tomioka',
  'Shinobu Kocho',
  'Muzan Kibutsuji',
  'Kibutsuji Muzan',
  'Rui'
];



// onePieceCharacters.push(demonSlayerCharacters)
// ['Monkey D. Luffy','Roronoa Zoro','Nami',  'Usopp','Sanji','Tony Tony Chopper','Nico Robin','Franky','Brook','Jinbe',[   'Tanjirou Kamado','Nezuko Kamado',   'Zenitsu Agatsuma','Inosuke Hashibira','Kanao Tsuyuri','Giyuu Tomioka','Shinobu Kocho','Muzan Kibutsuji','Kibutsuji Muzan','Rui'
//   ]]

let mergchar=onePieceCharacters.concat(demonSlayerCharacters)

// console.table(mergchar);


const borutoCharacters = [
  'Boruto Uzumaki',
  'Sarada Uchiha',
  'Mitsuki',
  'Naruto Uzumaki',
  'Sasuke Uchiha',
  'Sakura Haruno',
  'Kakashi Hatake',
  'Shikamaru Nara',
  'Ino Yamanaka',
  'Choji Akimichi',
  'Hinata Hyuga',
  'Kurenai Yuhi',
  'Asuma Sarutobi',
  'Tenten',
  'Neji Hyuga'
];


let combinedCharacters = [...Naruto, ...borutoCharacters, ...demonSlayerCharacters]
// console.table(combinedCharacters);

// let combined= borutoCharacters;
// console.table(combined);
// borutoCharacters.push("Black Goku")
// console.log(borutoCharacters);
// console.table(combined);
// combined.push("Grand Prist")
// console.log(borutoCharacters);



const One_Pice= ['Monkey D. Luffy','Roronoa Zoro','Nami',  'Usopp','Sanji','Tony Tony Chopper','Nico Robin','Franky','Brook','Jinbe', 'Tanjirou Kamado','Nezuko Kamado',   'Zenitsu Agatsuma','Inosuke Hashibira','Kanao Tsuyuri','Giyuu Tomioka','Shinobu Kocho','Muzan Kibutsuji','Kibutsuji Muzan','Rui'
]

console.table(One_Pice)

const [CharA,CharB]=One_Pice
console.log(CharA);
console.log(CharB); 

