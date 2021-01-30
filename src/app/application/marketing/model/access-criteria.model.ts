export const enum ContactCriteriaType {
    QUERY_BASED = "QUERY_BASED",
    SEGMENT_BASED = "SEGMENT_BASED",
    CONTACT = "CONTACT"
}

export interface AccessCriteria { 
    id: number,
    name: string,
    description?: string,
    receiver: ContactCriteria,
    active: boolean 
}
 
export interface ContactCriteria {
    type: ContactCriteriaType,
    contactDetail: Array<ContactQuery> | ContactSegment | ContactEmail | ContactPush | ContactMobile
}

export interface ContactQuery { 
    query: string
}

export interface ContactSegment {
    applicableSegmentIds: Array<number>,
    excludeSegmentIds: Array<number>
}

export interface ContactEmail {
    id: number,
    emails: Array<string>
}

export interface ContactPush {
    id: number,
    tokens: Array<string>
}

export interface ContactMobile {
    id: number,
    mobileNos: Array<string>
}