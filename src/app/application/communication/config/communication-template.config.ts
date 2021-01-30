import { Form, FormDiaplyMode, } from 'ngx-material-widget/lib/form/model';
import { FieldType, FieldDiaplyType, FieldAppearance, DisplayMode, LabelTextAlign } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { Validators } from '@angular/forms';
import { SearchDisplayType, CrudListDisplayType, Crud } from 'ngx-material-widget/lib/crud/model';
import { ListType, PaginationType, ListSortOrder } from 'ngx-material-widget/lib/list/model';
import { PermissionAction } from 'ngx-material-widget/lib/privilege/model';

export const communicationTemplateCrud: Crud = {
    identifier: "communicationTemplateCrud",
    header: {
        title: "Communication Template",
        description: {
            text: 'This list has all the messaging templates as per required by the application'
        },
        searchModeTitle: "Search Templates",
        viewModeTitle: "Communication Template"
    },
    actions: [
        {
            identifier: "addCommunicationTemplate",
            type: ButtonType.RAISED,
            label: "Add Communication Template",
            color: ButtonColor.PRIMARY,
            size: ButtonSize.SMALL,
            icon: "add",
            onlyIcon: false,
            displayInFormModes: [FormDiaplyMode.CRUD_LIST],
            permission: {
                subject: "Communication",
                action: PermissionAction.CREATE
            }
        },
    ],
    quickLinks: [
    ],
    search: {
        displayType: SearchDisplayType.RIGHT_MODAL,
        form: { 
            identifier: "communicationTemplateSearchForm",
            header: { 
                title: "Search Communication Template",
            },
            description: { 
                text: "Filter criteria based on which communication templates can be searched"
            },
            displayInColumns: 3,
            formFields: [
                {
                    field: {
                        key: "key",
                        label: "Key",
                        type: FieldType.TEXT,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        fieldDisplayType: FieldDiaplyType.INLINE,
                        placeholder: "Ex. - USER_LOGIN"
                    },
                },
                {
                    field: {
                        key: "name",
                        label: "Name",
                        type: FieldType.TEXT,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        fieldDisplayType: FieldDiaplyType.INLINE
                    },
                },
                {
                    field: {
                        key: "type",
                        label: "Type",
                        icon: "",
                        type: FieldType.DROPDOWN,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        value: "",
                        defaultOption: "Select"
                    }
                },
                {
                    field: {
                        key: "target",
                        label: "Target",
                        icon: "",
                        type: FieldType.DROPDOWN,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        multiselect: true,
                        isUnique: false,
                        value: "",
                        defaultOption: "Any Target"
                    }
                },
                {
                    field: {
                        key: "language",
                        label: "Language",
                        icon: "",
                        type: FieldType.DROPDOWN,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        multiselect: true,
                        isUnique: false,
                        value: "",
                        defaultOption: "Any Language"
                    }
                },
                {
                    field: {
                        key: "content",
                        label: "Content",
                        type: FieldType.TEXT,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        fieldDisplayType: FieldDiaplyType.INLINE
                    },
                },
            ],
            action: {
                align: "right",
                buttons: [
                    {
                        identifier: "reset",
                        type: ButtonType.RAISED,
                        label: "Reset",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "replay",
                        onlyIcon: false
                    },
                    {
                        identifier: "search",
                        type: ButtonType.RAISED,
                        label: "Search",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "search",
                        onlyIcon: false
                    }
                ]
            },
            displayType: FieldDiaplyType.INLINE,
            displayMode: FormDiaplyMode.ADD,
        },
    },
    list: {
        displayType: CrudListDisplayType.TAB,
        lists: [ 
            {
                identifier: "communicationTemplateList",
                header: {
                    title: "List of Communication Templates",
                },
                // mobile: {
                //     displayVertical: true, 
                //     align: LabelTextAlign.RIGHT
                // },             
                columns: [
                    {
                        fields: [
                            {
                                key: "name",
                                label: "Name",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: false,
                                fieldDisplayType: FieldDiaplyType.INLINE
                            },
                            {
                                key: "description",
                                label: "Description",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: false,
                                fieldDisplayType: FieldDiaplyType.INLINE
                            },
                            {
                                key: "content",
                                label: "Content",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: false,
                                fieldDisplayType: FieldDiaplyType.INLINE,
                                ellipsis: 100
                            }
                        ],
                        sortable: true,
                        show: true,
                        width: 50,
                    },
                    {
                        fields: [
                            {
                                key: "language",
                                label: "Language",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: false,
                                fieldDisplayType: FieldDiaplyType.INLINE
                            }
                        ],
                        sortable: true,
                        show: true,
                        width: 10,
                    },
                    {
                        fields: [
                            {
                                key: "type",
                                label: "Type",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: false,
                                fieldDisplayType: FieldDiaplyType.INLINE
                            }
                        ],
                        sortable: true,
                        show: true,
                        width: 20,
                    },
                    {
                        fields: [
                            {
                                key: "target",
                                label: "Target",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: false,
                                fieldDisplayType: FieldDiaplyType.INLINE
                            }
                        ],
                        sortable: true,
                        show: true,
                        width: 20,
                    }
                ],
                actions: [
                    {
                        identifier: "deleteCommunicationTemplate",
                        type: ButtonType.GHOST,
                        label: "Delete",
                        color: ButtonColor.ASCENT,
                        size: ButtonSize.SMALL,
                        icon: "delete",
                        onlyIcon: false,
                        confirmationConfiguration: {
                            identifier: "deleteCommunicationTemplateCnfDialog",
                            title: "Confirm Delete",
                            message: "Do you want to delete Communication Template - '{name}'?",
                            width: "350",
                            buttons: [
                                {
                                    identifier: "cancelDeleteCommunicationTemplate",
                                    color: ButtonColor.DEFAULT,
                                    size: ButtonSize.SMALL,
                                    type: ButtonType.GHOST,
                                    icon: "close",
                                    label: "Cancel"
                                },
                                {
                                    identifier: "deleteCommunicationTemplateConfirm",
                                    color: ButtonColor.ASCENT,
                                    size: ButtonSize.SMALL,
                                    type: ButtonType.FLAT,
                                    icon: "delete",
                                    label: "Delete"
                                }
                            ]
                        },
                        permission: {
                            subject: "Communication",
                            action: PermissionAction.DELETE
                        }
                    },
                    {
                        identifier: "viewCommunicationTemplate",
                        type: ButtonType.GHOST,
                        label: "View",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "search",
                        onlyIcon: false,
                        permission: {
                            subject: "Communication",
                            action: PermissionAction.READ
                        }
                    },
                    {
                        identifier: "editCommunicationTemplate",
                        type: ButtonType.GHOST,
                        label: "Edit",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "edit",
                        onlyIcon: false,
                        permission: {
                            subject: "Communication",
                            action: PermissionAction.UPDATE
                        }
                    }
                ],
                rowTextColor: (row) => {
                },
                rowBgColor: (record) => {
                },
                uniqueKeys: ["id"],
                listType: ListType.DYNAMIC,
                staticList: {
                    hasOnPageFilter: false
                },
                hasColumnSelection: false,
                pagination: PaginationType.PAGE_WISE,
                pageSize: 10,
                hideFooter: false,
                hideHeader: false,
                hideCard: false,
                // displayMode: ListDiaplyMode.VIEW,
                stickyHeader: false,
                actionWidth: 20,
                defaultSort: {
                    column: "id",
                    order: ListSortOrder.asc
                }
            }
        ]
    },
}

