import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiLogComponent } from './component/api-log/api-log.component';
import { ErrorLogComponent } from './component/error-log/error-log.component';
import { AppLogComponent } from './component/app-log/app-log.component';
import { LoggingPageComponent } from './logging.component';

const loggingRoutes: Routes = [{
    path: '',
    component: LoggingPageComponent,
    children: [
        {
            path: 'api-log',
            component: ApiLogComponent,
        },
        {
            path: 'api-log/:id',
            component: ApiLogComponent,
        },
        {
            path: 'error-log',
            component: ErrorLogComponent,
        },
        {
            path: 'error-log/:id',
            component: ErrorLogComponent,
        },
        {
            path: 'app-log',
            component: AppLogComponent,
        },
        {
            path: 'app-log/:id',
            component: AppLogComponent,
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(loggingRoutes)],
    exports: [RouterModule],
})
export class LoggingRoutingModule { }