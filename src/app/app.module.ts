import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { BookEntryComponent } from './book-entry/book-entry.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookIssueComponent } from './book-issue/book-issue.component';
import { RouterModule, Routes, ROUTES } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';

const myRoute:Routes=[
  {
    path:"",
    component:AdminComponent
  },
  {
    path:"reg",
    component:UserRegComponent
  },
  {
    path:"login",
    component:UserloginComponent
  },
  {
    path:"entry",
    component:BookEntryComponent
  },
  {
    path:"view",
    component:ViewBookComponent
  },
  {
    path:"search",
    component:BookSearchComponent
  
  },
  {
    path:"delete",
    component:BookDeleteComponent
  },
  {
    path:"issue",
    component:BookIssueComponent
  }

]





@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserRegComponent,
    UserloginComponent,
    BookEntryComponent,
    ViewBookComponent,
    BookSearchComponent,
    BookDeleteComponent,
    BookIssueComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
