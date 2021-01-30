import { EmailMessage } from './communication-template.model';
import { ErrorCode } from '../../message/model';
 
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