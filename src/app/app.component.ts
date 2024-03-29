import { Component } from '@angular/core';
import {AuthenticationService} from './services/authentication-service.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private authService: AuthenticationService){}
  isadmin(){
    return this.authService.isAdmin();
  }
  logOut(){
    this.authService.logout();
  }
}
