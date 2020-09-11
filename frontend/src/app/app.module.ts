import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
 
import { AppComponent } from './app.component';

import { routing } from './app.routing';
 

import { UserService } from './controllers/user.service';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { FeedComponent } from './views/feed/feed.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    routing,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }