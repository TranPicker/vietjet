import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Listsession} from '../../Models/listsession/listsession';
import {Observable, of} from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
import {MessageService} from '../message/message.service';


const httpOption = {
  headers: new HttpHeaders({'Content-Type': 'application/jon'})
};

@Injectable()

export class ListsessionService {
  private apiUrl: string;

  constructor(private http: HttpClient, public messageService: MessageService) {
    this.apiUrl = 'http://localhost:3000/list-session';
    console.log(this.apiUrl);
  }

  getAllListSesison(): Observable<Listsession[]> {
    return this.http.get<Listsession[]>(this.apiUrl);
  }

  getSessionById(id: number): Observable<Listsession> {
    const urlId = `${this.apiUrl}/${id}`;
    console.log(urlId);
    return this.http.get<Listsession>(urlId).pipe(tap(selectSession => console.log(`get List Session`)));
  }
}
