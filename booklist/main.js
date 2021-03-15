
 //Book Class: Represents a book
 class Book {
     constructor(title,author,category,language,isbn)
     {
         this.title = title;
         this.author=author;
         this.category=category;
         this.language=language;
         this.isbn=isbn;
     }
    }
//UI Class:Handle UI Tasks
class UI
{
 static displayBooks() {
 const books=Store.getBooks();
 books.forEach((book) => UI.addBookToList(book));
}
static addBookToList(book)
{
const list = document.querySelector('#book-list');
const row = document.createElement('tr');

row.innerHTML = `
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.category}</td>
<td>${book.language}</td>
<td>${book.isbn}</td>

<td><a href="#" class="btn btn-danger btn-sm
delete">X</td>
`;
list.appendChild(row);
}
static deleteBook(el)
    {
      if(el.classList.contains('delete'))
      {
        el.parentElement.parentElement.remove();
      }
    }
    static showAlert(message,className)
    {
       const div= document.createElement('div');
       div.className = `alert alert-${className}`;
       div.appendChild(document.createTextNode(message));
       const container = document.querySelector('.container');
       const form = document.querySelector('#book-form');
       container.insertBefore(div,form);
       //Vanish in 3 seconds
       setTimeout(() =>  document.querySelector('.alert').remove(),3000);
    }
static clearFields()
    {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#category').value = '';
        document.querySelector('#language').value = '';
        document.querySelector('#isbn').value = '';
         }
    }  
    
// Sore Class

class Store{
    static getBooks()
    {
       let books;
       if(localStorage.getItem('books')=== null)
       {
           books = [];
           
       }else
       {
    
    
           books = JSON.parse(localStorage.getItem('books'));
       }
       return books;
    }
    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books',JSON.stringify(books));
    }
    static removeBook(isbn)
    {
    const books = Store.getBooks();
    books.forEach((book,index) => {
        if(book.isbn === isbn) {
            books.splice(index,1);
        }
    });

    localStorage.setItem('books',JSON.stringify(books));
    }
    }

//Event:Display Books
document.addEventListener('DOMContentLoaded',UI.displayBooks);
 //Add a book

 document.querySelector('#book-form').addEventListener('submit',(e)=> {
    //actual submit
    e.preventDefault();
 //Get form Value
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const category = document.querySelector('#category').value;
    const language= document.querySelector('#language').value;
    const isbn = document.querySelector('#isbn').value;
//validate
if( title === '' || author === ''  || category ==='' || language === '' || isbn === '')
{
   UI.showAlert('Please Fill in  all Fields','danger');
}else {

 //instantiate Book
const book = new Book(title,author,category,language,isbn);
//console.log(book)

//Add book store

Store.addBook(book);

//Add book to ui
UI.addBookToList(book);

//Show success Message
UI.showAlert('Book Added','success');

//clear fields
UI.clearFields();
 
 }
});

 //Event:Remove a Book from UI
 document.querySelector('#book-list').addEventListener('click',(e) => {
 // console.log(e.target)
   UI.deleteBook(e.target);

//Remove book from the store
Store.removeBook(e.target.parentElement.previousElementSibling.textContent);


//Show success Message
UI.showAlert('Book Removed','success');
});