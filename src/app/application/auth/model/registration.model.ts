export interface Registration {
    firstName?: string,
    lastName?: string,
    email?: string,
    phone?: string,
    summary?: string,
    addresses?: Array<UserAddress>
}

export interface UserAddress {
    address1?: string,
    address2?: string,
    landmark?: string,
    pincode?: string,
    city?: string,
    state?: string,
    country?: string
}