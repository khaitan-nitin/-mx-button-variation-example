export interface Entity {
    name: string,
    label?: string,
    fields: Array<EntityField>
}

export interface EntityField {
    name: string,
    label?: string,
}