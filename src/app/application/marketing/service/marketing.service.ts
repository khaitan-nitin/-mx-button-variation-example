import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MarketingService {
  private _jsonURL = environment.apiBasePath + '/assets/data';

  constructor(private http: HttpClient) { }

  // public getBanners(): Observable<Array<Banner>> {
  //   return this.http.get<Array<Banner>>(this._jsonURL + '/marketing/banner/list.data.json');
  // }

  // public getBanner(id: number): Observable<Banner> {
  //   return this.http.get<Banner>(this._jsonURL + '/marketing/banner/find-one.data.json');
  // }

  // public getPromotionCodes(): Observable<Array<PromotionCode>> {
  //   return this.http.get<Array<PromotionCode>>(this._jsonURL + '/marketing/promotion-code/list.data.json');
  // }

  // public getPromotionCode(id: number): Observable<PromotionCode> {
  //   return this.http.get<PromotionCode>(this._jsonURL + '/marketing/promotion-code/find-one.data.json');
  // }

  // public getGalleries(): Observable<Array<Gallery>> {
  //   return this.http.get<Array<Gallery>>(this._jsonURL + '/marketing/gallery/list.data.json');
  // }

  // public getGallery(id: number): Observable<Gallery> {
  //   return this.http.get<Gallery>(this._jsonURL + '/marketing/gallery/find-one.data.json');
  // }
}
