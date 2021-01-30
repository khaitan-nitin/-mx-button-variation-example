import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Ability } from '@casl/ability';
import { StringUtils } from 'ngx-material-widget';
import { User } from './application/auth/model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public http: HttpClient, 
    public router: Router, 
    public route: ActivatedRoute,
    private location: Location,
    private ability: Ability) { 
  }

  ngOnInit(): void {
    let userStr = localStorage.getItem("user");

    if (StringUtils.isEmpty(userStr)) {
      this.router.navigate(['/auth/login']);
    } else  {
      let user: User = JSON.parse(userStr);
      this.ability.update(<any> user.permissions);

      if (this.location.path() == "/" || this.location.path() == "") {
        this.router.navigate(['/application/setting/property']);
      }
    }
  }}
