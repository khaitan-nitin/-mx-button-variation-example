import { FieldType, FieldDiaplyType, HelpDiaplyType, FieldAppearance, DisplayMode } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { ListType, ListSortOrder, PaginationType } from 'ngx-material-widget/lib/list/model';
import { Crud, SearchDisplayType, CrudListDisplayType, CrudWidgetType, CrudFormDisplayType } from 'ngx-material-widget/lib/crud/model';
import { FormDiaplyMode, Form } from 'ngx-material-widget/lib/form/model';
import { Validators } from '@angular/forms';
import { PermissionAction } from 'ngx-material-widget/lib/privilege/model';

export const collectionCrud: Crud = {
    identifier: "collectionCrud",
    header: {
        title: "Collection",
        description: {
            text: 'Different types of Collections to be used by the application'
        },
        searchModeTitle: "Search Collection",
        viewModeTitle: "Collection"
    },
    actions: [
        {
            identifier: "addCollection",
            type: ButtonType.RAISED,
            label: "App Collection",
            color: ButtonColor.PRIMARY,
            size: ButtonSize.SMALL,
            icon: "add",
            onlyIcon: false,
            alwaysEnable: true,
            displayInFormModes: [FormDiaplyMode.CRUD_LIST],
            permission: {
                subject: "Marketing",
                action: PermissionAction.CREATE
            }
        }
    ],
    quickLinks: [
    ],
    search: {
        displayType: SearchDisplayType.ABOVE_LIST,
        form: {
            identifier: "collectionSearchForm",
            header: {
                title: "Search Collection",
            },
            description: {
                text: "Filter criteria based on which Collections can be searched"
            },
            displayInColumns: 3,
            formFields: [
                {
                    field: {
                        key: "displayType",
                        label: "Display Type",
                        type: FieldType.DROPDOWN,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                    }
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
                        key: "accessibility.accessibilityCriteriaId",
                        label: "Criteria",
                        type: FieldType.DROPDOWN,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                    }
                },
                {
                    field: {
                        key: "active",
                        label: "Active",
                        type: FieldType.DROPDOWN,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        fieldDisplayType: FieldDiaplyType.INLINE,
                        defaultOption: "All"
                    },
                },
                {
                    field: {
                        key: "isRecurring",
                        label: "Recurring",
                        type: FieldType.DROPDOWN,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        fieldDisplayType: FieldDiaplyType.INLINE,
                        defaultOption: "All"
                    },
                },
                {
                    field: {
                        key: "accessibility.startDate",
                        label: "Available From Date",
                        type: FieldType.CALENDAR,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        fieldDisplayType: FieldDiaplyType.INLINE
                    },
                },
                {
                    field: {
                        key: "accessibility.endDate",
                        label: "Available To Date",
                        type: FieldType.CALENDAR,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        fieldDisplayType: FieldDiaplyType.INLINE
                    },
                }
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
                identifier: "collectionList",
                header: {
                    title: "List of Collection",
                },
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
                            }
                        ],
                        sortable: true,
                        show: true,
                        width: 35,
                    },
                    {
                        fields: [
                            {
                                key: "isRecurring",
                                label: "Recurring",
                                type: FieldType.BOOLEAN,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: true,
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
                                key: "activeDuration",
                                label: "Active Duration",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: true,
                                fieldDisplayType: FieldDiaplyType.INLINE
                            }
                        ],
                        sortable: true,
                        show: true,
                        width: 25,
                    },
                    {
                        fields: [
                            {
                                key: "active",
                                label: "Active",
                                type: FieldType.BOOLEAN,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: true,
                                fieldDisplayType: FieldDiaplyType.INLINE
                            }
                        ],
                        sortable: true,
                        show: true,
                        width: 10,
                    }
                ],
                actions: [
                    {
                        identifier: "deleteCollection",
                        type: ButtonType.GHOST,
                        label: "Delete",
                        color: ButtonColor.ASCENT,
                        size: ButtonSize.SMALL,
                        icon: "delete",
                        onlyIcon: false,
                        confirmationConfiguration: {
                            identifier: "deleteCollectionCnfDialog",
                            title: "Confirm Delete",
                            message: "Do you want to delete Collection - '{name}'?",
                            width: "350",
                            buttons: [
                                {
                                    identifier: "cancelDeleteCollection",
                                    color: ButtonColor.DEFAULT,
                                    size: ButtonSize.SMALL,
                                    type: ButtonType.GHOST,
                                    icon: "close",
                                    label: "Cancel"
                                },
                                {
                                    identifier: "deleteCollectionConfirm",
                                    color: ButtonColor.ASCENT,
                                    size: ButtonSize.SMALL,
                                    type: ButtonType.FLAT,
                                    icon: "delete",
                                    label: "Delete"
                                }
                            ]
                        },
                        permission: {
                            subject: "Marketing",
                            action: PermissionAction.DELETE
                        }
                    },
                    {
                        identifier: "editCollection",
                        type: ButtonType.GHOST,
                        label: "Edit",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "edit",
                        onlyIcon: false,
                        permission: {
                            subject: "Marketing",
                            action: PermissionAction.UPDATE
                        }
                    },
                    {
                        identifier: "viewCollection",
                        type: ButtonType.GHOST,
                        label: "View",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "search",
                        onlyIcon: false,
                        permission: {
                            subject: "Marketing",
                            action: PermissionAction.READ
                        }
                    }
                ],
                rowBgColor: (record) => {
                },
                uniqueKeys: [""],
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
    form: {
        displayType: CrudFormDisplayType.ACCORDIAN,
        tabs: [
            {
                identifier: "collectionForms",
                label: "Collection Detail",
                description: {
                    text: ""
                },
                statistic: "10",
                displayOnAction: "collectionDetail",
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
                        displayOnAction: "collectionDetail",
                        widgetType: CrudWidgetType.FORM,
                        widget: {
                            identifier: "collectionBasicDetailForm",
                            header: {
                                title: "Basic Detail",
                                addModeTitle: "Add Basic Detail",
                                editModeTitle: "Edit Basic Detail",
                                viewModeTitle: "View Basic Detail"
                            },
                            description: {
                                text: ""
                            },
                            displayInColumns: 1,
                            formFields: [
                                {
                                    field: {
                                        key: "key",
                                        label: "Key",
                                        type: FieldType.TEXT,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        validations: [
                                            {
                                                type: Validators.required,
                                                message: {
                                                    key: "required",
                                                    message: "Key can't be empty"
                                                }
                                            }
                                        ],
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    }
                                },
                                {
                                    field: {
                                        key: "name",
                                        label: "Name",
                                        type: FieldType.TEXT,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        validations: [
                                            {
                                                type: Validators.required,
                                                message: {
                                                    key: "required",
                                                    message: "Name can't be empty"
                                                }
                                            }
                                        ],
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    }
                                },
                                {
                                    field: {
                                        key: "description",
                                        label: "Description",
                                        type: FieldType.TEXTAREA,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    }
                                },
                                {
                                    field: {
                                        key: "sortOrder",
                                        label: "Sort Order",
                                        type: FieldType.NUMBER,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    }
                                },
                                {
                                    field: {
                                        key: "active",
                                        label: "Active",
                                        type: FieldType.DROPDOWN,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        defaultOption: "Select",
                                        validations: [
                                            {
                                                type: Validators.required,
                                                message: {
                                                    key: "required",
                                                    message: "Active can't be empty"
                                                }
                                            }
                                        ],
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    }
                                }
                            ],
                            action: {
                                align: "right",
                                buttons: [
                                    {
                                        identifier: "deleteCollection",
                                        type: ButtonType.GHOST,
                                        label: "Delete",
                                        color: ButtonColor.ASCENT,
                                        size: ButtonSize.SMALL,
                                        icon: "delete",
                                        onlyIcon: false,
                                        displayInFormModes: [FormDiaplyMode.EDIT],
                                        permission: {
                                            subject: "Marketing",
                                            action: PermissionAction.DELETE
                                        },
                                        confirmationConfiguration: {
                                            identifier: "deleteCollectionCnfDialog",
                                            title: "Confirm Delete",
                                            message: "Do you want to delete Collection - '{name}'?",
                                            width: "350",
                                            buttons: [
                                                {
                                                    identifier: "cancelDeleteCollection",
                                                    color: ButtonColor.DEFAULT,
                                                    size: ButtonSize.SMALL,
                                                    type: ButtonType.GHOST,
                                                    icon: "close",
                                                    label: "Cancel"
                                                },
                                                {
                                                    identifier: "deleteCollectionConfirm",
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
                                        identifier: "updateCollectionBasicDetail",
                                        type: ButtonType.RAISED,
                                        label: "Update",
                                        color: ButtonColor.PRIMARY,
                                        size: ButtonSize.SMALL,
                                        icon: "edit",
                                        onlyIcon: false,
                                        displayInFormModes: [FormDiaplyMode.ADD, FormDiaplyMode.EDIT],
                                        permission: {
                                            subject: "Marketing",
                                            action: PermissionAction.UPDATE
                                        }
                                    }
                                ]
                            },
                            displayType: FieldDiaplyType.INLINE,
                            displayMode: FormDiaplyMode.EDIT,
                        },
                    },
                    {
                        rowSpan: 1,
                        colSpan: 2,
                        displayOnAction: "collectionDetail",
                        widgetType: CrudWidgetType.FORM,
                        widget: {
                            identifier: "collectionAccessDetailForm",
                            header: {
                                title: "Who can access this collection?"
                            },
                            description: {
                                text: ""
                            },
                            displayInColumns: 1,
                            formFields: [
                                {
                                    field: {
                                        key: "accessibility.accessibilityCriteriaId",
                                        label: "Criteria",
                                        type: FieldType.DROPDOWN,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    }
                                },
                                {
                                    field: {
                                        key: "accessibility.ruleId",
                                        label: "Rule",
                                        type: FieldType.DROPDOWN,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                    addMore: true
                                },
                                {
                                    field: {
                                        key: "accessibility.oneTimeView",
                                        label: "One Time View",
                                        type: FieldType.DROPDOWN,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    }
                                },
                                {
                                    field: {
                                        key: "accessibility.hideAfterClick",
                                        label: "Hide After Click",
                                        type: FieldType.DROPDOWN,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    }
                                },
                                {
                                    field: {
                                        key: "accessibility.startDate",
                                        label: "Start Date",
                                        type: FieldType.CALENDAR,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    }
                                },
                                {
                                    field: {
                                        key: "accessibility.endDate",
                                        label: "End Date",
                                        type: FieldType.CALENDAR,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    }
                                }
                            ],
                            action: {
                                align: "right",
                                buttons: [
                                    {
                                        identifier: "updateCollectionAccessDetail",
                                        type: ButtonType.RAISED,
                                        label: "Update",
                                        color: ButtonColor.PRIMARY,
                                        size: ButtonSize.SMALL,
                                        icon: "edit",
                                        onlyIcon: false,
                                        displayInFormModes: [FormDiaplyMode.ADD, FormDiaplyMode.EDIT],
                                        permission: {
                                            subject: "Marketing",
                                            action: PermissionAction.UPDATE
                                        }
                                    }
                                ]
                            },
                            displayType: FieldDiaplyType.INLINE,
                            displayMode: FormDiaplyMode.EDIT,
                        },
                    }
                ]
            },
            {
                identifier: "collectionRecurringForms",
                label: "Recurring Details",
                description: {
                    text: ""
                },
                statistic: "10",
                displayOnAction: "collectionRecurringDetail",
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
                        displayOnAction: "collectionRecurringDetail",
                        widgetType: CrudWidgetType.FORM,
                        widget: {
                            identifier: "collectionRecurringDetailForm",
                            header: {
                                title: "Recurring Detail",
                                addModeTitle: "Add Recurring Detail",
                                editModeTitle: "Edit Recurring Detail",
                                viewModeTitle: "View Recurring Detail"
                            },
                            description: {
                                text: ""
                            },
                            displayInColumns: 1,
                            formFields: [
                                {
                                    field: {
                                        key: "accessibility.recurring.frequency",
                                        label: "Frequency",
                                        type: FieldType.DROPDOWN,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                                        value: "WEEKLY",
                                        defaultOption: "None"
                                    }
                                },
                                {
                                    field: {
                                        key: "accessibility.recurring.activeOnDays",
                                        label: "Available on Days",
                                        type: FieldType.CHECKBOX,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                                        dependentOnFields: [
                                            {
                                                key: "accessibility.recurring.frequency",
                                                condition: ["WEEKLY", "BIWEEKLY"],
                                                displayMode: DisplayMode.HIDDEN
                                            }
                                        ],

                                    }
                                },
                            ],
                            action: {
                                align: "right",
                                buttons: [
                                    {
                                        identifier: "updateCollectionRecurringDetail",
                                        type: ButtonType.RAISED,
                                        label: "Update",
                                        color: ButtonColor.PRIMARY,
                                        size: ButtonSize.SMALL,
                                        icon: "edit",
                                        onlyIcon: false,
                                        displayInFormModes: [FormDiaplyMode.ADD, FormDiaplyMode.EDIT],
                                        permission: {
                                            subject: "Marketing",
                                            action: PermissionAction.UPDATE
                                        }
                                    }
                                ]
                            },
                            displayType: FieldDiaplyType.INLINE,
                            displayMode: FormDiaplyMode.EDIT,
                        },
                    },
                    {
                        rowSpan: 1,
                        colSpan: 2,
                        displayOnAction: "collectionRecurringDetail",
                        widgetType: CrudWidgetType.LIST,
                        widget: {
                            identifier: "collectionRecurringDetailList",
                            header: {
                                title: "Recurring in Month",
                                actions: [{
                                    identifier: "editCollection",
                                    type: ButtonType.FLAT,
                                    label: "Monthly Recurring",
                                    color: ButtonColor.PRIMARY,
                                    size: ButtonSize.SMALL,
                                    icon: "add",
                                    onlyIcon: false,
                                    permission: {
                                        subject: "Marketing",
                                        action: PermissionAction.UPDATE
                                    }
                                }],
                            },
                            columns: [
                                {
                                    fields: [
                                        {
                                            key: "recurringFor",
                                            label: "Recurring For",
                                            type: FieldType.LABEL,
                                            appearance: FieldAppearance.STANDARD,
                                            isReadOnly: false,
                                            isUnique: false,
                                            //fieldDisplayType: FieldDiaplyType.INLINE
                                        }
                                    ],
                                    sortable: true,
                                    show: true,
                                    width: 20,
                                },
                                {
                                    fields: [
                                        {
                                            key: "days",
                                            label: "Days",
                                            type: FieldType.LABEL,
                                            appearance: FieldAppearance.STANDARD,
                                            isReadOnly: false,
                                            isUnique: true,
                                            //fieldDisplayType: FieldDiaplyType.INLINE
                                        }
                                    ],
                                    sortable: true,
                                    show: true,
                                    width: 70,
                                }
                            ],
                            actions: [
                                {
                                    identifier: "deleteCollectionRecurringMonth",
                                    type: ButtonType.GHOST,
                                    label: "Delete",
                                    color: ButtonColor.ASCENT,
                                    size: ButtonSize.SMALL,
                                    icon: "delete",
                                    onlyIcon: false,
                                    confirmationConfiguration: {
                                        identifier: "deleteCollectionRecurringMonthCnfDialog",
                                        title: "Confirm Delete",
                                        message: "Do you want to delete Collection Recurring Month?",
                                        width: "350",
                                        buttons: [
                                            {
                                                identifier: "cancelDeleteCollectionRecurringMonth",
                                                color: ButtonColor.DEFAULT,
                                                size: ButtonSize.SMALL,
                                                type: ButtonType.GHOST,
                                                icon: "close",
                                                label: "Cancel"
                                            },
                                            {
                                                identifier: "deleteCollectionRecurringMonthConfirm",
                                                color: ButtonColor.ASCENT,
                                                size: ButtonSize.SMALL,
                                                type: ButtonType.FLAT,
                                                icon: "delete",
                                                label: "Delete"
                                            }
                                        ]
                                    },
                                    permission: {
                                        subject: "Marketing",
                                        action: PermissionAction.DELETE
                                    }
                                }
                            ],
                            rowBgColor: (record) => {
                            },
                            uniqueKeys: [""],
                            listType: ListType.STATIC,
                            staticList: {
                                hasOnPageFilter: false
                            },
                            hasColumnSelection: false,
                            pagination: PaginationType.ALL,
                            pageSize: 10,
                            hideFooter: false,
                            hideHeader: false,
                            hideCard: false,
                            // displayMode: ListDiaplyMode.VIEW,
                            stickyHeader: false,
                            actionWidth: 25,
                            defaultSort: {
                                column: "id",
                                order: ListSortOrder.asc
                            }
                        },
                        dependentOnFields: [
                            {
                                key: "collectionRecurringDetailForm.accessibility.recurring.frequency",
                                condition: "MONTHLY",
                                displayMode: DisplayMode.HIDDEN
                            }
                        ]
                    }
                ]
            },
            {
                identifier: "collectionDisplayForms",
                label: "Product Display",
                description: {
                    text: ""
                },
                statistic: "10",
                displayOnAction: "collectionDisplayDetail",
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
                        displayOnAction: "collectionDisplayDetail",
                        widgetType: CrudWidgetType.FORM,
                        widget: {
                            identifier: "collectionDisplayDetail",
                            header: {
                                title: "Display",
                                addModeTitle: "Add Display",
                                editModeTitle: "Edit Display",
                                viewModeTitle: "View Display"
                            },
                            description: {
                                text: ""
                            },
                            displayInColumns: 1,
                            formFields: [
                                {
                                    field: {
                                        key: "displayType",
                                        label: "Display Type",
                                        type: FieldType.DROPDOWN,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    }
                                },
                                {
                                    field: {
                                        key: "rowHeight",
                                        label: "Row Height",
                                        type: FieldType.NUMBER,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    }
                                },
                            ],
                            action: {
                                align: "right",
                                buttons: [
                                    {
                                        identifier: "updateCollectionDisplayDetail",
                                        type: ButtonType.RAISED,
                                        label: "Update",
                                        color: ButtonColor.PRIMARY,
                                        size: ButtonSize.SMALL,
                                        icon: "edit",
                                        onlyIcon: false,
                                        displayInFormModes: [FormDiaplyMode.ADD, FormDiaplyMode.EDIT],
                                        permission: {
                                            subject: "Marketing",
                                            action: PermissionAction.UPDATE
                                        }
                                    }
                                ]
                            },
                            displayType: FieldDiaplyType.INLINE,
                            displayMode: FormDiaplyMode.EDIT,
                        }
                    },
                    {
                        rowSpan: 1,
                        colSpan: 2,
                        displayOnAction: "collectionDisplayDetail",
                        widgetType: CrudWidgetType.FORM,
                        multiple: {
                            addMore: true,
                            sectionTitle: "Manage Cells"
                        },
                        widget: {
                            identifier: "collectionDisplayCellDetail",
                            header: {
                                title: "Cell",
                                addModeTitle: "Add Cell",
                                editModeTitle: "Edit Cell",
                                viewModeTitle: "View Cell"
                            },
                            description: {
                                text: ""
                            },
                            displayInColumns: 1,
                            formFields: [
                                {
                                    field: {
                                        key: "key",
                                        label: "Key",
                                        type: FieldType.TEXT,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    }
                                },
                                {
                                    field: {
                                        key: "rows",
                                        label: "Row Span",
                                        type: FieldType.NUMBER,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        dependentOnFields: [
                                            {
                                                key: "collectionDisplayDetail.displayType",
                                                condition: "GRID",
                                                displayMode: DisplayMode.HIDDEN
                                            }
                                        ]
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    }
                                },
                                {
                                    field: {
                                        key: "cols",
                                        label: "Col Span",
                                        type: FieldType.NUMBER,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        dependentOnFields: [
                                            {
                                                key: "collectionDisplayDetail.displayType",
                                                condition: "GRID",
                                                displayMode: DisplayMode.HIDDEN
                                            }
                                        ]
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    }
                                },
                                {
                                    field: {
                                        key: "bgColor",
                                        label: "Background",
                                        type: FieldType.COLOR,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    }
                                },
                                {
                                    field: {
                                        key: "aspectRatio",
                                        label: "Aspect Ratio",
                                        type: FieldType.TEXT,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    }
                                },
                                {
                                    field: {
                                        key: "sortOrder",
                                        label: "Sort Order",
                                        type: FieldType.NUMBER,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        dependentOnFields: [
                                            {
                                                key: "collectionDisplayDetail.displayType",
                                                condition: "CAROUSAL",
                                                displayMode: DisplayMode.HIDDEN
                                            }
                                        ]
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    }
                                },
                            ],
                            action: {
                                align: "right",
                                buttons: [
                                    {
                                        identifier: "manageBannerDisplayCellDetail",
                                        type: ButtonType.RAISED,
                                        label: "Manage Banner",
                                        color: ButtonColor.PRIMARY,
                                        size: ButtonSize.SMALL,
                                        icon: "edit",
                                        onlyIcon: false,
                                        displayInFormModes: [FormDiaplyMode.ADD, FormDiaplyMode.EDIT],
                                        permission: {
                                            subject: "Marketing",
                                            action: PermissionAction.UPDATE
                                        }
                                    },
                                    {
                                        identifier: "updateCollectionDisplayCellDetail",
                                        type: ButtonType.RAISED,
                                        label: "Update",
                                        color: ButtonColor.PRIMARY,
                                        size: ButtonSize.SMALL,
                                        icon: "edit",
                                        onlyIcon: false,
                                        displayInFormModes: [FormDiaplyMode.ADD, FormDiaplyMode.EDIT],
                                        permission: {
                                            subject: "Marketing",
                                            action: PermissionAction.UPDATE
                                        }
                                    }
                                ]
                            },
                            displayType: FieldDiaplyType.INLINE,
                            displayMode: FormDiaplyMode.EDIT,
                        },
                        dependentOnFields: [
                            {
                                key: "collectionDisplayDetail.displayType",
                                condition: ["GRID", "CAROUSAL"],
                                displayMode: DisplayMode.HIDDEN
                            }
                        ]
                    }
                ]
            },
        ],
    }
}

