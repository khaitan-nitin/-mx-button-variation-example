export interface CommunicationTemplate {
    id?: number,
    key: string,
    name: string,
    description?: string,
    type: string,
    target: Array<string>,
//    messages: Map<string, Message>,
    link?: MessageLink 
}

export interface Message {
//    subject: string,
    body: string,
    attachments?: Array<MessageAttachment>
} 

export interface MessageLink {
    basePath: string,
    uri: string,
} 

export interface MessageAttachment {
    path: string
}

//Email
export interface EmailTemplate extends CommunicationTemplate {
    messages: Map<string, EmailMessage>
}

export interface EmailMessage extends Message {
    subject: string
}

//Sms
export interface SmsTemplate extends CommunicationTemplate {
    senderId: string,
    messages: Map<string, Message>
}

//WhatsApp
export interface WhatsAppTemplate extends CommunicationTemplate {
    messages: Map<string, Message>
} 

//Notification
export interface NotificationTemplate extends CommunicationTemplate {
    messages: Map<string, NotificationMessage>
}

export interface NotificationMessage extends Message {
    title: string
}

//Push
export interface PushTemplate extends CommunicationTemplate {
    messages: Map<string, PushMessage>
}

export interface PushMessage extends Message {
    title: string,
    channelKey?: string,
    ringtone?: string,
    vibration?: boolean,
    screenGlow?: boolean,
    icon?: string
}
