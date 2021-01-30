import { Message } from '.';
import { ErrorCode } from '../../message/model';
 
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