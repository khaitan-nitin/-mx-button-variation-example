import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Application } from '../model/application.model';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  private _jsonURL = environment.apiBasePath + '/assets/data';

  constructor(private http: HttpClient) { }

  public getApplications(): Observable<Array<Application>> {
    return this.http.get<Array<Application>>(this._jsonURL + '/setting/application/list.data.json');
  }

  public getApplication(id: number): Observable<Application> {
    return this.http.get<Application>(this._jsonURL + '/setting/application/find-one.data.json');
  }
}
