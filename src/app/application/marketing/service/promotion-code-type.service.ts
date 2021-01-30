import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccessCriteria, PromotionCodeType } from '../model';

@Injectable({
  providedIn: 'root',
})
export class PromotionCodeTypeService {
  private _jsonURL = environment.apiBasePath + '/assets/data';

  constructor(private http: HttpClient) { }

  public getPromotionCodeTypes(): Observable<Array<PromotionCodeType>> {
    return this.http.get<Array<PromotionCodeType>>(this._jsonURL + '/marketing/promotion-code-type/list.data.json');
  }

  public getPromotionCodeType(id: number): Observable<PromotionCodeType> {
    return this.http.get<PromotionCodeType>(this._jsonURL + '/marketing/promotion-code-type/find-one.data.json');
  }
}
