import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Collection, CollectionBanner } from '../model';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  private _jsonURL = environment.apiBasePath + '/assets/data';

  constructor(private http: HttpClient) { }

  public getCollections(): Observable<Array<Collection>> {
    return this.http.get<Array<Collection>>(this._jsonURL + '/marketing/collection/list.data.json');
  }

  public getCollection(id: number): Observable<Collection> {
    return this.http.get<Collection>(this._jsonURL + '/marketing/collection/find-one.data.json');
  }

  public getCollectionCellBanners(collectionId: number, cellId: number): Observable<Array<CollectionBanner>> {
    return this.http.get<Array<CollectionBanner>>(this._jsonURL + '/marketing/collection/' + collectionId + '/cell/' + cellId + '/list.data.json');
  }
}
