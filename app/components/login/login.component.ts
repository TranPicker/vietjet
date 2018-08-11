import {Component, OnInit} from '@angular/core';
// import './../../../assets/js/Tran_js/Login/login.js';
// import model
import {User} from '../../Models/login/user';
import {LoginService} from '../../service/login/login.service';
import {Router} from '@angular/router';

// sweet alert
import swal from 'sweetalert';

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
    this.loginService.checkLogin(this.user.userName, this.user.passWord).subscribe((res) => {
      // console.log('Token ' + res.token);
      if (this.user.remember) {
        localStorage.setItem('currentUser', JSON.stringify(res.token));
      } else {
        sessionStorage.setItem('currentUser', JSON.stringify(res.token));
      }
      // console.log('Current User is: ' + localStorage.getItem('currentUser'));

      this.router.navigate(['home']);
      swal('Login Success!', 'Welcome to home page!', 'success');
    }, error1 => {
      console.log('error: ' + error1);
      swal('Login Failure!', 'Username or Password wrong!', 'error');
    });
    setPassword.reset();
  }


  logOut() {
    localStorage.removeItem('currentUser');
    console.log('Current User is:' + localStorage.getItem('currentUser'));
  }
}

