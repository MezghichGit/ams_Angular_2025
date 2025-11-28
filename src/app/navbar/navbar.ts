import { Component, OnInit } from '@angular/core';
import { Authentication } from '../services/authentication';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {

  constructor(public authenticationService: Authentication) { }


  ngOnInit() {
  }

}