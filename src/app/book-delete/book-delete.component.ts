import { Component } from '@angular/core';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent {
  BookTitle=""
  Search=""


  readValues=()=>
  {
    let data : any ={
      BookTitle:this.BookTitle
      
    }
  }


}
