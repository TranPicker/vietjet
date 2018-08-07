import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {tap, catchError} from 'rxjs/operators';

// import model import
import {Import} from '../../Models/import/import';


@Injectable({
  providedIn: 'root'
})
export class ImportService {
  private apiUrl: string;


  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:3000/import-list';
  }

  getListImport(): Observable<Import[]> {
    return this.http.get<Import[]>(this.apiUrl);
  }

}
