let myLibrary = [];


function Book() {

}

function addBookToLibrary() {

}

let newBookbtn = document.querySelector("#new-book-btn");
newBookbtn.addEventListener("click", function () {
    let newBookForm = document.querySelector('#new-book-form');
    newBookForm.style.display = "block";
});