import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn:boolean = false;

  constructor(private router: Router, private http: HttpClient) { }

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }
  
  // user details based on jurney number
  getUserDetails(id,data): Observable<any>{
    return this.http.post<any>('http://localhost:4546/api/user/jurneydetails/'+id,data);
  }
}
