import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingCategory } from 'src/app/application/setting/model/setting-category.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ConfigCategoryService {
    private _jsonURL = environment.apiBasePath + '/assets/data/setting/config-category/list.data.json';

    constructor(private http: HttpClient) { }

    public getAllSettingCategory(): Observable<Array<SettingCategory>> {
      return this.http.get<Array<SettingCategory>>(this._jsonURL);
    }
}
