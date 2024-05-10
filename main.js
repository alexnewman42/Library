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

const addOrUpdateBook = () => {
    const dataArrIndex = bookData.findIndex((item) => item.id === currentBook.id);
    const bookObj = {
        id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
        title: titleInput.value,
        author: authorInput.value,
        pages: pagesInput.value,
        read: readInput.value,
    };
    if (dataArrIndex === -1) {
        bookData.unshift(bookObj);
    }
};

const updateBookContainer = () => {
    bookData.forEach(({id, title, author, pages, read}) => {
        (booksContainer.innerHTML += `
            <div class="book" id="${id}"></div>
            <p><strong>Title: </strong>${title}</p>
            <p><strong>Author: </strong>${author}</p>
            <p><strong>Pages: </strong>${pages}</p>
            <p><strong>Read: </strong>${read}</p>
            <button type="button" class="btn">Edit</button>
            <button type="button" class="btn">Delete</button>
        `)
        }
    );
};

const reset = () => {
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.value = false;
    bookForm.classList.toggle("hidden");
    currentBook = {};
};

openBookFormBtn.addEventListener("click", () => bookForm.classList.toggle("hidden"));
closeBookFormBtn.addEventListener("click", () => {
    const formInputsContainValues = titleInput.value || authorInput.value || pagesInput.value || readInput.value;
    if (formInputsContainValues) {
        confirmCloseDialog.showModal();
    } else {
        reset();
    }
});
cancelBtn.addEventListener("click", () => confirmCloseDialog.close(
));
discardBtn.addEventListener("click", () => {
    confirmCloseDialog.close();
    reset();
});
bookForm.addEventListener("submit", (e) => {
    e.preventDefault();


    reset();
});