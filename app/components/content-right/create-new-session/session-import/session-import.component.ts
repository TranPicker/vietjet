import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ImportService} from '../../../../service/import/import.service';
import {Import} from '../../../../Models/import/import';

@Component({
  selector: 'app-session-import',
  templateUrl: './session-import.component.html',
  styleUrls: ['./session-import.component.css']
})
export class SessionImportComponent implements OnInit {
  public datas: Import[];
  constructor(private importService: ImportService) {
  }

  ngOnInit() {
    this.importService.getListImport().subscribe((datas) => {
      this.datas = datas;
    });
  }

}
