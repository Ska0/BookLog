//Object Array 
let myLibrary = [];

//Selectors
let bookForm = document.forms[0];
let bookModal = document.querySelector("#bookForm");
let submitButton = document.querySelector(".submit-button");
let cancelButton = document.querySelector(".cancel-button");
let bookButton = document.querySelector(".new-book-button");
const library = document.querySelector(".library");


class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
  }

  isRead = () => this.read == false ? this.read = true : this.read = false;
  

}

//Book Object constructor
// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
// }
// Book.prototype.toggle = function () {
//   this.read === true ? (this.read = false) : (this.read = true);
//   updateLibrary();
// };
// Book.prototype.info = function () {
//   return Object.values(this);
// };


// Events
bookButton.addEventListener("click", () => {
  bookModal.style.display = "block";
});

submitButton.addEventListener("click", () => {
  bookModal.style.display = "none";
  addBookToLibrary();
});

cancelButton.addEventListener(
  "click",
  () => (bookModal.style.display = "none")
);

library.addEventListener("click", (e) => {
  let toggle = e.target.dataset.toggle;
  let book = e.target.dataset.key;
  if (book != undefined) {
    console.log(e);
    myLibrary.splice(book, 1);
  } else if (toggle != undefined) {
    myLibrary[toggle].isRead();
  }
  updateLibrary();
});


// Functions
function addBookToLibrary() {
  let book = new Book(
    bookForm[0].value,
    bookForm[1].value,
    bookForm[2].value,
    bookForm[3].checked
  );
  crapper();
  myLibrary.push(book);
  updateLibrary();
}

function crapper() {
  bookForm[0].value = "";
  bookForm[1].value = "";
  bookForm[2].value = "";
  bookForm[3].checker = false;
}
function updateLibrary() {
  library.innerHTML = "";
  for (i in myLibrary) {
    //Element Variables
    let card = document.createElement("div");
    let cardHeader = document.createElement("div");
    let btnGroup = document.createElement("div");
    let removeCard = document.createElement("button");
    let toggleRead = document.createElement("button");
    let title = document.createElement("span");
    let author = document.createElement("span");
    let pages = document.createElement("span");
    let read = document.createElement("span");
    
    // Styling / Attributes
    card.className = "card";
    title.textContent = myLibrary[i].title;
    author.textContent = "Author: " + myLibrary[i].author;
    pages.textContent = "Pages: " + myLibrary[i].pages;
    read.textContent = "Read: " + myLibrary[i].read;
    cardHeader.className = "cardHeader";
    removeCard.className = "remove-button";
    removeCard.dataset.key = i;
    removeCard.textContent = "X";
    toggleRead.className = "toggle-button";
    toggleRead.dataset.toggle = i;
    toggleRead.textContent = "R";

    //Append Elements
    btnGroup.appendChild(removeCard);
    btnGroup.appendChild(toggleRead);
    cardHeader.appendChild(btnGroup);
    cardHeader.appendChild(title);
    card.appendChild(cardHeader);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    library.appendChild(card);
  }
}
