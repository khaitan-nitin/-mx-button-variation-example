import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Ability } from '@casl/ability';
import { Router } from '@angular/router';
import { Navigation, NavigationFlatNode, StringUtils } from 'ngx-material-widget';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { navigation, navigationPannel } from './layout/config/navigation.config';
import { User } from './auth/model';

@Component({
  selector: 'cf-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit {
  user: User;
  isExpanded = true;
  navigationdata: any = navigationPannel;
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public router: Router,
    private ability: Ability
  ) { 
    this.dataSource.data = navigation;
  }

  ngOnInit(): void {
    let userStr = localStorage.getItem("user");

    if (!StringUtils.isEmpty(userStr)) {
      this.user = JSON.parse(userStr);
    }
  }

  logout(event: any): void {
    localStorage.removeItem("user");
    this.ability.update([]);
    this.router.navigate(['/auth/login']);
  }

  profile(event: any): void {
    this.ability.update([]);
    this.router.navigate(['/application/auth/profile']);
  }

  private _transformer = (node: Navigation, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      route: node.route,
      icon: node.icon,
      name: node.name,
      permission: node.permission,
      level: level,
    }; 
  }

  treeControl = new FlatTreeControl<NavigationFlatNode>(
    node => node.level, 
    node => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: NavigationFlatNode) => node.expandable;

  navigate(node: Navigation)  {
    console.log(node);
  }
}