export const communicationTemplateForm: Form = {
    identifier: "communicationTemplateForm",
    header: {
        title: "Communication Template",
        actions: [
        ]
    },
    displayInColumns: 2,
    formFields: [
        {
            field: {
                key: "key",
                label: "Key",
                icon: "",
                type: FieldType.TEXT,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: true,
                placeholder: "i.e. - LOGIN_SMS",
                maxLength: 50,
                hasClear: true,
                value: "",
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Key can't be empty"
                        }
                    }
                ]
            }
        },
        {
            field: {
                key: "name",
                label: "Name",
                icon: "",
                type: FieldType.TEXT,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: false,
                placeholder: "i.e. - Login Sms",
                maxLength: 50,
                hasClear: true,
                value: "",
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Name can't be empty"
                        }
                    }
                ]
            }
        },
        {
            field: {
                key: "description",
                label: "Description",
                icon: "",
                type: FieldType.TEXTAREA,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: false,
                placeholder: "i.e. - Description of the purpose of this template",
                maxLength: 50,
                hasClear: true,
                value: "",
                rows: 4
            },
            displayInColumns: 2
        },
        {
            field: {
                key: "type",
                label: "Type",
                icon: "",
                type: FieldType.DROPDOWN,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: false,
                value: "",
                defaultOption: "Select",
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Type can't be empty"
                        }
                    }
                ]
            }
        },
        {
            field: {
                key: "target",
                label: "Target",
                icon: "",
                type: FieldType.DROPDOWN,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                multiselect: true,
                isUnique: false,
                value: "",
                defaultOption: "Select",
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Target can't be empty"
                        }
                    }
                ]
            }
        },
        {
            field: {
                key: "senderId",
                label: "Sender Id",
                icon: "",
                type: FieldType.DROPDOWN,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                multiselect: true,
                isUnique: false,
                value: "",
                defaultOption: "Select",
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Sender Id can't be empty"
                        }
                    }
                ],
                dependentOnFields: [
                    {
                        key: "target",
                        condition: "SMS",
                        displayMode: DisplayMode.HIDDEN
                    }
                ],
            }
        },
        {
            field: {
                key: "link.basePath",
                label: "Link Base Path",
                icon: "",
                type: FieldType.DROPDOWN,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                multiselect: false,
                isUnique: false,
                value: "",
                options: [
                    {
                        key: "PUBLIC_CONTENT_BUCKET_NAME",
                        value: "Public Bucket Path"
                    },
                    {
                        key: "PUBLIC_CONTENT_BASE_PATH",
                        value: "Public Base Path"
                    },
                    {
                        key: "API_BASE_PATH",
                        value: "Api Base Path"
                    }
                ],
                defaultOption: "Select"
            }
        },
        {
            field: {
                key: "link.uri",
                label: "Url",
                icon: "",
                type: FieldType.TEXTAREA,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: false,
                placeholder: "i.e. - link to be sent as part of the communication",
                maxLength: 50,
                hasClear: true,
                value: ""
            }
        },
    ],
    displayType: FieldDiaplyType.INLINE,
    displayMode: FormDiaplyMode.ADD,
    // badge?: Badge,
    // help?: FormHelp,
    // template?: Template,
    // privilege?: any
}

