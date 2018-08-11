import {Component, OnInit, OnDestroy} from '@angular/core';
// Model
import {Listsession} from '../../../../Models/listsession/listsession';
import {Subject} from 'rxjs';
import {Subscription} from 'rxjs';
// Service
import {ListsessionService} from '../../../../service/listsession/listsession.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-session',
  templateUrl: './list-session.component.html',
  styleUrls: ['./list-session.component.css']
})
export class ListSessionComponent implements OnInit, OnDestroy {
  private datas: Listsession[];
  private subscription: Subscription;
  oneSession: Listsession;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private listSessionService: ListsessionService, private router: Router) {}

  ngOnInit() {
    if (!localStorage.getItem('currentUser') && !sessionStorage.getItem('currentUser')) {
      this.router.navigate(['login']);
    }

    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.getAllSession();
  }

  private getAllSession(): void {
    this.subscription = this.listSessionService.getAllListSesison().subscribe(datas => {
      this.datas = datas;
      this.dtTrigger.next();
    });
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // public getSessionById(id: number) {
  //   console.log('Get Session By Id');
  //   this.listSessionService.getSessionById(id).subscribe(session => this.oneSession = session);
  //   console.log(this.oneSession);
  // }
  //
}
