import { FieldType, FieldDiaplyType, HelpDiaplyType, FieldAppearance } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { ListType, ListSortOrder, PaginationType } from 'ngx-material-widget/lib/list/model';
import { Crud, SearchDisplayType, CrudListDisplayType, CrudWidgetType, CrudFormDisplayType } from 'ngx-material-widget/lib/crud/model';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';
import { PermissionAction } from 'ngx-material-widget/lib/privilege/model';
import { Validators } from '@angular/forms';

export const errorCodeCrud: Crud = {
    identifier: "errorCodeCrud",
    header: {
        title: "Error Code",
        description: {
            text: 'All possible Error Code as thrown by different flow in the application'
        },
        searchModeTitle: "Search Error Code",
        viewModeTitle: "Error Code"
    },
    actions: [
        {
            identifier: "addErrorCode",
            type: ButtonType.RAISED,
            label: "App Error Code",
            color: ButtonColor.PRIMARY,
            size: ButtonSize.SMALL,
            icon: "add",
            onlyIcon: false,
            alwaysEnable: true,
            displayInFormModes: [FormDiaplyMode.CRUD_LIST],
            permission: {
                subject: "Message",
                action: PermissionAction.CREATE
            }
        }
    ],
    quickLinks: [
    ],
    list: {
        displayType: CrudListDisplayType.TAB,
        lists: [
            {
                identifier: "errorCodeList",
                // header: {
                //     title: "List of Error Codes",
                // },
                columns: [
                    {
                        fields: [
                            {
                                key: "code",
                                label: "Code",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: false,
                                fieldDisplayType: FieldDiaplyType.INLINE
                            },
                            {
                                key: "message",
                                label: "Message",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: false,
                                fieldDisplayType: FieldDiaplyType.INLINE
                            }
                        ],
                        sortable: true,
                        show: true,
                        width: 70,
                    },
                    {
                        fields: [
                            {
                                key: "modules",
                                label: "Module(s)",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: true,
                                multiselect: true,
                                fieldDisplayType: FieldDiaplyType.INLINE
                            }
                        ],
                        sortable: true,
                        show: true,
                        width: 15,
                    }
                ],
                actions: [
                    {
                        identifier: "deleteErrorCode",
                        type: ButtonType.GHOST,
                        label: "Delete",
                        color: ButtonColor.ASCENT,
                        size: ButtonSize.SMALL,
                        icon: "delete",
                        onlyIcon: false,
                        confirmationConfiguration: {
                            identifier: "deleteErrorCodeCnfDialog",
                            title: "Confirm Delete",
                            message: "Do you want to delete Error Code - '{code}'?",
                            width: "350",
                            buttons: [
                                {
                                    identifier: "cancelDeleteErrorCode",
                                    color: ButtonColor.DEFAULT,
                                    size: ButtonSize.SMALL,
                                    type: ButtonType.GHOST,
                                    icon: "close",
                                    label: "Cancel"
                                },
                                {
                                    identifier: "deleteErrorCodeConfirm",
                                    color: ButtonColor.ASCENT,
                                    size: ButtonSize.SMALL,
                                    type: ButtonType.FLAT,
                                    icon: "delete",
                                    label: "Delete"
                                }
                            ]
                        },
                        permission: {
                            subject: "Message",
                            action: PermissionAction.DELETE
                        }
                    },
                    {
                        identifier: "editErrorCode",
                        type: ButtonType.GHOST,
                        label: "Edit",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "edit",
                        onlyIcon: false,
                        permission: {
                            subject: "Message",
                            action: PermissionAction.UPDATE
                        }
                    },
                ],
                rowBgColor: (record) => {
                },
                uniqueKeys: [""],
                listType: ListType.STATIC,
                staticList: {
                    hasOnPageFilter: true
                },
                hasColumnSelection: false,
                pagination: PaginationType.ALL,
                pageSize: 10,
                hideFooter: false,
                hideHeader: false,
                hideCard: false,
                // displayMode: ListDiaplyMode.VIEW,
                stickyHeader: false,
                actionWidth: 15,
                defaultSort: {
                    column: "id",
                    order: ListSortOrder.asc
                }
            }
        ]
    },
    form: {
        displayType: CrudFormDisplayType.TAB,
        tabs: [
            {
                identifier: "errorCodeForms",
                label: "Error Code Detail",
                description: {
                    text: ""
                },
                statistic: "10",
                displayOnAction: "errorCodeDetail",
                // tabPageBackRoute: ['pages', 'widget1-back'],
                actions: [
                    {
                        identifier: "backToList", 
                        type: ButtonType.RAISED,
                        label: "Close",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "settings_power",
                        onlyIcon: false
                    }
                ],
                widgets: [
                    {
                        rowSpan: 1,
                        colSpan: 2,
                        displayOnAction: "errorCodeDetail",
                        widgetType: CrudWidgetType.FORM,
                        widget: {
                            identifier: "errorCodeForm",
                            // header: {
                            //     title: "View Error Code",
                            // },
                            description: {
                                text: ""
                            },
                            displayInColumns: 3,
                            formFields: [
                                {
                                    field: {
                                        key: "code",
                                        label: "Code",
                                        type: FieldType.TEXT,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        validations: [
                                            {
                                                type: Validators.required,
                                                message: {
                                                    key: "required",
                                                    message: "Code can't be empty"
                                                }
                                            }
                                        ],
                                        // fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    }
                                },
                                {
                                    field: {
                                        key: "message",
                                        label: "Message",
                                        type: FieldType.TEXT,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        validations: [
                                            {
                                                type: Validators.required,
                                                message: {
                                                    key: "required",
                                                    message: "Message can't be empty"
                                                }
                                            }
                                        ],
                                        // fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                },
                                {
                                    field: {
                                        key: "modules",
                                        label: "Modules",
                                        type: FieldType.DROPDOWN,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        multiselect: true,
                                        defaultOption: "Select",
                                        validations: [
                                            {
                                                type: Validators.required,
                                                message: {
                                                    key: "required",
                                                    message: "Modules can't be empty"
                                                }
                                            }
                                        ]
                                        // fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                },
                            ],
                            action: {
                                align: "right",
                                buttons: [
                                    {
                                        identifier: "deleteErrorCode",
                                        type: ButtonType.GHOST,
                                        label: "Delete",
                                        color: ButtonColor.ASCENT,
                                        size: ButtonSize.SMALL,
                                        icon: "delete",
                                        onlyIcon: false,
                                        displayInFormModes: [FormDiaplyMode.EDIT],
                                        permission: {
                                            subject: "Message",
                                            action: PermissionAction.DELETE
                                        },
                                        confirmationConfiguration: {
                                            identifier: "deleteErrorCodeCnfDialog",
                                            title: "Confirm Delete",
                                            message: "Do you want to delete Error Code - '{code}'?",
                                            width: "350",
                                            buttons: [
                                                {
                                                    identifier: "cancelDeleteErrorCode",
                                                    color: ButtonColor.DEFAULT,
                                                    size: ButtonSize.SMALL,
                                                    type: ButtonType.GHOST,
                                                    icon: "close",
                                                    label: "Cancel"
                                                },
                                                {
                                                    identifier: "deleteErrorCodeConfirm",
                                                    color: ButtonColor.ASCENT,
                                                    size: ButtonSize.SMALL,
                                                    type: ButtonType.FLAT,
                                                    icon: "delete",
                                                    label: "Delete"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        identifier: "updateErrorCode",
                                        type: ButtonType.RAISED,
                                        label: "Update",
                                        color: ButtonColor.PRIMARY,
                                        size: ButtonSize.SMALL,
                                        icon: "edit",
                                        onlyIcon: false,
                                        displayInFormModes: [FormDiaplyMode.ADD, FormDiaplyMode.EDIT],
                                        permission: {
                                            subject: "Message",
                                            action: PermissionAction.CREATE
                                        }
                                    }
                                ]
                            },
                            displayType: FieldDiaplyType.INLINE,
                            displayMode: FormDiaplyMode.ADD,
                        },
                    }
                ]
            }
        ],
    }
}