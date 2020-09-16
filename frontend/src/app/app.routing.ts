import { Routes, RouterModule }   from '@angular/router'; 
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component'
import { FeedComponent } from './views/feed/feed.component';
 
 
const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'feed', component: FeedComponent }
];
 
export const routing = RouterModule.forRoot(appRoutes);