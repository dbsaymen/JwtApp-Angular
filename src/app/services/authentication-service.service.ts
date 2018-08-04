import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private host:string="http://localhost:8080";
  private jwtToken=null;
  private roles=[];

  constructor(private http: HttpClient) { }
  login(user){
    return this.http.post(this.host+"/login",user,{observe: 'response'});
  }

  saveToken(jwtToken){
    localStorage.setItem('token',jwtToken);
    this.decodeToken(jwtToken);
  }
  decodeToken(jwtToken){
    let jwtHelper=new JwtHelperService();
    this.roles=jwtHelper.decodeToken(jwtToken).roles;
  }

  loadToken(){
    this.jwtToken=localStorage.getItem('token');

  }

  getTasks(){
    if(this.jwtToken ==null) this.loadToken();

    return this.http.get(this.host+"/tasks",{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }

  logout(){
    this.jwtToken=null;
    this.roles=[];
    localStorage.removeItem('token');
  }
  AddTask(tasks){
    return this.http.post(this.host+"/tasks",tasks,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }

  AddUser(user){
    return this.http.post(this.host+"/register",user);
  }

  isAdmin(){
    this.loadToken();
    if(this.jwtToken!=null)
      this.decodeToken(this.jwtToken);
    for (let r of this.roles)
      if (r.authority=='ADMIN'){
        return true;
      }
      return false;
  }
}
