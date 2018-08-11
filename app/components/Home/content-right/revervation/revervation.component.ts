import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-revervation',
  templateUrl: './revervation.component.html',
  styleUrls: ['./revervation.component.css']
})
export class RevervationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if (!localStorage.getItem('currentUser') && !sessionStorage.getItem('currentUser')) {
      this.router.navigate(['login']);
    }
  }

}
