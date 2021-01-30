import { Form, FormDiaplyMode, } from 'ngx-material-widget/lib/form/model';
import { FieldType, FieldDiaplyType, FieldAppearance } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { Validators } from '@angular/forms';

export const registrationForm: Form = {
    identifier: "registrationForm",
    header: {
        title: "Registration",
        actions: [
        ]
    },
    displayInColumns: 2,
    formFields: [
        {
            field: {
                key: "firstName",
                label: "First Name",
                icon: "",
                type: FieldType.TEXT,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: true,
                placeholder: "i.e. - Nitin",
                maxLength: 50,
                hasClear: true,
                value: "",
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "First name can't be empty"
                        }
                    }
                ]
            }
        },
        {
            field: {
                key: "lastName",
                label: "Last Name",
                icon: "",
                type: FieldType.TEXT,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: true,
                placeholder: "i.e. - Khaitan",
                maxLength: 50,
                hasClear: true,
                value: "",
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Last name can't be empty"
                        }
                    }
                ]
            }
        },
        {
            field: {
                key: "email",
                label: "Email",
                icon: "",
                type: FieldType.TEXT,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: true,
                placeholder: "i.e. - khaitan.nitin@gmail.com",
                maxLength: 50,
                hasClear: true,
                value: ""
            }
        },
        {
            field: {
                key: "phone",
                label: "Phone",
                icon: "",
                type: FieldType.TEXT,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: true,
                placeholder: "i.e. - 9293939392",
                maxLength: 10,
                hasClear: true,
                value: "",
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Phone can't be empty"
                        }
                    }
                ]
            }
        },
        {
            field: {
                key: "summary",
                label: "Short Summary",
                icon: "",
                type: FieldType.TEXT,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: true,
                placeholder: "Short summary about myself",
                maxLength: 10,
                hasClear: true,
                value: ""
            },
            displayInColumns: 2
        },
    ],
    displayType: FieldDiaplyType.INLINE,
    displayMode: FormDiaplyMode.ADD,
    // badge?: Badge,
    // help?: FormHelp,
    // template?: Template,
    // privilege?: any
}

export const userAddressForm: Form = {
    identifier: "userAddressForm",
    header: {
        title: "",
        actions: [
        ]
    },
    displayInColumns: 2,
    formFields: [
        {
            field: {
                key: "address1",
                label: "Address 1",
                icon: "",
                type: FieldType.TEXT,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: true,
                placeholder: "i.e. - xyz Society",
                maxLength: 50,
                hasClear: true,
                value: "",
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Address 1 can't be empty"
                        }
                    }
                ]
            }
        },
        {
            field: {
                key: "address2",
                label: "Address 2",
                icon: "",
                type: FieldType.TEXT,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: true,
                placeholder: "",
                maxLength: 50,
                hasClear: true,
                value: ""
            }
        },
        {
            field: {
                key: "landmark",
                label: "Landmark",
                icon: "",
                type: FieldType.TEXT,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: true,
                placeholder: "i.e. - near abc Hospital",
                maxLength: 50,
                hasClear: true,
                value: ""
            }
        },
        {
            field: {
                key: "pincode",
                label: "Pincode",
                icon: "",
                type: FieldType.TEXT,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: true,
                placeholder: "i.e. - 384974",
                maxLength: 10,
                hasClear: true,
                value: "",
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Pincode can't be empty"
                        }
                    }
                ]
            }
        },
        {
            field: {
                key: "city",
                label: "City",
                icon: "",
                type: FieldType.DROPDOWN,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: true,
                placeholder: "i.e. - Gurgaon",
                maxLength: 10,
                hasClear: true,
                value: ""
            },
            displayInColumns: 2
        },
        {
            field: {
                key: "state",
                label: "State",
                icon: "",
                type: FieldType.DROPDOWN,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: true,
                placeholder: "i.e. - Haryana",
                maxLength: 10,
                hasClear: true,
                value: ""
            },
            displayInColumns: 2
        },
        {
            field: {
                key: "country",
                label: "Country",
                icon: "",
                type: FieldType.DROPDOWN,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: true,
                placeholder: "i.e. - Haryana",
                maxLength: 10,
                hasClear: true,
                value: ""
            },
            displayInColumns: 2
        },
        ],
    displayType: FieldDiaplyType.INLINE,
    displayMode: FormDiaplyMode.ADD,
    // badge?: Badge,
    // help?: FormHelp,
    // template?: Template,
    // privilege?: any
}