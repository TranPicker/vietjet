import { Component, OnInit } from '@angular/core';


declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  // public  toggleIcon()
  // {
  //   $('.hamburger').toggleClass("is-active");
  // }
  ngOnInit() {

  }
  logout() {
    console.log('logout is working!');
    // localStorage.removeItem('currentUser');
  }
}
