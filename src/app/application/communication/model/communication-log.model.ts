import { Message } from '.';
import { MessageLink, EmailMessage, PushMessage, NotificationMessage } from './communication-template.model';
import { ErrorCode } from '../../message/model';
 
export interface SmsLog {
    id: number, 
    sender: {
        userId?: number,
        userName?: string,
        mobile?: string    
    },
    receiver: Array<SmsReceiver>,
    template: {
        key: string,
        type: string,
        template: Map<string, Message>    
    },
    message: {
        language: string,
        text: string,
        context: any,
        link: MessageLink
    },
    sentAt: Date
} 

export interface SmsReceiver {
    mobile: string,
    response: SmsResponse
}

export interface SmsResponse {
    body: any,
    statusCode: number,
    status: boolean,
    errorCode: ErrorCode,
    actualErrorCode: string,
    actualErrorMessage: string
}

export interface EmailLog {
    id: number,
    sender: {
        userId?: number,
        userName?: string,
        email?: string    
    },
    receiver: Array<EmailReceiver>,
    template: {
        key: string,
        type: string,
        template: Map<string, EmailMessage>    
    },
    message: {
        language: string,
        subject: string,
        text: string,
        context: any
    },
    sentAt: Date
}

export interface EmailReceiver {
    email: string,
    response: EmailResponse
}

export interface EmailResponse {
    body: any,
    statusCode: number,
    readStatus: boolean,
    status: boolean,
    errorCode: ErrorCode,
    actualErrorCode: string,
    actualErrorMessage: string
}

export interface WhatsAppLog {
    id: number,
    sender: {
        userId?: number,
        userName?: string,
        mobile?: string    
    },
    receiver: Array<WhatsAppReceiver>,
    template: {
        key: string,
        type: string,
        template: Map<string, Message>    
    },
    message: {
        language: string,
        text: string,
        context: any
    },
    sentAt: Date
}

export interface WhatsAppReceiver {
    mobile: string,
    response: WhatsAppResponse
}

export interface WhatsAppResponse {
    body: any,
    statusCode: number,
    readStatus: boolean,
    status: boolean,
    errorCode: ErrorCode,
    actualErrorCode: string,
    actualErrorMessage: string
}

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

export interface PushLog {
    id: number,
    sender: {
        userId?: number,
        userName?: string,
        token?: string    
    },
    receiver: Array<PushReceiver>,
    template: {
        key: string,
        type: string,
        template: Map<string, PushMessage>    
    },
    message: {
        language: string,
        text: string,
        context: any,
        request: any,
        link: MessageLink
    },
    sentAt: Date
}

export interface PushReceiver {
    userId: number,
    responses: Array<PushReceiverToken>
}

export interface PushReceiverToken {
    token: string,
    os: string,
    response: any,
    statusCode: number,
    status: boolean,
    readStatus: boolean,
    errorCode: ErrorCode,
    actualErrorCode: string,
    actualErrorMessage: string
}