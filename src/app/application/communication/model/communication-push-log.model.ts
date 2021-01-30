import { MessageLink, PushMessage } from './communication-template.model';
import { ErrorCode } from '../../message/model';
 
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
    app: string,
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