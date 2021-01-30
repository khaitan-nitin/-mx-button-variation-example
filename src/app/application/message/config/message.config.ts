import { FieldType, FieldDiaplyType, HelpDiaplyType, FieldAppearance, DisplayMode } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { ListType, ListSortOrder, PaginationType, CellControllType, CellControllFieldClass } from 'ngx-material-widget/lib/list/model';
import { Crud, SearchDisplayType, CrudListDisplayType, CrudWidgetType, CrudFormDisplayType, CrudCustomPluginPlacement } from 'ngx-material-widget/lib/crud/model';
import { FormCellControlType, FormDiaplyMode } from 'ngx-material-widget/lib/form/model';
import { PermissionAction } from 'ngx-material-widget/lib/privilege/model';
import { Validators } from '@angular/forms';
import { MessageRowHoverComponent } from '../component/message/message-row-hover/message-row-hover.component';

export const messageCrud: Crud = {
    identifier: "messageCrud",
    header: {
        title: "Message",
        description: {
            text: 'Success/Failure messages as it will be used in the system'
        },
        searchModeTitle: "Search Message",
        viewModeTitle: "Message"
    },
    actions: [
        {
            identifier: "addMessage",
            type: ButtonType.RAISED,
            label: "App Message",
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
                identifier: "messageList",
                // header: {
                //     title: "List of Messages",
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
                        template: {
                            //css: `.red{color:red;}`,
                            //html: `<strong>cell Template</strong> Index is:- {{row?.code}}`,
                            layout: {
                                rowHeight: 70,
                                cells: [
                                    {
                                        rows: 1,
                                        cols: 9,
                                        controls: [
                                            {
                                                key: "code",
                                                type: CellControllType.FIELD,
                                                fieldStyle: {
                                                    class: CellControllFieldClass.PRIMARY
                                                },
                                                fullWidth: true
                                            },
                                            {
                                                key: "modules",
                                                type: CellControllType.FIELD,
                                                fieldStyle: {
                                                    class: CellControllFieldClass.SECONDARY
                                                },
                                                fullWidth: true
                                            },
                                            {
                                                key: "message",
                                                type: CellControllType.FIELD,
                                                fieldStyle: {
                                                    class: CellControllFieldClass.TERTIARY
                                                },
                                                fullWidth: true
                                            }
                                        ],
                                        // displayInline: {
                                        //     separator: "&bull;"
                                        // },
                                        show: true
                                    }
                                ]
                            }
                        },
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
                row: {
                    hover: {
                        width: 400,
                        template: {
                            // component: MessageRowHoverComponent,
                            layout: {
                                rowHeight: 70,
                                cells: [
                                    {
                                        rows: 1,
                                        cols: 12,
                                        controls: [
                                            {
                                                key: "code",
                                                type: CellControllType.FIELD,
                                                fieldStyle: {
                                                    class: CellControllFieldClass.PRIMARY
                                                },
                                                fullWidth: true
                                            },
                                            {
                                                key: "modules",
                                                type: CellControllType.FIELD,
                                                fieldStyle: {
                                                    class: CellControllFieldClass.SECONDARY
                                                },
                                                fullWidth: true
                                            },
                                            {
                                                key: "message",
                                                type: CellControllType.FIELD,
                                                fieldStyle: {
                                                    class: CellControllFieldClass.TERTIARY
                                                },
                                                fullWidth: true
                                            }
                                        ],
                                        // displayInline: {
                                        //     separator: "&bull;"
                                        // },
                                        show: true
                                    }
                                ]
                            }
                        }
                    },
                    template: {
                        css: '',
                        html: `<strong class="green">cell2 Template</strong> Index is:-{{index}}`
                    },
                },
                actions: [
                    {
                        identifier: "deleteMessage",
                        type: ButtonType.GHOST,
                        label: "Delete",
                        color: ButtonColor.WARN,
                        size: ButtonSize.TINY,
                        icon: "delete",
                        onlyIcon: false,
                        confirmationConfiguration: {
                            identifier: "deleteMessageCnfDialog",
                            title: "Confirm Delete",
                            message: "Do you want to delete Message - '{code}'?",
                            width: "350",
                            buttons: [
                                {
                                    identifier: "cancelDeleteMessage",
                                    color: ButtonColor.DEFAULT,
                                    size: ButtonSize.SMALL,
                                    type: ButtonType.GHOST,
                                    icon: "close",
                                    label: "Cancel"
                                },
                                {
                                    identifier: "deleteMessageConfirm",
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
                        identifier: "editMessage",
                        type: ButtonType.GHOST,
                        label: "Edit",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.TINY,
                        icon: "edit",
                        onlyIcon: false,
                        permission: {
                            subject: "Message",
                            action: PermissionAction.UPDATE
                        },
                        dependentOnFields: [
                            {
                                key: "code",
                                condition: "INVALID_ACCESS",
                                displayMode: DisplayMode.HIDDEN
                            }
                        ],
                    },
                ],
                mobile: {
                    rowHeight: 70,
                    cells: [
                        {
                            rows: 1,
                            cols: 3,
                            controls: [
                                {
                                    key: "code",
                                    type: CellControllType.FIELD,
                                    fieldStyle: {
                                        class: CellControllFieldClass.PRIMARY
                                    },
                                    fullWidth: true
                                },
                                {
                                    key: "modules",
                                    type: CellControllType.FIELD,
                                    fieldStyle: {
                                        class: CellControllFieldClass.SECONDARY
                                    },
                                    fullWidth: true
                                },
                                {
                                    key: "message",
                                    type: CellControllType.FIELD,
                                    fieldStyle: {
                                        class: CellControllFieldClass.TERTIARY
                                    },
                                    fullWidth: true
                                }
                            ],
                            // displayInline: {
                            //     separator: "&bull;"
                            // },
                            show: true
                        },
                        {
                            rows: 1,
                            cols: 1,
                            controls: [
                                {
                                    key: "editMessage",
                                    type: CellControllType.BUTTON,
                                    fullWidth: true,
                                },
                                {
                                    key: "deleteMessage",
                                    type: CellControllType.BUTTON,
                                    fullWidth: true,
                                }
                            ],
                            show: true
                        }
                    ],
                    sorting: [
                        {
                            key: 'code',
                            label: 'Sort by Code',
                            direction: ListSortOrder.asc
                        },
                        {
                            key: 'code',
                            label: 'Sort by Code',
                            direction: ListSortOrder.desc
                        },
                        {
                            key: 'message',
                            label: 'Sort by Message',
                            direction: ListSortOrder.desc
                        }
                    ]
                },
                rowBgColor: (record) => {
                },
                uniqueKeys: [""],
                listType: ListType.STATIC,
                staticList: {
                    hasOnPageFilter: true
                },
                hasColumnSelection: false,
                pagination: PaginationType.PAGE_WISE, 
                pageSize: 10,
                hideFooter: false,
                hideHeader: false,
                hideCard: false,
                // displayMode: ListDiaplyMode.VIEW,
                stickyHeader: true,
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
                identifier: "messageForms",
                label: "Message Detail",
                description: {
                    text: ""
                },
                statistic: "10",
                displayOnAction: "messageDetail",
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
                // customPlugin: {
                //     component: MessageRowHoverComponent,
                //     placement: CrudCustomPluginPlacement.ABOVE
                // },        
                widgets: [
                    {
                        rowSpan: 1,
                        colSpan: 2,
                        displayOnAction: "messageDetail",
                        widgetType: CrudWidgetType.FORM,
                        widget: {
                            identifier: "messageForm",
                            // header: {
                            //     title: "View Message",
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
                                        identifier: "deleteMessage",
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
                                            identifier: "deleteMessageCnfDialog",
                                            title: "Confirm Delete",
                                            message: "Do you want to delete Message - '{code}'?",
                                            width: "350",
                                            buttons: [
                                                {
                                                    identifier: "cancelDeleteMessage",
                                                    color: ButtonColor.DEFAULT,
                                                    size: ButtonSize.SMALL,
                                                    type: ButtonType.GHOST,
                                                    icon: "close",
                                                    label: "Cancel"
                                                },
                                                {
                                                    identifier: "deleteMessageConfirm",
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
                                        identifier: "updateMessage",
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
                                        },
                                        dependentOnFields: [
                                            {
                                                key: "code",
                                                condition: "abc",
                                                displayMode: DisplayMode.HIDDEN
                                            }
                                        ],
                                    }
                                ]
                            },
                            displayType: FieldDiaplyType.INLINE,
                            displayMode: FormDiaplyMode.ADD,

                            showCustomLayout: true,
                            layout: {
                                cellCount: 12,
                                rowHeight: 70,
                                cells: [
                                    {
                                        rows: 1,
                                        cols: 7,
                                        controls: [
                                            {
                                                key: "code",
                                                type: FormCellControlType.FIELD,
                                                fullWidth: true
                                            },
                                        ],
                                        // displayInline: {
                                        //     separator: "&bull;"
                                        // },
                                        show: true
                                    },
                                    {
                                        rows: 1,
                                        cols: 5,
                                        controls: [
                                            {
                                                key: "modules",
                                                type: FormCellControlType.FIELD,
                                                fullWidth: true
                                            }
                                        ],
                                        // displayInline: {
                                        //     separator: "&bull;"
                                        // },
                                        show: true
                                    },
                                    {
                                        rows: 1,
                                        cols: 12,
                                        controls: [
                                            {
                                                key: "message",
                                                type: FormCellControlType.FIELD,
                                                fullWidth: true
                                            }
                                        ],
                                        // displayInline: {
                                        //     separator: "&bull;"
                                        // },
                                        show: true
                                    }
                                ]
                            }
                        },
                    }
                ]
            }
        ]
    }
}