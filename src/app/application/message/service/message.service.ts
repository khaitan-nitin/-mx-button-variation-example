import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ErrorCode, Message } from '../model';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private _jsonURL = environment.apiBasePath + '/assets/data';

  constructor(private http: HttpClient) { }

  public getMessages(): Observable<Array<Message>> {
    return this.http.get<Array<ErrorCode>>(this._jsonURL + '/message/message/list.data.json');
  }

  public getMessage(code: number): Observable<Message> {
    return this.http.get<Message>(this._jsonURL + '/message/message/find-one.data.json');
  }
}
