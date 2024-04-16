const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.infoString = this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;
    this.info = function() {
        return this.infoString;
    };
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function displayBooks() {
    while (i < myLibrary.length) {
        console.log(myLibrary[i].info);
        i++;
    };
}

const fantasyLibrary = new Library();
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkein", 295, "not read yet");

fantasyLibrary.addBookToLibrary(theHobbit);
fantasyLibrary.displayBooks();
