import { RecurringFrequency } from '.';

export const enum CollectionDisplayType { 
    GRID = "GRID",
    CAROUSAL = "CAROUSAL"
}
 
export const enum CampaignRecurringFor {
    FIRST_FEW = "FIRST_FEW",
    LAST_FEW = "LAST_FEW",
    SPECIFIC = "SPECIFIC"
}
export interface Collection {
    id: number,
    key: string,
    name: string,
    description?: string, 
    accessibility: {
        accessibilityCriteriaId?: number,
        ruleId?: Array<number>,
//        newUser?:boolean,
        oneTimeView?: boolean,
        hideAfterClick?: boolean,
        recurring: {
            frequency: RecurringFrequency,
            activeOnDays?: Array<string> | Array<CampaignRecurringDayInMonth>
        },
        startDate?: Date,
        endDate?: Date
    }, 
    displayType: CollectionDisplayType,
    rowHeight: number,
    cells: Array<GridCollectionCell> | Array<CarousalCollectionCell>,
    sortOrder: number,
    active: boolean
} 

export interface CampaignRecurringDayInMonth {
    recurringFor: CampaignRecurringFor,
    days: Array<string>
}

export interface GridCollectionCell {
    key: string,
    rows: number,
    cols: number,
    bgColor: string,
    aspectRatio: number,
    banners: Array<CollectionBanner>
}

export interface CarousalCollectionCell {
    key: string,
    bgColor: string,
    aspectRatio: number,
    sortOrder: number,
    banners: Array<CollectionBanner>
}

export interface CollectionBanner {
    image: string,
    collectionPageImage?: string,
    metaData: Map<string, any>,   
    accessCriteriaId?: number
}

//  way to display exception in case of any if it exist in the collection