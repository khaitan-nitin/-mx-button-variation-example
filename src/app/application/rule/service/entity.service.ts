import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rule, Entity } from '../model';

@Injectable({
  providedIn: 'root',
})
export class EntityService {
  private _jsonURL = environment.apiBasePath + '/assets/data';

  constructor(private http: HttpClient) { }

  public getEntities(): Observable<Array<Entity>> {
    return this.http.get<Array<Entity>>(this._jsonURL + '/rule/entity/list.data.json');
  }

  public getEntity(key: string): Observable<Entity> {
    return this.http.get<Entity>(this._jsonURL + '/rule/entity/find-one.data.json');
  }
}
