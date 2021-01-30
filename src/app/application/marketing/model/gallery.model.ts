export interface GalleryType { 
    id: number,
    name: string,
    description: string,
    active: boolean
}

export interface Gallery {
    id: number,
    key: string,
    name: string,
    description: string,
    galleryType: number,
    basePath: string,
    associateWithModules: Array<string>,
    active: boolean
}  

export interface Resource {
    id: number,
    galleryId: number,
    url: string,
    name?: string,
    description?: string,
    tag?: Array<string>,
    active: boolean
}