import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ErrorCode } from '../model';

@Injectable({
  providedIn: 'root',
})
export class ErrorCodeService {
  private _jsonURL = environment.apiBasePath + '/assets/data';

  constructor(private http: HttpClient) { }

  public getErrorCodes(): Observable<Array<ErrorCode>> {
    return this.http.get<Array<ErrorCode>>(this._jsonURL + '/message/error-code/list.data.json');
  }

  public getErrorCode(errorCode: number): Observable<ErrorCode> {
    return this.http.get<ErrorCode>(this._jsonURL + '/message/error-code/find-one.data.json');
  }
}
