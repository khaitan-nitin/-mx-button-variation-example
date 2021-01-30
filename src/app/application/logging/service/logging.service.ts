import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiLog, AppLog, ErrorLog } from '../model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  private _jsonURL = environment.apiBasePath + '/assets/data';

  constructor(private http: HttpClient) { }

  public getApiLogs(): Observable<Array<ApiLog>> {
    return this.http.get<Array<ApiLog>>(this._jsonURL + '/log/api-log/list.data.json');
  }

  public getApiLog(id: number): Observable<ApiLog> {
    return this.http.get<ApiLog>(this._jsonURL + '/log/api-log/find-one.data.json');
  }

  public getAppLogs(): Observable<Array<AppLog>> {
    return this.http.get<Array<AppLog>>(this._jsonURL + '/log/app-log/list.data.json');
  }

  public getAppLog(id: number): Observable<AppLog> {
    return this.http.get<AppLog>(this._jsonURL + '/log/app-log/find-one.data.json');
  }
  public getErrorLogs(): Observable<Array<ErrorLog>> {
    return this.http.get<Array<ErrorLog>>(this._jsonURL + '/log/error-log/list.data.json');
  }

  public getErrorLog(id: number): Observable<ErrorLog> {
    return this.http.get<ErrorLog>(this._jsonURL + '/log/error-log/find-one.data.json');
  }
}
