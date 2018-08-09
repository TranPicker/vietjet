import {Injectable} from '@angular/core';
import {User} from '../../Models/login/user';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpEvent} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/jon'})
};

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiAddUser: string = 'path';

  constructor(private http: HttpClient) {
  }

  addUser(_user: User): Observable<User> {
    return this.http.post<User>(this.apiAddUser, _user, httpOptions);
  }
}
