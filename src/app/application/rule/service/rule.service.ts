import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Rule } from '../model';

@Injectable({
  providedIn: 'root',
})
export class RuleService {
  private _jsonURL = environment.apiBasePath + '/assets/data';

  constructor(private http: HttpClient) { }

  public getRules(): Observable<Array<Rule>> {
    return this.http.get<Array<Rule>>(this._jsonURL + '/rule/rule/list.data.json');
  }

  public getRule(id: number): Observable<Rule> {
    return this.http.get<Rule>(this._jsonURL + '/rule/rule/find-one.data.json');
  }
}
