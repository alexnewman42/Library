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

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkein", 295, "not read yet");

console.log(theHobbit.info());