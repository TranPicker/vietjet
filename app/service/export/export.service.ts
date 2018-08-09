import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Export} from '../../Models/export/export';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/jon'})
};

@Injectable({
  providedIn: 'root'
})

export class ExportService {
  private urlAddExport: string;

  constructor(private http: HttpClient) {
    this.urlAddExport = '/path';
  }

  addExport(ex: Export): Observable<Export> {
    return this.http.post<Export>(this.urlAddExport, ex, httpOptions);
  }
}
