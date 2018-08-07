import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Result} from '../../Models/result/result';


@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:3000/result-list';
  }
  getListResult(): Observable<Result[]> {
    return this.http.get<Result[]>(this.apiUrl);
  }


}
