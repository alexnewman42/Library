const bookForm = document.getElementById("book-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openBookFormBtn = document.getElementById("open-book-form-btn");
const closeBookFormBtn = document.getElementById("close-book-form-btn");
const addOrUpdateBookBtn = document.getElementById("add-or-update-book-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const booksContainer = document.getElementById("books-container");
const titleInput = document.getElementById("title-input");
const authorInput = document.getElementById("author-input");
const pagesInput = document.getElementById("pages-input");
const readInput = document.getElementById("read-input");

const bookData = [];
let currentBook = {};

openBookFormBtn.addEventListener("click", () => bookForm.classList.toggle("hidden"));
closeBookFormBtn.addEventListener("click", () => confirmCloseDialog.showModal());
cancelBtn.addEventListener("click", () => confirmCloseDialog.close());
discardBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
    bookForm.classList.toggle("hidden");
});