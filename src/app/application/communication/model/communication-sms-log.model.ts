import { Message } from '.';
import { MessageLink } from './communication-template.model';
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