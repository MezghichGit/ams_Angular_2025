import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authentication } from '../services/authentication';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {


  username: string = '';
  password: string = '';
  showPassword: boolean = false;
  invalidLogin: boolean = false;
  errorMessage: string = 'Invalid username or password';
  successMessage = "Authentication success";
  // Fonction toggle mot de passe
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  


  constructor(private router: Router, private loginservice: Authentication) { }

  ngOnInit() {
  }

  /*checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)) {
     //console.log(this.username+" "+this.password)
      this.router.navigate([''])
    } else
      this.invalidLogin = true
  }*/
  
 checkLogin() {
    this.loginservice.authenticate(this.username, this.password).subscribe(
        (data:any) =>  { console.log(data), this.router.navigate(['/listProviders'])},
        (error:any)  =>  this.invalidLogin = true
    );
  }
  
}