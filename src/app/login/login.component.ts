import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthenticationService,private router:Router) { }
  mode:number=0;
  ngOnInit() {
  }

  onLogin(user){
    this.authService.login(user)
      .subscribe(resp=>{
        let jwtToken=resp.headers.get('Authorization');
        this.authService.saveToken(jwtToken);
        this.router.navigateByUrl('/tasks');
      },
        err=>{
        this.mode=1;
        }
      )

  }
}
