import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AccessCriteria, PromotionCodeType, PromotionCode } from '../model';

@Injectable({
  providedIn: 'root',
})
export class PromotionCodeService {
  private _jsonURL = environment.apiBasePath + '/assets/data';

  constructor(private http: HttpClient) { }

  public getPromotionCodes(): Observable<Array<PromotionCode>> {
    return this.http.get<Array<PromotionCode>>(this._jsonURL + '/marketing/promotion-code/list.data.json');
  }

  public getPromotionCode(id: number): Observable<PromotionCode> {
    return this.http.get<PromotionCode>(this._jsonURL + '/marketing/promotion-code/find-one.data.json');
  }
}
