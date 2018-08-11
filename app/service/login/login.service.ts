import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResLogins} from '../../Models/login/resLogin';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/jon; charset=utf-8'})
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlCheckLogin: string;


  constructor(private http: HttpClient) {
    this.urlCheckLogin = 'https://vietjet-api.dev-altamedia.com/api/login';
  }

  checkLogin(username, password): Observable<ResLogins> {
    return this.http.post<ResLogins>(this.urlCheckLogin, {UserName: username, Password: password});
  }

  logOut() {
    if (localStorage.getItem('currentUser')) {
      localStorage.removeItem('currentUser');
    }
    if (sessionStorage.getItem('currentUser')) {
      sessionStorage.removeItem('currentUser');
    }
  }
}

