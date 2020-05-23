let button = document.querySelector("button");
let books = document.querySelector("#books");
	button.addEventListener("click", addBook);

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

	function addBook() {
		let t = prompt("Title:");
		let a = prompt("Author:");
		let p = prompt("Pages:");
		let s = prompt("Read?");
		let book = new Book(t, a, p, s);
		library.push(book);
		console.log(library);
		render();
	}

	function render() {
		books.innerHTML = "";
		for (e in library) {
			books.innerHTML += "<div class='book-card'>" +
								"<span class='title'>Title: " + library[e].title + "</span>" +
								"<span class='author'>Author: " + library[e].author + "</span>" +
								"<span class='pages'>Pages: " + library[e].pages + "</span>" +
								"<span class='read-status'>Read? " + library[e].status + "</span>" +
								"</div>";
		}
	}

let book1 = new Book("The Client", "John Grisham", "498", "Yes");
let book2 = new Book("A Tale of Two Cities", "Charles Dickens", "835", "No");
let book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "218", "Yes");
let book4 = new Book("Breathless", "Dean Koontz", "434", "Yes");
library.push(book1);
library.push(book2);
library.push(book3);
library.push(book4);
render();