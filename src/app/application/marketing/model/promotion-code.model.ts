export const enum PromotionCodeUsageStatus {
    APPLIED = "APPLIED",
    REJECTED = "REJECTED",
    CANCELED = "CANCELLED"
}
 
export const enum PromotionCodeBenefitType {
    AMOUNT = "AMOUNT",
    PERCENTAGE = "PERCENTAGE",
    PRODUCT = "PRODUCT"
}

export const enum RecurringFrequency {
    WEEKLY = "WEEKLY",
    BIWEEKLY = "BIWEEKLY",
    MONTHLY = "MONTHLY"
}

export const enum PromotionCodeRecurringFor {
    FIRST_FEW = "FIRST_FEW",
    LAST_FEW = "LAST_FEW",
    SPECIFIC = "SPECIFIC"
}

export interface PromotionCodeType {
    id: number,
    name: string,
    description?: string,
    active: boolean
}

export interface PromotionCode {
    id: number,
    code: string,
    description?: string,
    promotionCodeTypeId: number,
    accessibility: {
        accessibilityCriteriaId?: number,// 
        ruleId: number,
        recurring: {
            frequency: RecurringFrequency,
            activeOnDays?: Array<string> | Array<PromotionCodeRecurringDayInMonth>
        },
        startDate?: Date,
        endDate?: Date
    },
    usage: {
        count: number,
        //        metaData: Map<string, any>
    },
    benefit: { 
        ruleId: number
        type: PromotionCodeBenefitType,
        amount?: number, 
        percentage?: number,
        maxAmount?: number,
        products?: Array<PromotionCodeBenefitProduct>,
//        count?: number
    }
    active: boolean 
}

export interface PromotionCodeRecurringDayInMonth {
    recurringFor: PromotionCodeRecurringFor,
    days: Array<string>
}

export interface PromotionCodeBenefitProduct {
    productId: number,
    quantity: number
}

export interface PromotionCodeUser {
    id: number,
    promotionCodeId: string,
    userId: number,
    usage: {
        allowedCount: number,
        usedCount: number
    }
    history: Array<PromotionCodeUsageHistory>
}

export interface PromotionCodeUsageHistory {
    id: number,
    usedOn: Date,
    usageStatus: PromotionCodeUsageStatus
}