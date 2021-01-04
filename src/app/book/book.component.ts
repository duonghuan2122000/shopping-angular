import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Book } from 'src/model/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  book: Book = {
    name: 'Mat biec',
    thumbnail: 'https://bulma.io/images/placeholders/1280x960.png',
    price: 100000,
    discount: 2,
    author: 'Nguyễn Nhật Ánh',
    producer: 'Nhà xuất bản Kim Đồng',
    year: 2018
  };

  quantity = new FormControl(1);

  constructor() { }

  ngOnInit(): void {
  }

  handleIncreaseQuantity(): void {
    let quantity = parseInt(this.quantity.value) + 1;

    this.handleUpdateQuantity(quantity);

  }

  handleDecreaseQuantity(): void {
    let quantity = parseInt(this.quantity.value) - 1;

    this.handleUpdateQuantity(quantity);
  }

  handleUpdateQuantity(quantity: number): void {
    if(quantity <= 1 || quantity > 99){
      quantity = 1;
    }

    this.quantity.setValue(quantity);
  }

}
