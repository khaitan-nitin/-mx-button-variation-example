import { FieldType, FieldDiaplyType, FieldAppearance } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { ListType, PaginationType, List, ListSortOrder } from 'ngx-material-widget/lib/list/model';
import { Crud, SearchDisplayType, CrudListDisplayType, CrudWidgetType, CrudFormDisplayType } from 'ngx-material-widget/lib/crud/model';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';
import { PermissionAction } from 'ngx-material-widget/lib/privilege/model';
import { Validators } from '@angular/forms';

export const ruleCrud: Crud = {
    identifier: "ruleCrud",
    header: {
        title: "Rule",
        description: {
            text: 'Rule to be used in application in different flow'
        },
        searchModeTitle: "Search Rule",
        viewModeTitle: "Rule"
    },
    actions: [
        {
            identifier: "addRule",
            type: ButtonType.RAISED,
            label: "App Rule", 
            color: ButtonColor.PRIMARY,
            size: ButtonSize.SMALL,
            icon: "add",
            onlyIcon: false,
            alwaysEnable: true,
            displayInFormModes: [FormDiaplyMode.CRUD_LIST],
            permission: {
                subject: "Rule",
                action: PermissionAction.CREATE
            }
        }
    ],
    quickLinks: [
    ],
    search: {
        displayType: SearchDisplayType.ABOVE_LIST,
        form: {
            identifier: "ruleSearchForm",
            header: {
                title: "Search Rule",
            },
            description: {
                text: "Filter criteria based on which Rules can be searched"
            },
            displayInColumns: 3,
            formFields: [
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
                        key: "active",
                        label: "Active",
                        type: FieldType.DROPDOWN,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        fieldDisplayType: FieldDiaplyType.INLINE,
                        defaultOption: "All"
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
                identifier: "ruleList",
                header: {
                    title: "List of Rule",
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
                        identifier: "deleteRule",
                        type: ButtonType.GHOST,
                        label: "Delete",
                        color: ButtonColor.ASCENT,
                        size: ButtonSize.SMALL,
                        icon: "delete",
                        onlyIcon: false,
                        confirmationConfiguration: {
                            identifier: "deleteRuleCnfDialog",
                            title: "Confirm Delete",
                            message: "Do you want to delete Rule - '{name}'?",
                            width: "350",
                            buttons: [
                                {
                                    identifier: "cancelDeleteRule",
                                    color: ButtonColor.DEFAULT,
                                    size: ButtonSize.SMALL,
                                    type: ButtonType.GHOST,
                                    icon: "close",
                                    label: "Cancel"
                                },
                                {
                                    identifier: "deleteRuleRuleConfirm",
                                    color: ButtonColor.ASCENT,
                                    size: ButtonSize.SMALL,
                                    type: ButtonType.FLAT,
                                    icon: "delete",
                                    label: "Delete"
                                }
                            ]
                        }, 
                        permission: {
                            subject: "Rule",
                            action: PermissionAction.DELETE
                        }
                    },
                    {
                        identifier: "editRule",
                        type: ButtonType.GHOST,
                        label: "Edit",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "edit",
                        onlyIcon: false,
                        permission: {
                            subject: "Rule",
                            action: PermissionAction.UPDATE
                        }
                    },
                    {
                        identifier: "viewRule",
                        type: ButtonType.GHOST,
                        label: "View",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "search",
                        onlyIcon: false,
                        permission: {
                            subject: "Rule",
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
                identifier: "ruleForms",
                label: "Rule Detail",
                description: {
                    text: ""
                },
                statistic: "10",
                displayOnAction: "ruleDetail",
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
                        displayOnAction: "ruleDetail",
                        widgetType: CrudWidgetType.FORM,
                        widget: {
                            identifier: "ruleForm",
                            header: {
                                title: "Rule",
                                addModeTitle: "Add Rule",
                                editModeTitle: "Edit Rule",
                                viewModeTitle: "View Rule"
                            },
                            description: {
                                text: ""
                            },
                            displayInColumns: 2,
                            formFields: [
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
                                        // fieldDisplayType: FieldDiaplyType.HORIZONTAL
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
                                        ]
                                        // fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
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
                                    },
                                    displayInColumns: 2
                                }
                            ],
                            action: {
                                align: "right",
                                buttons: [
                                    {
                                        identifier: "deleteRule",
                                        type: ButtonType.GHOST,
                                        label: "Delete",
                                        color: ButtonColor.ASCENT,
                                        size: ButtonSize.SMALL,
                                        icon: "delete",
                                        onlyIcon: false,
                                        displayInFormModes: [FormDiaplyMode.EDIT],
                                        permission: {
                                            subject: "Rule",
                                            action: PermissionAction.DELETE
                                        },
                                        confirmationConfiguration: {
                                            identifier: "deleteRuleCnfDialog",
                                            title: "Confirm Delete",
                                            message: "Do you want to delete Rule - '{key}'?",
                                            width: "350",
                                            buttons: [
                                                {
                                                    identifier: "cancelDeleteRule",
                                                    color: ButtonColor.DEFAULT,
                                                    size: ButtonSize.SMALL,
                                                    type: ButtonType.GHOST,
                                                    icon: "close",
                                                    label: "Cancel"
                                                },
                                                {
                                                    identifier: "deleteRuleConfirm",
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
                                        identifier: "updateRule",
                                        type: ButtonType.RAISED,
                                        label: "Update",
                                        color: ButtonColor.PRIMARY,
                                        size: ButtonSize.SMALL,
                                        icon: "edit",
                                        onlyIcon: false,
                                        displayInFormModes: [FormDiaplyMode.ADD, FormDiaplyMode.EDIT],
                                        permission: {
                                            subject: "Rule",
                                            action: PermissionAction.CREATE
                                        }
                                    }
                                ]
                            },
                            displayType: FieldDiaplyType.INLINE,
                            displayMode: FormDiaplyMode.ADD,
                        },
                    },
                    // {
                    //     rowSpan: 1,
                    //     colSpan: 2,
                    //     displayOnAction: "ruleDetail",
                    //     widgetType: CrudWidgetType.LIST,
                    //     widget: {
                    //         identifier: "ruleCondtionList",
                    //         columns: [
                    //             {
                    //                 fields: [
                    //                     {
                    //                         key: "condition.entity",
                    //                         label: "Entity",
                    //                         type: FieldType.DROPDOWN,
                    //                         appearance: FieldAppearance.STANDARD,
                    //                         isReadOnly: false,
                    //                         isUnique: false,
                    //                         fieldDisplayType: FieldDiaplyType.INLINE,
                    //                     }
                    //                 ],
                    //                 sortable: false,
                    //                 show: true,
                    //                 width: 20,
                    //             },
                    //             {
                    //                 fields: [
                    //                     {
                    //                         key: "condition.field",
                    //                         label: "Field",
                    //                         type: FieldType.DROPDOWN,
                    //                         appearance: FieldAppearance.STANDARD,
                    //                         isReadOnly: false,
                    //                         isUnique: false,
                    //                         fieldDisplayType: FieldDiaplyType.INLINE,
                    //                         optionDependsOn: "condition.entity"
                    //                     }
                    //                 ],
                    //                 sortable: false,
                    //                 show: true,
                    //                 width: 20,
                    //             },
                    //             {
                    //                 fields: [
                    //                     {
                    //                         key: "condition.operator",
                    //                         label: "Operator",
                    //                         type: FieldType.DROPDOWN,
                    //                         appearance: FieldAppearance.STANDARD,
                    //                         isReadOnly: false,
                    //                         isUnique: false,
                    //                         fieldDisplayType: FieldDiaplyType.INLINE
                    //                     }
                    //                 ],
                    //                 sortable: false,
                    //                 show: true,
                    //                 width: 10,
                    //             },
                    //             {
                    //                 fields: [
                    //                     {
                    //                         key: "condition.value",
                    //                         label: "Field",
                    //                         type: FieldType.TEXT,
                    //                         appearance: FieldAppearance.STANDARD,
                    //                         isReadOnly: false,
                    //                         isUnique: false,
                    //                         fieldDisplayType: FieldDiaplyType.INLINE
                    //                     }
                    //                 ],
                    //                 sortable: false,
                    //                 show: true,
                    //                 width: 20,
                    //             },
                    //             {
                    //                 fields: [
                    //                     {
                    //                         key: "join",
                    //                         label: "Join Condition",
                    //                         type: FieldType.DROPDOWN,
                    //                         appearance: FieldAppearance.STANDARD,
                    //                         isReadOnly: false,
                    //                         isUnique: false,
                    //                         fieldDisplayType: FieldDiaplyType.INLINE
                    //                     }
                    //                 ],
                    //                 sortable: false,
                    //                 show: true,
                    //                 width: 20,
                    //             },
                    //         ],
                    //         actions: [
                    //             {
                    //                 identifier: "addCondition",
                    //                 type: ButtonType.FLAT,
                    //                 label: "+",
                    //                 color: ButtonColor.ASCENT,
                    //                 size: ButtonSize.SMALL,
                    //     //            icon: "plus",
                    //                 onlyIcon: false
                    //             },
                    //             {
                    //                 identifier: "removeCondition",
                    //                 type: ButtonType.FLAT,
                    //                 label: "-",
                    //                 color: ButtonColor.ASCENT,
                    //                 size: ButtonSize.SMALL,
                    //     //            icon: "plus",
                    //                 onlyIcon: false
                    //             }
                    //         ],
                    //         rowBgColor: (record) => {
                    //         },
                    //         uniqueKeys: [""],
                    //         listType: ListType.STATIC,
                    //         staticList: {
                    //             hasOnPageFilter: false
                    //         },
                    //         hasColumnSelection: false,
                    //         pagination: PaginationType.ALL,
                    //         pageSize: 10,
                    //         hideFooter: true,
                    //         hideHeader: true,
                    //         hideHeaderRow: true,
                    //         hideCard: true,
                    //         // displayMode: ListDiaplyMode.VIEW,
                    //         stickyHeader: false,
                    //         actionWidth: 30
                    //     },
                    // }
                ]
            }
        ],
    }
}

