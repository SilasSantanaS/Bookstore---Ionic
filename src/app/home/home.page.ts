import { Component } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  books: Book[] =
  [
    { id: '1', title: 'Harry Potter and the Philosopher\'s Stone', photoUrl: 'https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg', author: 'J. K. Rowling', price: 26.65 },
    { id: '2', title: 'The Little Prince', photoUrl: 'https://images-na.ssl-images-amazon.com/images/I/61Zi2jjgfIL.jpg', author: 'Antoine de Saint-Exupéry', price: 34.58 },
    { id: '3', title: 'Dream of the Red Chamber', photoUrl: 'https://images-na.ssl-images-amazon.com/images/I/81UjsCGC6rL.jpg', author: '	Cao Xueqin', price: 15.99 },
    { id: '4', title: 'The Hobbit', photoUrl: 'https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg', author: '	J. R. R. Tolkien', price: 59.99 },
    { id: '5', title: 'And Then There Were None', photoUrl: 'https://images-na.ssl-images-amazon.com/images/I/81B9LhCS2AL.jpg', author: 'Agatha Christie', price: 32.85 },
  ];

  constructor() {}

}
