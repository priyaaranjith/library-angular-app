import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  Username=""
  Password=""

  constructor(private route :Router){}
  



  readValues =() =>
  {
    let data:any = {
      "Username":this.Username,
      "Password":this.Password}
      
      console.log(data)

      if (this.Username=="admin" && this.Password=="12345"){
        this.route.navigate(['entry'])
      }
      else{
        alert("invalid credentials")
      }
    }
  }