export const ruleCondtionList: List = {
    identifier: "ruleCondtionList",
    header: {
        title: "Conditions"
    },
    columns: [
        {
            fields: [
                {
                    key: "condition.entity",
                    label: "Entity",
                    type: FieldType.DROPDOWN,
                    appearance: FieldAppearance.STANDARD,
                    isReadOnly: false,
                    isUnique: false,
                    fieldDisplayType: FieldDiaplyType.INLINE,
                }
            ],
            sortable: false,
            show: true,
            width: 20,
        },
        {
            fields: [
                {
                    key: "condition.field",
                    label: "Field",
                    type: FieldType.DROPDOWN,
                    appearance: FieldAppearance.STANDARD,
                    isReadOnly: false,
                    isUnique: false,
                    fieldDisplayType: FieldDiaplyType.INLINE,
                    optionDependsOn: "condition.entity"
                }
            ],
            sortable: false,
            show: true,
            width: 20,
        },
        {
            fields: [
                {
                    key: "condition.operator",
                    label: "Operator",
                    type: FieldType.DROPDOWN,
                    appearance: FieldAppearance.STANDARD,
                    isReadOnly: false,
                    isUnique: false,
                    fieldDisplayType: FieldDiaplyType.INLINE
                }
            ],
            sortable: false,
            show: true,
            width: 10,
        },
        {
            fields: [
                {
                    key: "condition.value",
                    label: "Field",
                    type: FieldType.TEXT,
                    appearance: FieldAppearance.STANDARD,
                    isReadOnly: false,
                    isUnique: false,
                    fieldDisplayType: FieldDiaplyType.INLINE
                }
            ],
            sortable: false,
            show: true,
            width: 20,
        },
        {
            fields: [
                {
                    key: "join",
                    label: "Join Condition",
                    type: FieldType.DROPDOWN,
                    appearance: FieldAppearance.STANDARD,
                    isReadOnly: false,
                    isUnique: false,
                    fieldDisplayType: FieldDiaplyType.INLINE
                }
            ],
            sortable: false,
            show: true,
            width: 20,
        },
    ],
    actions: [
        {
            identifier: "addCondition",
            type: ButtonType.FLAT,
            label: "+",
            color: ButtonColor.ASCENT,
            size: ButtonSize.SMALL,
//            icon: "plus",
            onlyIcon: false
        },
        {
            identifier: "removeCondition",
            type: ButtonType.FLAT,
            label: "-",
            color: ButtonColor.ASCENT,
            size: ButtonSize.SMALL,
//            icon: "plus",
            onlyIcon: false
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
    hideHeader: true,
    hideHeaderRow: true,
    hideCard: false,
    // displayMode: ListDiaplyMode.VIEW,
    stickyHeader: false, 
    actionWidth: 30
};