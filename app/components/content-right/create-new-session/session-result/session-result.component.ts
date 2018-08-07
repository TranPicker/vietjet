import {Component, OnInit} from '@angular/core';
import {ResultService} from '../../../../service/result/result.service';
import {Result} from '../../../../Models/result/result';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-session-result',
  templateUrl: './session-result.component.html',
  styleUrls: ['./session-result.component.css']
})
export class SessionResultComponent implements OnInit {
  private datas: Result[];
  constructor(private resultService: ResultService) {
  }

  ngOnInit() {
    this.resultService.getListResult().subscribe((datas) => {
      this.datas = datas;
    });
  }

}
