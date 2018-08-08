import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

const httpOption = {
  headers: new HttpHeaders({'Content-Type': 'application/jon'})
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlCheckLogin: string;

  constructor(private http: HttpClient) {
    this.urlCheckLogin = 'path/';
  }

  checkLogin(username, password, remember): any {
    return this.http.post<any>(this.urlCheckLogin, {username: username, password: password}, httpOption).pipe(
      map(user => {
        if (user && user.token) {
          if (typeof(Storage) !== 'undefined') {
            if (remember) {
              window.localStorage.setItem('currentUser', JSON.stringify(user));
            } else {
              window.sessionStorage.setItem('currentUser', JSON.stringify(user));
            }
          }
        }
        return user;
      })
    );
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
