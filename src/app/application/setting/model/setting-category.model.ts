export interface SettingCategory {
    key: string,
    name: string,
    description: string,
    image: string, 
    active: boolean,
    subCategories: Array<SettingSubCategory>
}

export interface SettingSubCategory {
    key: string,
    name: string,
    description: string,
    image: string, 
    active: boolean,
}
