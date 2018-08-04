import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication-service.service';

@Component({
  selector: 'app-main-admin',
  templateUrl: './main-admin.component.html',
  styleUrls: ['./main-admin.component.css']
})
export class MainAdminComponent implements OnInit {
  task=null;
  constructor(private authService: AuthenticationService ) { }

  ngOnInit() {
  }

  addTask(task){
    this.authService.AddTask(task).subscribe(
      resp=>{
        this.task=resp;
      },
      err=>{
        console.log(err);
      }
    );
  }
}
