import { Component } from '@angular/core';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent {
  BookTitle=""



  readValues=()=>
  {
    let data:any={
      "BookTitle":this.BookTitle}
      console.log(data)
    }
  }






