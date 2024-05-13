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
    updateBookContainer();
    reset();
};

const updateBookContainer = () => {
    booksContainer.innerHTML = "";
    bookData.forEach(({id, title, author, pages, read}) => {
        (booksContainer.innerHTML += `
            <div class="book" id="${id}"></div>
            <p><strong>Title: </strong>${title}</p>
            <p><strong>Author: </strong>${author}</p>
            <p><strong>Pages: </strong>${pages}</p>
            <p><strong>Read: </strong>${read}</p>
            <button type="button" class="btn" onclick="editBook(this)">Edit</button>
            <button type="button" class="btn" onclick="deleteBook(this)">Delete</button>
        `)
        }
    );
};

const deleteBook = (buttonEl) => {
    const dataArrIndex = bookData.findIndex((item) => item.id === buttonEl.parentElement.id);
    buttonEl.parentElement.remove();
    taskData.splice(dataArrIndex, 1);
};

const editBook = (buttonEl) => {
    const dataArrIndex = bookData.findIndex((item) => item.id === buttonEl.parentElement.id);
    currentBook = bookData[dataArrIndex];
    titleInput.value = currentBook.title;
    authorInput.value = currentBook.author;
    pagesInput.value = currentBook.pages;
    readInput.value = currentBook.read;

    addOrUpdateBookBtn.innerText = "Update Book";
    bookForm.classList.toggle("hidden");
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
    addOrUpdateBook();
});