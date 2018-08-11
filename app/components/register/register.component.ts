import {Component, OnInit, OnDestroy} from '@angular/core';
import {RegisterService} from '../../service/register/register.service';
import {User} from '../../Models/login/user';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit, OnDestroy {
  public user: User = new User();
  constructor(private registerService: RegisterService) {
  }

  subscription: Subscription;

  ngOnInit() {
  }

  addNewUser() {
    this.subscription = this.registerService.addUser(this.user).subscribe(res => {
      console.log('Response: ' + res);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
