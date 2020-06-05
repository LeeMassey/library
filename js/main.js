let addBookForm = document.querySelector("#add-book");
let addBookButton = document.querySelector("#submit-book");
let editBooksButton = document.querySelector("#edit-books");
let showFormButton = document.querySelector("#show-form");
let closeFormButton = document.querySelector("#close-form");
let deleteButtons = document.querySelector(".delete-button");
let books = document.querySelector("#books");
let editDisplay = "none";
let deleteIndex = 0;

showFormButton.addEventListener("click", toggleForm);
closeFormButton.addEventListener("click", toggleForm);
addBookButton.addEventListener("click", addBook);
editBooksButton.addEventListener("click", toggleEdit);

addBookForm.addEventListener("keyup", function() {
	if (event.key === "Enter") {
		event.preventDefault();
		addBookButton.click();
	}
});

let library = [];

function Book(title, author, pages, status) {
	this.title = title,
	this.author = author,
	this.pages = pages,
	this.status = status,
	this.info = function() {
	 return title + " by " + author + ", " + pages + " pages long, " + status + ".";
	};
}

function toggleForm() {
	addBookForm.classList.toggle("hide-form");
}

function toggleEdit() {
	if (editDisplay === "none") {
		editDisplay = "block";
	}
	else {
		editDisplay = "none";
	}
	render();
}

function addBook() {
	let t = document.querySelector("#book-title").value;
	let a = document.querySelector("#book-author").value;
	let p = document.querySelector("#book-pages").value;
	let s = document.querySelector("#read-status").checked;

	if (t != "" && a != "" && p != "" && typeof(Number(p)) === "number") {
		if (s === true) {
			s = "Yes";
		}
		else {
			s = "No";
		}
		let book = new Book(t, a, p, s);
		library.push(book);
		clearInputs();
		toggleForm();
		render();
	}
	else {
		alert("Please check that all fields are correct, and try again.");
	}
}

function deleteBook(d) {
	library.splice(d, 1);
	render();
}

function clearInputs() {
	let inputs = document.querySelectorAll("input");
	for (e in inputs) {
		inputs[e].value ="";
	}
	document.querySelector("#read-status").checked = false;
}

function render() {
	books.innerHTML = "";
	deleteIndex = 0;
	for (e in library) {
		books.innerHTML += "<div class='book-card'>" +
							"<div class='card-top'><span class='title'>" + library[e].title + "</span>" +
							"<span class='author'>by " + library[e].author + "</span></div>" +
							"<div class='card-bottom'><span class='pages'>" + library[e].pages + " pages</span>" +
							"<span class='read-status'>Read? " + library[e].status + "</span></div>" +
							"<div style='background: darkred; color: white; padding: 7px; cursor: pointer; display: " + editDisplay + "' onclick='deleteBook(" + deleteIndex + ")'>Delete</div></div>";
		deleteIndex++;
	}
}

/***** This is just to have some "books" present when page loads, since there is no actual persistent data at this point in time. *****/

let book1 = new Book("The Client", "John Grisham", "498", "Yes");
let book2 = new Book("A Tale of Two Cities", "Charles Dickens", "835", "No");
let book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "218", "Yes");
let book4 = new Book("Breathless", "Dean Koontz", "434", "Yes");
library.push(book1);
library.push(book2);
library.push(book3);
library.push(book4);

render();