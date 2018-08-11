import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Location} from '@angular/common';
// service and Class
import {SessionDetail} from '../../../../Models/session-detail/session-detail';
import {SessionDetailService} from '../../../../service/sessiondetail/session-detail.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.css']
})
export class SessionDetailComponent implements OnInit {

  constructor(private http: HttpClient,
              public sessionDetail: SessionDetailService,
              private activeRoute: ActivatedRoute,
              private location: Location,
              private router: Router
  ) {
  }

// lay id on url bang ActivateRoute
  id = +this.activeRoute.snapshot.paramMap.get('id');

  private datas: SessionDetail[];

  getSessionDetail() {
    const _id = this.id;
    console.log(this.activeRoute.snapshot.paramMap.get('id'));
    console.log(typeof _id);
    this.sessionDetail.getSessionDetail(_id).subscribe((datas) => {
      this.datas = datas;
    });

  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    if (!localStorage.getItem('currentUser') && !sessionStorage.getItem('currentUser')) {
      this.router.navigate(['login']);
    }
    this.getSessionDetail();
  }
}
