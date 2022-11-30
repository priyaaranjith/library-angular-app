import { Component } from '@angular/core';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent {
  Name=""
  AdhaarNumber=""
  Address=""
  PinCode=""
  DOB=""
  EmailId=""
  PhoneNumber=""
  Username=""
  Password=""
  ConfirmPassword=""


  readValues=()=>
  {
    let data:any= {
      Name:this.Name,
      AdhaarNumber:this.AdhaarNumber,
      Address:this.Address,
      PinCode:this.PinCode,
      DOB:this.DOB,
      EmailId:this. EmailId,
      PhoneNumber:this.PhoneNumber,
      Username:this.Username,
      Password:this. Password,
      ConfirmPassword:this.ConfirmPassword
    }
    console.log(data)
  }







}





