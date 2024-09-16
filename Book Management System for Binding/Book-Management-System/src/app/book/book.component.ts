import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Book } from '../models/book.model';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  book:Book = 
  {
    id: 0,
    title: '',
    author: ''
  };
  books:Book[] = [];
  newIndex:number = 1;
  addBook(book:Book):void{
    console.log("Adding Book");
    book.id = this.newIndex;
    this.newIndex += 1;
    sessionStorage.setItem(book.id.toString(), JSON.stringify(book));
    this.getAllBooks();
  }

  getAllBooks(): void {
    console.log("Getting All Books");
    let keys: string[] = Object.keys(sessionStorage);
    this.books = [];
    for (let key of keys) {
      let item = sessionStorage.getItem(key);
      if (item) {
        let currentBook:Book = JSON.parse(item);
        this.books.push(currentBook);
        this.newIndex = Math.max(this.newIndex-1, currentBook.id) + 1;
      }
    }
  }

  deleteBook(id: number): void {
    console.log("Deleting a Book");
    sessionStorage.removeItem(id.toString());
    this.getAllBooks();
  }

  ngOnInit(){
    this.getAllBooks();
  }
}
