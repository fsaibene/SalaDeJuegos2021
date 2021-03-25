import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SalaDeJuegos';
  public name$: Observable<string>;
  
  constructor(public auth: AuthService){
    this.name$ = this.auth.loggedUser.asObservable();
  }
  ngOnInit(): void {
  }
  public isLogged() {
    return this.auth.isLoggedIn;
  }
  public logout() {
    this.auth.signOut();
  }
}
