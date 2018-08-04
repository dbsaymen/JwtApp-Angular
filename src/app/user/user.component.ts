import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  tasks;
  constructor( private authService: AuthenticationService,private router:Router ) { }

  ngOnInit() {
    this.authService.getTasks()
      .subscribe(data => {
          this.tasks=data;
      },
        err=>{
          this.authService.logout();
          this.router.navigateByUrl('/login');
        }
      );
  }

}
