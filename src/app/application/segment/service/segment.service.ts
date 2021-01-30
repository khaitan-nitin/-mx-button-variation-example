import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Segment, UserContact, EmailContact, MobileContact, PushContact } from '../model';

@Injectable({
  providedIn: 'root',
})
export class SegmentService {
  private _jsonURL = environment.apiBasePath + '/assets/data';

  constructor(private http: HttpClient) { }

  public getSegmentContacts(): Observable<Array<UserContact | EmailContact | MobileContact | PushContact>> {
    return this.http.get<Array<UserContact | EmailContact | MobileContact | PushContact>>(this._jsonURL + '/segment/segment-contact/list.data.json');
  }

  public getSegmentContact(id: number): Observable<UserContact | EmailContact | MobileContact | PushContact> {
    return this.http.get<UserContact | EmailContact | MobileContact | PushContact>(this._jsonURL + '/segment/segment-contact/find-one.data.json');
  }

  public getSegments(): Observable<Array<Segment>> {
    return this.http.get<Array<Segment>>(this._jsonURL + '/segment/segment/list.data.json');
  }

  public getSegment(id: number): Observable<Segment> {
    return this.http.get<Segment>(this._jsonURL + '/segment/segment/find-one.data.json');
  }
}
