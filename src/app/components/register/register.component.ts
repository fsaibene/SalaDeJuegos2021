import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  User: any = ['Super Admin', 'Author', 'Reader'];
  public password: string = "";
  public email: string = "";
  public username: string = "";

  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit() {

  }

  public register():void{
    this.auth.signUp(this.email, this.password).then(() => {
      console.log("Usuario creado!")
      // this.router.navigate(['login']);
    })
  }
}
