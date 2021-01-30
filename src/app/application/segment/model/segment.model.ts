export interface Segment {
    id: number,
    name: string, 
    description?: string,
    active: string
} 
 
export interface SegmentContact {
    id: number,
    segmentId: number,
    userName?: string,
    info?: Map<string, string>, 
    unsubscribedOn?: string,
    active: string
} 

export interface UserContact extends SegmentContact {
    userId: number,
} 

export interface EmailContact extends SegmentContact {
    email: string,
} 

export interface MobileContact extends SegmentContact {
    mobile: string,
} 

export interface PushContact extends SegmentContact {
    token: string,
} 