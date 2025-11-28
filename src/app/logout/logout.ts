import { Component, OnInit } from '@angular/core';
import { Authentication } from '../services/authentication';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: false,
  templateUrl: './logout.html',
  styleUrl: './logout.css'
})
export class Logout implements OnInit {

  constructor(
    private authenticationService: Authentication, private router: Router) {

  }

  ngOnInit() {
    this.authenticationService.logOut();
    this.router.navigate(['signin']);
  }

}