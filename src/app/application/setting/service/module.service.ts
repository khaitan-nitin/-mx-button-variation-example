import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Module } from '../model/application.model';

@Injectable({
  providedIn: 'root',
})
export class ModuleService {
  private _jsonURL = environment.apiBasePath + '/assets/data';

  constructor(private http: HttpClient) { }

  public getModules(): Observable<Array<Module>> {
    return this.http.get<Array<Module>>(this._jsonURL + '/setting/module/list.data.json');
  }

  public getModule(moduleId: number): Observable<Module> {
    return this.http.get<Module>(this._jsonURL + '/setting/module/find-one.data.json');
  }
}
