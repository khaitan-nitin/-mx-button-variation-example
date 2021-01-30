import { Form, FormDiaplyMode, } from 'ngx-material-widget/lib/form/model';
import { FieldType, FieldDiaplyType, FieldAppearance } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, ButtonSize, IconPosition } from 'ngx-material-widget/lib/button/model';
import { Validators } from '@angular/forms';

export const loginForm: Form = {
    identifier: "loginForm",
    header: {
        title: "Login",
        actions: [
        ]
    },
    displayInColumns: 1,  
    formFields: [
        { 
            field: {
                key: "userName",
                label: "Username", 
                icon: "perm_identity",
                type: FieldType.TEXT,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: true,
                placeholder: "Type your username",
                maxLength: 50,
                hasClear: true,
                value: "",
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Username can't be empty"
                        }
                    }
                ]
            }
        },
        {
            field: {
                key: "password",
                label: "Password", 
                icon: "lock",
                type: FieldType.TEXT,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: true,
                placeholder: "Type your password",
                maxLength: 50,
                hasClear: true,
                value: "",
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Password can't be empty"
                        }
                    }
                ]
            }
        },
        // {
        //     field: {
        //         key: "userGroup",
        //         label: "User Group", 
        //         type: FieldType.DROPDOWN,
        //         appearance: FieldAppearance.STANDARD,
        //         isReadOnly: false,
        //         isUnique: true,
        //         placeholder: "Choose a User Group",
        //         maxLength: 50,
        //         hasClear: true,
        //         value: "",
        //         options: [
        //             {
        //                 key: "admin",
        //                 value: "Admin"
        //             },
        //             {
        //                 key: "config",
        //                 value: "Config"
        //             },
        //             {
        //                 key: "marketing",
        //                 value: "Marketing"
        //             },
        //             {
        //                 key: "operation",
        //                 value: "Operations"
        //             }
        //         ],
        //         validations: [
        //             {
        //                 type: Validators.required,
        //                 message: {
        //                     key: "required",
        //                     message: "User Group can't be empty"
        //                 }
        //             }
        //         ]
        //     }
        // } 
    ],
    action: {
        rowHeight: 40,
        cells: [
            {
                rows: 1,
                cols: 6,
                buttons: {
                    align: "left",
                    buttons: [
                        {
                            identifier: "registration",
                            type: ButtonType.RAISED,
                            label: "Registration",
                            color: ButtonColor.PRIMARY,  
                            size: ButtonSize.SMALL,
                            icon: "how_to_reg",
                            onlyIcon: false,
                            alwaysEnable: true
                        } 
                    ]
                } 
            }, 
            {
                rows: 1,
                cols: 6,
                buttons: {
                    align: "right",
                    buttons: [
                        { 
                            identifier: "login",
                            type: ButtonType.RAISED,
                            label: "Login",
                            color: ButtonColor.PRIMARY, 
                            size: ButtonSize.SMALL,
                            icon: "keyboard_arrow_right",
                            iconPosition: IconPosition.RIGHT,
                            onlyIcon: false
                        }
                    ]
                }
            }
        ]
    },
    // action: {
    //     align: "right",
    //     buttons: [
    //         {
    //             identifier: "registration",
    //             type: ButtonType.RAISED,
    //             label: "Registration",
    //             color: ButtonColor.PRIMARY,  
    //             size: ButtonSize.SMALL,
    //             icon: "",
    //             onlyIcon: false,
    //             alwaysEnable: true
    //         },
    //         {
    //             identifier: "login",
    //             type: ButtonType.RAISED,
    //             label: "Login",
    //             color: ButtonColor.PRIMARY, 
    //             size: ButtonSize.SMALL,
    //             icon: "",
    //             onlyIcon: false
    //         }
    //     ]    
    // },
    displayType: FieldDiaplyType.INLINE,
    displayMode: FormDiaplyMode.ADD,
    // badge?: Badge,
    // help?: FormHelp,
    // template?: Template,
    // privilege?: any
}