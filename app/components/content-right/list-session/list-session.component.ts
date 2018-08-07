import {Component, OnInit, OnDestroy} from '@angular/core';
// Model
import {Listsession} from '../../../Models/listsession/listsession';
import {Subject} from 'rxjs';
// Service
import {ListsessionService} from '../../../service/listsession/listsession.service';

@Component({
  selector: 'app-list-session',
  templateUrl: './list-session.component.html',
  styleUrls: ['./list-session.component.css']
})
export class ListSessionComponent implements OnInit, OnDestroy {
  private datas: Listsession[];
  oneSession: Listsession;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private listSessionService: ListsessionService) {  // => khai bao de su dung service bat buoc tiem vao constructor
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.getAllSession();
  }

  private getAllSession(): void {
    this.listSessionService.getAllListSesison().subscribe(datas => {
      this.datas = datas;
      this.dtTrigger.next();
    });
  }

  ngOnDestroy() {}

  // public getSessionById(id: number) {
  //   console.log('Get Session By Id');
  //   this.listSessionService.getSessionById(id).subscribe(session => this.oneSession = session);
  //   console.log(this.oneSession);
  // }
  //
}
