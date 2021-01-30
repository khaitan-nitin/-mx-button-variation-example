import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RuleComponent } from './component/rule/rule.component';
import { RulePageComponent } from './rule.component';

const ruleRoutes: Routes = [{
    path: '',
    component: RulePageComponent,
    children: [
        {
            path: 'rule',
            component: RuleComponent,
        },
        {
            path: 'rule/:id',
            component: RuleComponent,
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(ruleRoutes)],
    exports: [RouterModule],
})
export class RuleRoutingModule { }