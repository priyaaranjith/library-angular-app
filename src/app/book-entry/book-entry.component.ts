import { Component } from '@angular/core';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {
  BookTitle=""
  Author=""
  Description=""
  Publisher=""
  Language=""
  Distributor=""
  ReleasedYear=""
  Username=""
  Password=""

readValues=()=>
{
  let data : any={
    BookTitle:this.BookTitle,
    Author:this.Author,
    Description:this.Description,
    Publisher:this.Publisher,
    Language:this.Language,
    Distributor:this.Distributor,
    ReleasedYear:this.ReleasedYear,
    Username:this.Username,
    Password:this.Password

  }
  console.log(data)
}


}
