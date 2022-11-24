import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { BookEntryComponent } from './book-entry/book-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserRegComponent,
    UserloginComponent,
    BookEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
