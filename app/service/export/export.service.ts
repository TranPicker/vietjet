import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Export} from '../../Models/export/export';

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  constructor(private http: HttpClient) {
  }

  sendDataExport() {
  }
}
