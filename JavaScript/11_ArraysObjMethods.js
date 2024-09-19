// const code=['java','javascript','Python','TypeScript','Reactjs','NodeJs']

// const codeLog= code.forEach((item)=>{
//   console.log(item);
// })

// console.log(codeLog);


const code=[36,56,87,23,14,45,78,99,36,33,87,65];

const someGreateNum= code.filter((item)=>{
  if(item >36)  {
    return item
  }
})

// console.table(someGreateNum);

const evenNum= code.filter((item)=>{
  if(item %2 !=0)  {
    return item;
  }
})
// console.table(evenNum);

const books=
[
  {
    "book_name": "To Kill a Mockingbird",
    "genre": "Fiction",
    "author": "Harper Lee",
    "publish": "1960",
    "isbn": "978-0061120084",
    "pages": 324
  },
  {
    "book_name": "1984",
    "genre": "Dystopian",
    "author": "George Orwell",
    "publish": "1949",
    "isbn": "978-0451524935",
    "pages": 328
  },
  {
    "book_name": "The Great Gatsby",
    "genre": "Fiction",
    "author": "F. Scott Fitzgerald",
    "publish": "1925",
    "isbn": "978-0743273565",
    "pages": 180
  },
  {
    "book_name": "Moby Dick",
    "genre": "Adventure",
    "author": "Herman Melville",
    "publish": "1851",
    "isbn": "978-1503280786",
    "pages": 635
  },
  {
    "book_name": "Pride and Prejudice",
    "genre": "Romance",
    "author": "Jane Austen",
    "publish": "1813",
    "isbn": "978-1503290563",
    "pages": 279
  },
  {
    "book_name": "The Catcher in the Rye",
    "genre": "Fiction",
    "author": "J.D. Salinger",
    "publish": "1951",
    "isbn": "978-0316769488",
    "pages": 277
  },
  {
    "book_name": "Brave New World",
    "genre": "Dystopian",
    "author": "Aldous Huxley",
    "publish": "1932",
    "isbn": "978-0060850524",
    "pages": 288
  },
  {
    "book_name": "The Hobbit",
    "genre": "Fantasy",
    "author": "J.R.R. Tolkien",
    "publish": "1937",
    "isbn": "978-0618968633",
    "pages": 310
  },
  {
    "book_name": "Fahrenheit 451",
    "genre": "Dystopian",
    "author": "Ray Bradbury",
    "publish": "1953",
    "isbn": "978-1451673319",
    "pages": 194
  },
  {
    "book_name": "Jane Eyre",
    "genre": "Romance",
    "author": "Charlotte Brontë",
    "publish": "1847",
    "isbn": "978-0142437209",
    "pages": 532
  },
  {
    "book_name": "Animal Farm",
    "genre": "Political Satire",
    "author": "George Orwell",
    "publish": "1945",
    "isbn": "978-0451526342",
    "pages": 112
  },
  {
    "book_name": "The Lord of the Rings",
    "genre": "Fantasy",
    "author": "J.R.R. Tolkien",
    "publish": "1954",
    "isbn": "978-0544003415",
    "pages": 1178
  },
  {
    "book_name": "The Da Vinci Code",
    "genre": "Thriller",
    "author": "Dan Brown",
    "publish": "2003",
    "isbn": "978-0307474278",
    "pages": 489
  },
  {
    "book_name": "The Alchemist",
    "genre": "Adventure",
    "author": "Paulo Coelho",
    "publish": "1988",
    "isbn": "978-0062315007",
    "pages": 208
  },
  {
    "book_name": "The Road",
    "genre": "Post-Apocalyptic",
    "author": "Cormac McCarthy",
    "publish": "2006",
    "isbn": "978-0307387899",
    "pages": 287
  },
  {
    "book_name": "Little Women",
    "genre": "Historical Fiction",
    "author": "Louisa May Alcott",
    "publish": "1868",
    "isbn": "978-0142408767",
    "pages": 759
  },
  {
    "book_name": "The Shining",
    "genre": "Horror",
    "author": "Stephen King",
    "publish": "1977",
    "isbn": "978-0307743657",
    "pages": 447
  },
  {
    "book_name": "Dune",
    "genre": "Science Fiction",
    "author": "Frank Herbert",
    "publish": "1965",
    "isbn": "978-0441013593",
    "pages": 412
  },
  {
    "book_name": "Ender's Game",
    "genre": "Science Fiction",
    "author": "Orson Scott Card",
    "publish": "1985",
    "isbn": "978-0812550702",
    "pages": 324
  },
  {
    "book_name": "Wuthering Heights",
    "genre": "Gothic Fiction",
    "author": "Emily Brontë",
    "publish": "1847",
    "isbn": "978-0141439556",
    "pages": 416
  },
  {
    "book_name": "The Girl with the Dragon Tattoo",
    "genre": "Mystery",
    "author": "Stieg Larsson",
    "publish": "2005",
    "isbn": "978-0307454546",
    "pages": 465
  },
  {
    "book_name": "The Hitchhiker's Guide to the Galaxy",
    "genre": "Science Fiction",
    "author": "Douglas Adams",
    "publish": "1979",
    "isbn": "978-0345391803",
    "pages": 216
  },
  {
    "book_name": "Gone with the Wind",
    "genre": "Historical Fiction",
    "author": "Margaret Mitchell",
    "publish": "1936",
    "isbn": "978-1451635628",
    "pages": 1037
  }
]



const book=books.filter((books)=>{
  if(books.pages >200 && books.genre==="Fiction"){
    return books;
  }
})

// console.log(book);


const bookLib = books.map((book) => {
  const randomPrice =Math.floor( (Math.random() *200));
  return { ...book, price: `${randomPrice}` };
});

// console.log(bookLib);


// Reducer


const arr=[23,12,45,32,89]

const initial=0;
const sum=arr.reduce((acc,curr)=>   acc+curr,initial,
)

console.log(sum);