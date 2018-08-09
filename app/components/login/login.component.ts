import {Component, OnInit} from '@angular/core';
// import './../../../assets/js/Tran_js/Login/login.js';
// import model
import {User} from '../../Models/login/user';
import {LoginService} from '../../service/login/login.service';

declare var jquery: any;  // declare cho thu vien ben ngoai
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User();

  constructor(private loginService: LoginService) {
  }

  loginUser(setPassword) {
    console.log(this.loginService.checkLogin(this.user.userName, this.user.passWord, this.user.remember));
    setPassword.reset();
  }

  logOut() {
    this.loginService.logOut();
  }

  ngOnInit() {
    $('.error').addClass('text-danger');
  }
}
