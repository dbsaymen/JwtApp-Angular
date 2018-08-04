import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule,HttpClient} from '@angular/common/http';


import { AppComponent } from './app.component';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import {AuthenticationService} from './services/authentication-service.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signUp', component: SignUpComponent},
  { path: 'tasks', component: UserComponent},
  { path: 'newtask', component: MainAdminComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainAdminComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
