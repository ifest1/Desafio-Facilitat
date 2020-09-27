import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxInputErrorsModule } from 'ngx-input-errors';
import { errorMessages } from './config/config-nx-input-errors';
 
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
    FormsModule,
    ReactiveFormsModule,
    NgxInputErrorsModule.forRoot({
      defaultLanguage: 'pt',
      errorMessages 
    }),
    routing,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }