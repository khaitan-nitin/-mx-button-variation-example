import { NotificationMessage } from './communication-template.model';
 
export interface NotificationLog {
    id: number,
    sender: {
        userId?: number,
        userName?: string,
    },
    receiver: Array<NotificationReceiver>,
    template: {
        key: string,
        type: string,
        template: Map<string, NotificationMessage>    
    },
    message: {
        language: string,
        title: string,
        text: string,
        context: any
    },
    sentAt: Date
}

export interface NotificationReceiver {
    userId: string,
    response: NotificationResponse
}

export interface NotificationResponse {
    viewStatus: boolean,
    clickStatus: boolean
}