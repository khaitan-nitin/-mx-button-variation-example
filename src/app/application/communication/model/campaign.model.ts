export const enum SendType { 
    INSTANT = "INSTANT",
    CRON = "CRON" 
}

export const enum SendPattern {
    ONE_GO = "ONE_GO",
    BATCH = "BATCH"
} 

export interface Campaign {
    id: number,
    name: string,
    description?: string,
    message: {
        type: string, // master data
        template: number,
    },
    receiver: number, // accessCriteria Id
    receiveAs: {
        ivr: boolean,
        text: boolean,
    },
    send: {
        type: SendType,
        cron?: string, //cron timing

        sendPattern: SendPattern,
        batchSize: number,
        nextAfterDelay: number, //millisec
    },
    active: boolean
} 