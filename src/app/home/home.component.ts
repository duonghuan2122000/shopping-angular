import { Component, OnInit } from '@angular/core';
import { Book } from 'src/model/book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: Book[] = [
    {
      id: 1,
      name: 'Mắt biếc',
      thumbnail: 'https://bulma.io/images/placeholders/1280x960.png',
      price: 100000,
      discount: 0
    },
    {
      id: 2,
      name: 'Cho tôi một vé đi tuổi thơ',
      thumbnail: 'https://bulma.io/images/placeholders/1280x960.png',
      price: 100000,
      discount: 2
    },
    {
      id: 3,
      name: 'Cha giàu cha nghèo',
      thumbnail: 'https://bulma.io/images/placeholders/1280x960.png',
      price: 100000,
      discount: 3
    },
    {
      id: 4,
      name: 'Trên đường băng',
      thumbnail: 'https://bulma.io/images/placeholders/1280x960.png',
      price: 100000,
      discount: 5
    },
    {
      id: 5,
      name: 'Cafe buổi sáng',
      thumbnail: 'https://bulma.io/images/placeholders/1280x960.png',
      price: 100000,
      discount: 0
    },
    {
      id: 6,
      name: 'Nếu tôi biết được khi còn 20',
      thumbnail: 'https://bulma.io/images/placeholders/1280x960.png',
      price: 100000,
      discount: 0
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
