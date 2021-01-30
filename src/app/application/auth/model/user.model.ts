import { Permission } from 'ngx-material-widget/lib/privilege/model';

export interface User {
    userName: string,
    firstName: string,
    lastName: string,
    email: string,
    photo?: string,
    group: string,
    addresses: Array<UserAddress>,
    permissions?: Array<Permission>
}

export interface UserAddress {
    address1: string,
    address2: string,
    landmark: string,
    city: string,
    state: string,
    country: string
}