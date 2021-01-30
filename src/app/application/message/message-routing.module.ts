import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from './component/message/message.component';
import { ErrorCodeComponent } from './component/error-code/error-code.component';
import { MessagePageComponent } from './message.component';

const messageRoutes: Routes = [{
    path: '',
    component: MessagePageComponent,
    children: [
        {
            path: 'message',
            component: MessageComponent,
        },
        {
            path: 'message/:id',
            component: MessageComponent,
        },
        {
            path: 'error-code',
            component: ErrorCodeComponent,
        },
        {
            path: 'error-code/:id',
            component: ErrorCodeComponent,
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(messageRoutes)],
    exports: [RouterModule],
})
export class MessageRoutingModule { }