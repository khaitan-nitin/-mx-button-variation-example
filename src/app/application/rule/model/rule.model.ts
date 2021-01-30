export const enum Operator {
    EQUAL = "EQUAL",
    LIKE = "LIKE",
    GTE = "GTE",
    GT = "GT",
    LTE = "LTE",
    LT = "LT",
} 

export const enum ConditionJoin {
    AND = "AND",
    OR = "OR"
}

export interface Rule {
    id: number,
    name: string,
    description?: string,
    queries: Array<Query>,
    active: boolean
} 

export interface Query {
    join?: ConditionJoin,
    subQueries: Array<SubQuery>,
    queries: Array<Query>   
}

export interface SubQuery {
    condition: Condition,
    join?: ConditionJoin,
}

export interface Condition {
    entity: string,
    field: string,
    operator: Operator,
    value: any
}