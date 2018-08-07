import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
// service and Class
import {SessionDetail} from '../../../Models/session-detail/session-detail';
import {SessionDetailService} from '../../../service/sessiondetail/session-detail.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.css']
})
export class SessionDetailComponent implements OnInit {

  constructor(private http: HttpClient, public sessionDetail: SessionDetailService, private activeRoute: ActivatedRoute) {
  }

// lay id on url bang ActivateRoute
  id = +this.activeRoute.snapshot.url[1].path;

  private datas: SessionDetail[];

  getSessionDetail() {
    const _id = this.id;
    console.log(_id);
    this.sessionDetail.getSessionDetail(_id).subscribe((datas) => {
      this.datas = datas;
    });

  }

  ngOnInit() {
    this.getSessionDetail();
  }
}
