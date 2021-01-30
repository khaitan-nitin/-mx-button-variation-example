import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccessCriteria } from '../model';

@Injectable({
  providedIn: 'root',
})
export class AccessCriteriaService {
  private _jsonURL = environment.apiBasePath + '/assets/data';

  constructor(private http: HttpClient) { }

  public getAccessCriterias(): Observable<Array<AccessCriteria>> {
    return this.http.get<Array<AccessCriteria>>(this._jsonURL + '/marketing/access-criteria/list.data.json');
  }

  public getAccessCriteria(id: number): Observable<AccessCriteria> {
    return this.http.get<AccessCriteria>(this._jsonURL + '/marketing/access-criteria/find-one.data.json');
  }
}
