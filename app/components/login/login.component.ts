import {Component, OnInit} from '@angular/core';
// import './../../../assets/js/Tran_js/Login/login.js';
// import model
import {User} from '../../Models/login/user';
import {LoginService} from '../../service/login/login.service';
import {Router} from '@angular/router';

declare var jquery: any;  // declare cho thu vien ben ngoai
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User();

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
    this.logOut();
    $('.error').addClass('text-danger');
  }

  loginUser(setPassword) {
    console.log(this.loginService.checkLogin(this.user.userName, this.user.passWord, this.user.remember));
    if (typeof(Storage) !== 'undefined') {
      if (1) {
        window.localStorage.setItem('currentUser', JSON.stringify('29472984729'));
        this.router.navigate(['home']);
      } else {
        window.sessionStorage.setItem('currentUser', JSON.stringify('826742874293749'));
        this.router.navigate(['home']);
      }
    }
    setPassword.reset();
    console.log(localStorage.getItem('currentUser'));
    this.router.navigate(['home']);
  }

  logOut() {
    localStorage.removeItem('currentUser');
    console.log('Current User is:' + localStorage.getItem('currentUser'));
  }
}
