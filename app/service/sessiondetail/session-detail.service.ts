import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {SessionDetail} from '../../Models/session-detail/session-detail';
import {Observable, of} from 'rxjs';
import {tap, catchError} from 'rxjs/operators';

const httpOption = {
  headers: new HttpHeaders({'Content-Type': 'application/jon'})
};


@Injectable({
  providedIn: 'root'
})
export class SessionDetailService {
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:3000/session-detail';
  }


  getSessionDetail(id: number): Observable<SessionDetail[]> {
    console.log('Id at getSessionDetail detailService: ' + id);
    return this.http.get<SessionDetail[]>(this.apiUrl);
  }
}
