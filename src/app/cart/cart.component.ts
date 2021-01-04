import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Book } from 'src/model/book.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  books: Book[] = [
    {
      id: 1,
      name: 'Mat biec',
      thumbnail: 'https://bulma.io/images/placeholders/1280x960.png',
      price: 100000,
      discount: 2,
      quantity: 1,
      quantityForm: new FormControl(1)
    },
    {
      id: 2,
      name: 'Mat biec',
      thumbnail: 'https://bulma.io/images/placeholders/1280x960.png',
      price: 100000,
      discount: 0,
      quantity: 1,
      quantityForm: new FormControl(1)
    }
  ];

  total: number = 0;



  constructor() { }

  ngOnInit(): void {
    this.updateCart();

    for(let book of this.books){
      book.quantityForm?.valueChanges.subscribe(value => {
        book.quantity = value;
        this.updateCart();
      });
    }
  }

  handleRemoveBook(bookId: number): void {
    let index = this.books.findIndex(book => book.id == bookId);
    if(index !== -1){
      this.books.splice(index, 1);
      this.updateCart();
    }
  }

  updateCart(): void {
    let total: number = 0;
    for(let book of this.books){
      total += (book.quantity || 1) * book.price;
      book.quantityForm?.valueChanges.subscribe(value => {
        book.quantity = value;
      })
    }
    this.total = total;
  }

}
