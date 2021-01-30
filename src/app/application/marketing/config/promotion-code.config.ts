import { FieldType, FieldDiaplyType, HelpDiaplyType, FieldAppearance, DisplayMode } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { ListType, ListSortOrder, PaginationType } from 'ngx-material-widget/lib/list/model';
import { Crud, SearchDisplayType, CrudListDisplayType, CrudWidgetType, CrudFormDisplayType } from 'ngx-material-widget/lib/crud/model';
import { FormDiaplyMode, Form } from 'ngx-material-widget/lib/form/model';
import { Validators } from '@angular/forms';
import { PermissionAction } from 'ngx-material-widget/lib/privilege/model';

export const promotionCodeCrud: Crud = {
    identifier: "promotionCodeCrud",
    header: {
        title: "Promotion Code",
        description: {
            text: 'Different types of Promotion Code to be used by the application'
        },
        searchModeTitle: "Search Promotion Code",
        viewModeTitle: "Promotion Code"
    },
    actions: [
        {
            identifier: "addPromotionCode",
            type: ButtonType.RAISED,
            label: "App Promotion Code",
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
            identifier: "promotionCodeSearchForm",
            header: {
                title: "Search Promotion Code",
            },
            description: {
                text: "Filter criteria based on which Promotion Codes can be searched"
            },
            displayInColumns: 3,
            formFields: [
                {
                    field: {
                        key: "promotionCodeTypeId",
                        label: "Promotion Code Type",
                        type: FieldType.DROPDOWN,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        fieldDisplayType: FieldDiaplyType.INLINE
                    },
                },
                {
                    field: {
                        key: "code",
                        label: "Code",
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
                        fieldDisplayType: FieldDiaplyType.HORIZONTAL
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
                identifier: "promotionCodeList",
                header: {
                    title: "List of Promotion Code",
                },
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
                        width: 65,
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
                        identifier: "deletePromotionCode",
                        type: ButtonType.GHOST,
                        label: "Delete",
                        color: ButtonColor.ASCENT,
                        size: ButtonSize.SMALL,
                        icon: "delete",
                        onlyIcon: false,
                        confirmationConfiguration: {
                            identifier: "deletePromotionCodeCnfDialog",
                            title: "Confirm Delete",
                            message: "Do you want to delete Promotion Code - '{name}'?",
                            width: "350",
                            buttons: [
                                {
                                    identifier: "cancelDeletePromotionCode",
                                    color: ButtonColor.DEFAULT,
                                    size: ButtonSize.SMALL,
                                    type: ButtonType.GHOST,
                                    icon: "close",
                                    label: "Cancel"
                                },
                                {
                                    identifier: "deletePromotionCodeConfirm",
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
                        identifier: "editPromotionCode",
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
                        identifier: "viewPromotionCode",
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
                actionWidth: 25,
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
                identifier: "promotionCodeForms",
                label: "Promotion Code Detail",
                description: {
                    text: ""
                },
                statistic: "10",
                displayOnAction: "promotionCodeDetail",
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
                        colSpan: 1,
                        displayOnAction: "promotionCodeDetail",
                        widgetType: CrudWidgetType.FORM,
                        widget: {
                            identifier: "promotionCodeBasicDetailForm",
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
                                        key: "promotionCodeTypeId",
                                        label: "Promotion Code Type",
                                        type: FieldType.DROPDOWN,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        validations: [
                                            {
                                                type: Validators.required,
                                                message: {
                                                    key: "required",
                                                    message: "Promotion Code Type can't be empty"
                                                }
                                            }
                                        ],
                                        fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    }
                                },
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
                                        fieldDisplayType: FieldDiaplyType.HORIZONTAL
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
                                        fieldDisplayType: FieldDiaplyType.HORIZONTAL
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
                                        fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    }
                                }
                            ],
                            action: {
                                align: "right",
                                buttons: [
                                    {
                                        identifier: "deletePromotionCode",
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
                                            identifier: "deletePromotionCodeCnfDialog",
                                            title: "Confirm Delete",
                                            message: "Do you want to delete Promotion Code - '{name}'?",
                                            width: "350",
                                            buttons: [
                                                {
                                                    identifier: "cancelDeletePromotionCode",
                                                    color: ButtonColor.DEFAULT,
                                                    size: ButtonSize.SMALL,
                                                    type: ButtonType.GHOST,
                                                    icon: "close",
                                                    label: "Cancel"
                                                },
                                                {
                                                    identifier: "deletePromotionCodeConfirm",
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
                                        identifier: "updatePromotionCodeBasicDetail",
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
                        colSpan: 1,
                        displayOnAction: "promotionCodeDetail",
                        widgetType: CrudWidgetType.FORM,
                        widget: {
                            identifier: "promotionCodeAccessDetailForm",
                            header: {
                                title: "Who can access this coupon code?"
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
                                        fieldDisplayType: FieldDiaplyType.HORIZONTAL
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
                                        fieldDisplayType: FieldDiaplyType.HORIZONTAL
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
                                        fieldDisplayType: FieldDiaplyType.HORIZONTAL
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
                                        fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    }
                                }
                            ],
                            action: {
                                align: "right",
                                buttons: [
                                    {
                                        identifier: "updatePromotionCodeAccessDetail",
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
                        colSpan: 1,
                        displayOnAction: "promotionCodeDetail",
                        widgetType: CrudWidgetType.FORM,
                        widget: {
                            identifier: "promotionCodeBenefitDetailForm",
                            header: {
                                title: "Benfit associated with using this code?"
                            },
                            description: {
                                text: ""
                            },
                            displayInColumns: 1,
                            formFields: [
                                {
                                    field: {
                                        key: "benefit.ruleId",
                                        label: "Rule",
                                        type: FieldType.DROPDOWN,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    }
                                },
                                {
                                    field: {
                                        key: "benefit.type",
                                        label: "Benefit Type",
                                        type: FieldType.DROPDOWN,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    }
                                },
                                {
                                    field: {
                                        key: "benefit.amount",
                                        label: "Benefit (in Amount)",
                                        type: FieldType.TEXT,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                                        dependentOnFields: [
                                            {
                                                key: "benefit.type",
                                                condition: "AMOUNT",
                                                displayMode: DisplayMode.HIDDEN
                                            }
                                        ],
                                    }
                                },
                                {
                                    field: {
                                        key: "benefit.percentage",
                                        label: "Benefit (in Percentage)",
                                        type: FieldType.TEXT,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                                        dependentOnFields: [
                                            {
                                                key: "benefit.type",
                                                condition: "PERCENTAGE",
                                                displayMode: DisplayMode.HIDDEN
                                            }
                                        ],
                                    }
                                },
                                {
                                    field: {
                                        key: "benefit.maxAmount",
                                        label: "Max Amount",
                                        type: FieldType.TEXT,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                                        dependentOnFields: [
                                            {
                                                key: "benefit.type",
                                                condition: "PERCENTAGE",
                                                displayMode: DisplayMode.HIDDEN
                                            }
                                        ],
                                    }
                                },
                                {
                                    field: {
                                        key: "productHint",
                                        label: "",
                                        type: FieldType.LABEL,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                                        value: "Configure 'Product Benefit Detail' section for product benefit",
                                        dependentOnFields: [
                                            {
                                                key: "benefit.type",
                                                condition: "PRODUCT",
                                                displayMode: DisplayMode.HIDDEN
                                            }
                                        ],
                                    }
                                },                            // {
                                //     field: {
                                //         key: "benefit.count",
                                //         label: "How many times?",
                                //         type: FieldType.TEXT,
                                //         appearance: FieldAppearance.STANDARD,
                                //         isReadOnly: false,
                                //         isUnique: false,
                                //         fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                //     }
                                // }
                            ],
                            action: {
                                align: "right",
                                buttons: [
                                    {
                                        identifier: "updatePromotionCodeBenefitDetail",
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
                        colSpan: 1,
                        displayOnAction: "promotionCodeUsageDetail",
                        widgetType: CrudWidgetType.FORM,
                        widget: {
                            identifier: "promotionCodeUsageDetailForm",
                            header: {
                                title: "How many times it can be used?"
                            },
                            description: {
                                text: ""
                            },
                            displayInColumns: 1,
                            formFields: [
                                {
                                    field: {
                                        key: "usage.count",
                                        label: "Usage Count",
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
                                        identifier: "updatePromotionCodeUsageDetail",
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
                identifier: "promotionCodeRecurringForms",
                label: "Recurring Details",
                description: {
                    text: ""
                },
                statistic: "10",
                displayOnAction: "promotionCodeRecurringDetail",
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
                        colSpan: 1,
                        displayOnAction: "promotionCodeRecurringDetail",
                        widgetType: CrudWidgetType.FORM,
                        widget: {
                            identifier: "promotionCodeRecurringDetailForm",
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
                                        fieldDisplayType: FieldDiaplyType.HORIZONTAL,
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
                                        fieldDisplayType: FieldDiaplyType.HORIZONTAL,
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
                                        identifier: "updatePromotionCodeRecurringDetail",
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
                        colSpan: 1,
                        displayOnAction: "promotionCodeRecurringDetail",
                        widgetType: CrudWidgetType.LIST,
                        widget: {
                            identifier: "promotionCodeRecurringDetailList",
                            header: {
                                title: "List of Recurring Days in Month",
                                actions: [{
                                    identifier: "editPromotionCode",
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
                                            key: "days",
                                            label: "Days",
                                            type: FieldType.LABEL,
                                            appearance: FieldAppearance.STANDARD,
                                            isReadOnly: false,
                                            isUnique: true,
                                            fieldDisplayType: FieldDiaplyType.INLINE
                                        }
                                    ],
                                    sortable: true,
                                    show: true,
                                    width: 70,
                                }
                            ],
                            actions: [
                                {
                                    identifier: "deletePromotionCodeRecurringMonth",
                                    type: ButtonType.GHOST,
                                    label: "Delete",
                                    color: ButtonColor.ASCENT,
                                    size: ButtonSize.SMALL,
                                    icon: "delete",
                                    onlyIcon: false,
                                    confirmationConfiguration: {
                                        identifier: "deletePromotionCodeRecurringMonthCnfDialog",
                                        title: "Confirm Delete",
                                        message: "Do you want to delete Promotion Code Recurring Month?",
                                        width: "350",
                                        buttons: [
                                            {
                                                identifier: "cancelDeletePromotionCodeRecurringMonth",
                                                color: ButtonColor.DEFAULT,
                                                size: ButtonSize.SMALL,
                                                type: ButtonType.GHOST,
                                                icon: "close",
                                                label: "Cancel"
                                            },
                                            {
                                                identifier: "deletePromotionCodeRecurringMonthConfirm",
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
                    }
                ]
            },
            {
                identifier: "promotionCodeProductBenefitForms",
                label: "Product Benefit Details",
                description: {
                    text: ""
                },
                statistic: "10",
                displayOnAction: "promotionCodeProductBenefitDetail",
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
                        colSpan: 1,
                        displayOnAction: "promotionCodeProductBenefitDetail",
                        widgetType: CrudWidgetType.LIST,
                        // widgetAction: {
                        //     identifier: "editPromotionCode",
                        //     type: ButtonType.GHOST,
                        //     label: "Edit",
                        //     color: ButtonColor.PRIMARY,
                        //     size: ButtonSize.SMALL,
                        //     icon: "edit",
                        //     onlyIcon: false,
                        //     permission: {
                        //         subject: "Marketing",
                        //         action: PermissionAction.UPDATE
                        //     }
                        // },
                        widget: {
                            identifier: "promotionCodeProductBenefitList",
                            header: {
                                title: "List of Benefits in terms of Products",
                            },
                            columns: [
                                {
                                    fields: [
                                        {
                                            key: "productId",
                                            label: "Product",
                                            type: FieldType.LABEL,
                                            appearance: FieldAppearance.STANDARD,
                                            isReadOnly: false,
                                            isUnique: false,
                                            fieldDisplayType: FieldDiaplyType.INLINE
                                        }
                                    ],
                                    sortable: true,
                                    show: true,
                                    width: 50,
                                },
                                {
                                    fields: [
                                        {
                                            key: "quantity",
                                            label: "Quantity",
                                            type: FieldType.LABEL,
                                            appearance: FieldAppearance.STANDARD,
                                            isReadOnly: false,
                                            isUnique: true,
                                            fieldDisplayType: FieldDiaplyType.INLINE
                                        }
                                    ],
                                    sortable: true,
                                    show: true,
                                    width: 30,
                                }
                            ],
                            actions: [
                                {
                                    identifier: "deletePromotionCodeProductBenefit",
                                    type: ButtonType.GHOST,
                                    label: "Delete",
                                    color: ButtonColor.ASCENT,
                                    size: ButtonSize.SMALL,
                                    icon: "delete",
                                    onlyIcon: false,
                                    confirmationConfiguration: {
                                        identifier: "deletePromotionCodeProductBenefitCnfDialog",
                                        title: "Confirm Delete",
                                        message: "Do you want to delete Product Benefit associated with the Promotion Code?",
                                        width: "350",
                                        buttons: [
                                            {
                                                identifier: "cancelDeletePromotionCodeProductBenefit",
                                                color: ButtonColor.DEFAULT,
                                                size: ButtonSize.SMALL,
                                                type: ButtonType.GHOST,
                                                icon: "close",
                                                label: "Cancel"
                                            },
                                            {
                                                identifier: "deletePromotionCodeProductBenefitConfirm",
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
                    }
                ]
            }, 
        ],
    }
}

export const promotionCodeRecurringMonthlyDetailForm: Form  = {
    identifier: "promotionCodeRecurringMonthlyDetailForm",
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
        width: 500
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
                identifier: "updatePromotionCodeRecurringDetail",
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