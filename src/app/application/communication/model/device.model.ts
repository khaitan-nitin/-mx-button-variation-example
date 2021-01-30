export interface Device {
    id: number,
    userId: number,
    userName?: string,
    deviceId: string,
    os: string,
    token: string,
    json: any,
    appVersion: string
} 