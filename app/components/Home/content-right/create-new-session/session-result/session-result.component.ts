import {Component, OnInit} from '@angular/core';
import {ResultService} from '../../../../../service/result/result.service';
import {Result} from '../../../../../Models/result/result';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-session-result',
  templateUrl: './session-result.component.html',
  styleUrls: ['./session-result.component.css']
})
export class SessionResultComponent implements OnInit {
  private datas: Result[];

  constructor(private resultService: ResultService, private router: Router) {
  }

  ngOnInit() {
    if (!localStorage.getItem('currentUser') && !sessionStorage.getItem('currentUser')) {
      this.router.navigate(['login']);
    }

    this.resultService.getListResult().subscribe((datas) => {
      this.datas = datas;
    });
  }

}