export const collectionBannerCrud: Crud = {
    identifier: "collectionBannerCrud",
    header: {
        title: "Banner",
        description: {
            text: "Banners associated with '{cell}'"
        },
    },
    actions: [
        {
            identifier: "addCollectionBanner",
            type: ButtonType.RAISED,
            label: "App Banner",
            color: ButtonColor.PRIMARY,
            size: ButtonSize.SMALL,
            icon: "add",
            onlyIcon: false,
            alwaysEnable: true,
            displayInFormModes: [FormDiaplyMode.CRUD_LIST],
            permission: {
                subject: "Marketing",
                action: PermissionAction.CREATE
            }
        }
    ],
    quickLinks: [
    ],
    modal: {
        width: 500
    },
    list: {
        displayType: CrudListDisplayType.TAB,
        lists: [
            {
                identifier: "collectionBannerList",
                header: {
                    title: "List of Banner",
                },
                columns: [
                    {
                        fields: [
                            {
                                key: "image",
                                label: "Banner",
                                type: FieldType.IMAGE,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: false,
                                fieldDisplayType: FieldDiaplyType.INLINE
                            },
                        ],
                        sortable: true,
                        show: true,
                        width: 25,
                    },

                    {
                        fields: [
                            {
                                key: "collectionPageImage",
                                label: "Collection Page Banner",
                                type: FieldType.IMAGE,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: false,
                                fieldDisplayType: FieldDiaplyType.INLINE
                            }
                        ],
                        sortable: true,
                        show: true,
                        width: 25,
                    },
                    {
                        fields: [
                            {
                                key: "accessCriteriaId",
                                label: "Access Criteria",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: true,
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
                        identifier: "deleteCollectionBanner",
                        type: ButtonType.GHOST,
                        label: "Delete",
                        color: ButtonColor.ASCENT,
                        size: ButtonSize.SMALL,
                        icon: "delete",
                        onlyIcon: true,
                        confirmationConfiguration: {
                            identifier: "deleteCollectionCnfDialog",
                            title: "Confirm Delete",
                            message: "Do you want to delete Banner?",
                            width: "350",
                            buttons: [
                                {
                                    identifier: "cancelDeleteCollectionBanner",
                                    color: ButtonColor.DEFAULT,
                                    size: ButtonSize.SMALL,
                                    type: ButtonType.GHOST,
                                    icon: "close",
                                    label: "Cancel"
                                },
                                {
                                    identifier: "deleteCollectionConfirmBanner",
                                    color: ButtonColor.ASCENT,
                                    size: ButtonSize.SMALL,
                                    type: ButtonType.FLAT,
                                    icon: "delete",
                                    label: "Delete"
                                }
                            ]
                        },
                        permission: {
                            subject: "Marketing",
                            action: PermissionAction.DELETE
                        }
                    },
                    {
                        identifier: "editCollectionBanner",
                        type: ButtonType.GHOST,
                        label: "Edit",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "edit",
                        onlyIcon: true,
                        permission: {
                            subject: "Marketing",
                            action: PermissionAction.UPDATE
                        }
                    },
                    {
                        identifier: "viewCollection",
                        type: ButtonType.GHOST,
                        label: "View",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "search",
                        onlyIcon: true,
                        permission: {
                            subject: "Marketing",
                            action: PermissionAction.READ
                        }
                    }
                ],
                rowBgColor: (record) => {
                },
                uniqueKeys: [""],
                listType: ListType.STATIC,
                staticList: {
                    hasOnPageFilter: false
                },
                hasColumnSelection: false,
                pagination: PaginationType.ALL,
                pageSize: 10,
                hideFooter: true,
                hideHeader: false,
                hideCard: false,
                // displayMode: ListDiaplyMode.VIEW,
                stickyHeader: false,
                actionWidth: 30,
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
                identifier: "collectionBannerForms",
                label: "Banner Detail",
                description: {
                    text: ""
                },
                statistic: "10",
                displayOnAction: "collectionBannerDetail",
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
                        displayOnAction: "collectionBannerDetail",
                        widgetType: CrudWidgetType.FORM,
                        widget: {
                            identifier: "collectionBannerForm",
                            header: {
                                title: "Banner",
                                addModeTitle: "Banner Detail",
                                editModeTitle: "Banner Detail",
                                viewModeTitle: "Banner Detail"
                            },
                            description: {
                                text: ""
                            },
                            displayInColumns: 1,
                            formFields: [
                                {
                                    field: {
                                        key: "image",
                                        label: "Banner",
                                        type: FieldType.UPLOAD,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        validations: [
                                            {
                                                type: Validators.required,
                                                message: {
                                                    key: "required",
                                                    message: "Banner Image can't be empty"
                                                }
                                            }
                                        ],
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    }
                                },
                                {
                                    field: {
                                        key: "collectionPageImage",
                                        label: "Collection Page Banner",
                                        type: FieldType.UPLOAD,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        validations: [
                                            {
                                                type: Validators.required,
                                                message: {
                                                    key: "required",
                                                    message: "Collection Page Banner can't be empty"
                                                }
                                            }
                                        ],
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    }
                                },
                                {
                                    field: {
                                        key: "metaData",
                                        label: "Meta Data",
                                        type: FieldType.TEXTAREA,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    }
                                },
                                {
                                    field: {
                                        key: "accessCriteriaId",
                                        label: "Access Criteria",
                                        type: FieldType.DROPDOWN,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    }
                                }
                            ],
                            action: {
                                align: "right",
                                buttons: [
                                    {
                                        identifier: "deleteCollectionBanner",
                                        type: ButtonType.GHOST,
                                        label: "Delete",
                                        color: ButtonColor.ASCENT,
                                        size: ButtonSize.SMALL,
                                        icon: "delete",
                                        onlyIcon: false,
                                        displayInFormModes: [FormDiaplyMode.EDIT],
                                        permission: {
                                            subject: "Marketing",
                                            action: PermissionAction.DELETE
                                        },
                                        confirmationConfiguration: {
                                            identifier: "deleteCollectionBannerCnfDialog",
                                            title: "Confirm Delete",
                                            message: "Do you want to delete Banner?",
                                            width: "350",
                                            buttons: [
                                                {
                                                    identifier: "cancelDeleteCollectionBanner",
                                                    color: ButtonColor.DEFAULT,
                                                    size: ButtonSize.SMALL,
                                                    type: ButtonType.GHOST,
                                                    icon: "close",
                                                    label: "Cancel"
                                                },
                                                {
                                                    identifier: "deleteCollectionConfirmBanner",
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
                                        identifier: "updateCollectionBanner",
                                        type: ButtonType.RAISED,
                                        label: "Update",
                                        color: ButtonColor.PRIMARY,
                                        size: ButtonSize.SMALL,
                                        icon: "edit",
                                        onlyIcon: false,
                                        displayInFormModes: [FormDiaplyMode.ADD, FormDiaplyMode.EDIT],
                                        permission: {
                                            subject: "Marketing",
                                            action: PermissionAction.UPDATE
                                        }
                                    }
                                ]
                            },
                            displayType: FieldDiaplyType.INLINE,
                            displayMode: FormDiaplyMode.EDIT,
                        },
                    }
                ]
            },
        ],
    }
}

export const collectionRecurringMonthlyDetailForm: Form = {
    identifier: "collectionRecurringMonthlyDetailForm",
    header: {
        title: "Recurring Monthly Detail",
        addModeTitle: "Add Recurring Monthly Detail",
        editModeTitle: "Edit Recurring Monthly Detail",
        viewModeTitle: "View Recurring Monthly Detail"
    },
    description: {
        text: ""
    },
    displayInColumns: 1,
    modal: {
        width: 700
    },
    formFields: [
        {
            field: {
                key: "accessibility.activeOnDays.recurringFor",
                label: "Recurring For",
                type: FieldType.DROPDOWN,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: false,
                fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                value: "FIRST_FEW"
            }
        },
        {
            field: {
                key: "accessibility.activeOnDays.days",
                label: "Days",
                type: FieldType.DROPDOWN,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: false,
                multiselect: true,
                fieldDisplayType: FieldDiaplyType.HORIZONTAL
            }
        },
    ],
    action: {
        align: "right",
        buttons: [
            {
                identifier: "updateCollectionRecurringDetail",
                type: ButtonType.RAISED,
                label: "Update",
                color: ButtonColor.PRIMARY,
                size: ButtonSize.SMALL,
                icon: "edit",
                onlyIcon: false,
                displayInFormModes: [FormDiaplyMode.ADD, FormDiaplyMode.EDIT],
                permission: {
                    subject: "Marketing",
                    action: PermissionAction.UPDATE
                }
            }
        ]
    },
    displayType: FieldDiaplyType.INLINE,
    displayMode: FormDiaplyMode.EDIT,
}