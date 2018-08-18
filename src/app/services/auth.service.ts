import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  private baseUrl: string = '';
  constructor(private router: Router,
              private http: HttpClient) 
  {
    this.baseUrl = 'http://localhost:63275';
  }

  get IsLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login(login: any) {
    this.loggedIn.next(true);
    return;      
  }
}
