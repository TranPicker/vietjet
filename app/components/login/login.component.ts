import {Component, OnInit} from '@angular/core';
import  './../../../assets/js/Tran_js/Login/login.js';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public userName: string = '';
  public passWord: string = '';

  constructor() {
  }

  showInfor(event) {
    console.log(this.userName +"----"+ this.passWord);
  }
  ngOnInit() {
  }
}
