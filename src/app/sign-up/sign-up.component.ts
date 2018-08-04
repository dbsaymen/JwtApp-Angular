import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  response;
  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }
  addUser(user){
    this.authService.AddUser(user).subscribe(resp=>{
        this.response=resp;
      },
      err=>{
        console.log(err);
      }
    )
  }
}
