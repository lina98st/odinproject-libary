const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readCheckbox = document.getElementById("read");
const addBookBtn = document.getElementById("addBookBtn");

addBookBtn.addEventListener("click", () => {
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = parseInt(pagesInput.value);
    const read = readCheckbox.checked;

    addBookToLibrary(title, author, pages, read);

    displayBooks();

    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readCheckbox.checked = false;
});


const myLibrary = [];

function Book(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBooks() {
    const elem = document.getElementById("library");
    elem.innerHTML = "";
    myLibrary.forEach(book => {
        const newBookDiv = document.createElement("div");
        elem.appendChild(newBookDiv)
        newBookDiv.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read: ${book.read ? "Yes" : "No"}</p>
      `;

    });
}

addBookToLibrary("Harry Potter", "J.K. Rowling", 400, true);
addBookToLibrary("Der Hobbit", "J.R.R. Tolkien", 310, false);

displayBooks();