export const messageForm: Form = {
    identifier: "messageForm",
    header: {
        title: "Message ",
        actions: [
        ]
    },
    displayInColumns: 2,
    formFields: [
        {
            field: {
                key: "language",
                label: "Language",
                icon: "",
                type: FieldType.DROPDOWN,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: false,
                value: "",
                defaultOption: "Select",
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Language can't be empty"
                        }
                    }
                ]
            },
            displayInColumns: 2
        },
        {
            field: {
                key: "subject",
                label: "Subject",
                icon: "",
                type: FieldType.TEXT,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: false,
                placeholder: "i.e. - Subject of the email to be sent",
                maxLength: 50,
                hasClear: true,
                value: "",
                dependentOnFields: [
                    {
                        key: "target",
                        condition: "EMAIL",
                        displayMode: DisplayMode.HIDDEN
                    }
                ],
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Subject can't be empty"
                        }
                    }
                ]
            },
            displayInColumns: 2
        },
        {
            field: {
                key: "title",
                label: "Title",
                icon: "",
                type: FieldType.TEXT,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: false,
                placeholder: "i.e. - Title of the email to be sent",
                maxLength: 50,
                hasClear: true,
                value: "",
                dependentOnFields: [
                    {
                        key: "target",
                        condition: "PUSH",
                        displayMode: DisplayMode.HIDDEN
                    }
                ],
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Subject can't be empty"
                        }
                    }
                ]
            },
            displayInColumns: 2
        },
        {
            field: {
                key: "body",
                label: "Body",
                icon: "",
                type: FieldType.TEXTAREA,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: false,
                placeholder: "",
                maxLength: 200,
                hasClear: true,
                value: "",
                rows: 4,
                dependentOnFields: [
                    {
                        key: "target",
                        condition: ["SMS", "PUSH", "IN_APP"],
                        displayMode: DisplayMode.HIDDEN
                    }
                ],
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Body can't be empty"
                        }
                    }
                ]
            },
            displayInColumns: 2
        },
        {
            field: {
                key: "body",
                label: "Body",
                icon: "",
                type: FieldType.HTML_EDITOR,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: false,
                placeholder: "",
                maxLength: 200,
                hasClear: true,
                value: "",
                height: 300,
                dependentOnFields: [
                    {
                        key: "target",
                        condition: ["EMAIL", "WHATSAPP"],
                        displayMode: DisplayMode.HIDDEN
                    }
                ],
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Body can't be empty"
                        }
                    }
                ]
            },
            displayInColumns: 2
        },
        {
            field: {
                key: "channelKey",
                label: "Channel",
                icon: "",
                type: FieldType.DROPDOWN,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: false,
                hasClear: true,
                value: "",
                dependentOnFields: [
                    {
                        key: "target",
                        condition: "PUSH",
                        displayMode: DisplayMode.HIDDEN
                    }
                ]
            },
            displayInColumns: 1
        },
        {
            field: {
                key: "vibration",
                label: "Vibration",
                icon: "",
                type: FieldType.DROPDOWN,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: false,
                maxLength: 50,
                hasClear: true,
                value: "",
                dependentOnFields: [
                    {
                        key: "target",
                        condition: "PUSH",
                        displayMode: DisplayMode.HIDDEN
                    }
                ]
            }
        },
        {
            field: {
                key: "screenglow",
                label: "Screen Glow",
                icon: "",
                type: FieldType.DROPDOWN,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: false,
                maxLength: 50,
                hasClear: true,
                value: "",
                dependentOnFields: [
                    {
                        key: "target",
                        condition: "PUSH",
                        displayMode: DisplayMode.HIDDEN
                    }
                ]
            }
        },
        {
            field: {
                key: "ringtone",
                label: "Ringtone",
                icon: "",
                type: FieldType.UPLOAD,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: false,
                maxLength: 50,
                hasClear: true,
                value: "",
                fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                dependentOnFields: [
                    {
                        key: "target",
                        condition: "PUSH",
                        displayMode: DisplayMode.HIDDEN
                    }
                ]
            }
        },
        {
            field: {
                key: "icon",
                label: "Icon",
                icon: "",
                type: FieldType.UPLOAD,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: false,
                maxLength: 50,
                hasClear: true,
                value: "",
                fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                dependentOnFields: [
                    {
                        key: "target",
                        condition: "PUSH",
                        displayMode: DisplayMode.HIDDEN
                    }
                ]
            }
        },
        {
            field: {
                key: "attachments",
                label: "Attachments",
                icon: "",
                type: FieldType.UPLOAD,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: false,
                maxLength: 50,
                hasClear: true,
                value: "",
                multiple: true,
                fieldDisplayType: FieldDiaplyType.HORIZONTAL,
            },
            // addMore: true
        }
    ],
    displayType: FieldDiaplyType.INLINE,
    displayMode: FormDiaplyMode.ADD,
    // badge?: Badge,
    // help?: FormHelp,
    // template?: Template,
    // privilege?: any
}