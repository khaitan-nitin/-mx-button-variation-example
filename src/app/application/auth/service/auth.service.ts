import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Permission } from 'ngx-material-widget/lib/privilege/model';
import { User } from '../model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _jsonURL = environment.apiBasePath + '/assets/data';

  constructor(private http: HttpClient) { }

  public getPermissions(role: string): Observable<Array<Permission>> {
    return this.http.get<Array<Permission>>(this._jsonURL + '/role/' + role + '/permission.data.json');
  }

  public login(userName: string, password: string): Observable<User> {
    return this.http.get<User>(this._jsonURL + '/user/user.data.json');
  } 

  public getProfile(userId: number): Observable<User> {
    return this.http.get<User>(this._jsonURL + '/user/user.data.json');
  }
}
