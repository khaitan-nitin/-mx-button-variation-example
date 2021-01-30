export interface Application {
    id: number,
    key: string,
    label: string,
    description: string,
    active: boolean,
    modules: Array<string>
}

export interface Module {
    id: number,
    key: string,
    label: string,
    description: string,
    active: boolean,
}
