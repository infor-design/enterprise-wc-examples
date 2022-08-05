import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    public http: HttpClient
  ) { }
  

  public getJsonData(fileName: any): Observable<any> {
    return this.http.get(`api/${fileName}.json`, { headers: headers });
  }
}
