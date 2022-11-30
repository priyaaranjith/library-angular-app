import { Component } from '@angular/core';

@Component({
  selector: 'app-book-issue',
  templateUrl: './book-issue.component.html',
  styleUrls: ['./book-issue.component.css']
})
export class BookIssueComponent {
  Name=""
  BookTitle=""
  Dateofissue=""
  MembershipNumber=""



  readValues=()=>
  {
    let data:any ={
      Name:this.Name,
      BookTitle:this.BookTitle,
      Dateofissue:this.Dateofissue,
      MembershipNumber:this.MembershipNumber
    }
    console.log(data)
    

  }


}
