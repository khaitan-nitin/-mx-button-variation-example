import { FieldType, FieldDiaplyType, HelpDiaplyType, FieldAppearance } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { ListType, ListSortOrder, PaginationType } from 'ngx-material-widget/lib/list/model';
import { Crud, SearchDisplayType, CrudListDisplayType, CrudWidgetType, CrudFormDisplayType } from 'ngx-material-widget/lib/crud/model';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';
import { Validators } from '@angular/forms';
import { PermissionAction } from 'ngx-material-widget/lib/privilege/model';

export const promotionCodeTypeCrud: Crud = {
    identifier: "promotionCodeTypeCrud",
    header: {
        title: "Promotion Code Type",
        description: {
            text: 'Different types of Promotion Code to be used by the application'
        },
        searchModeTitle: "Search Promotion Code Type",
        viewModeTitle: "Promotion Code Type"
    },
    actions: [
        {
            identifier: "addPromotionCodeType",
            type: ButtonType.RAISED,
            label: "App Promotion Code Type",
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
            identifier: "promotionCodeTypeSearchForm",
            header: {
                title: "Search Promotion Code Type",
            },
            description: {
                text: "Filter criteria based on which Promotion Code Types can be searched"
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
                identifier: "promotionCodeTypeList",
                header: {
                    title: "List of Promotion Code Type",
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
                        identifier: "deletePromotionCodeType",
                        type: ButtonType.GHOST,
                        label: "Delete",
                        color: ButtonColor.ASCENT,
                        size: ButtonSize.SMALL,
                        icon: "delete",
                        onlyIcon: false,
                        confirmationConfiguration: {
                            identifier: "deletePromotionCodeTypeCnfDialog",
                            title: "Confirm Delete",
                            message: "Do you want to delete Promotion Code Type - '{name}'?",
                            width: "350",
                            buttons: [
                                {
                                    identifier: "cancelDeletePromotionCodeType",
                                    color: ButtonColor.DEFAULT,
                                    size: ButtonSize.SMALL,
                                    type: ButtonType.GHOST,
                                    icon: "close",
                                    label: "Cancel"
                                },
                                {
                                    identifier: "deletePromotionCodeTypeConfirm",
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
                        identifier: "editPromotionCodeType",
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
                        identifier: "viewPromotionCodeType",
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
                identifier: "promotionCodeTypeForms",
                label: "Promotion Code Type Detail",
                description: {
                    text: ""
                },
                statistic: "10",
                displayOnAction: "promotionCodeTypeDetail",
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
                        displayOnAction: "promotionCodeTypeDetail",
                        widgetType: CrudWidgetType.FORM,
                        widget: {
                            identifier: "promotionCodeTypeForm",
                            header: {
                                title: "Promotion Code Type",
                                addModeTitle: "Add Promotion Code Type",
                                editModeTitle: "Edit Promotion Code Type",
                                viewModeTitle: "View Promotion Code Type"
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
                                        identifier: "deletePromotionCodeType",
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
                                            identifier: "deletePromotionCodeTypeCnfDialog",
                                            title: "Confirm Delete",
                                            message: "Do you want to delete Promotion Code Type - '{name}'?",
                                            width: "350",
                                            buttons: [
                                                {
                                                    identifier: "cancelDeletePromotionCodeType",
                                                    color: ButtonColor.DEFAULT,
                                                    size: ButtonSize.SMALL,
                                                    type: ButtonType.GHOST,
                                                    icon: "close",
                                                    label: "Cancel"
                                                },
                                                {
                                                    identifier: "deletePromotionCodeTypeConfirm",
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
                                        identifier: "updatePromotionCodeType",
                                        type: ButtonType.RAISED,
                                        label: "Update",
                                        color: ButtonColor.PRIMARY,
                                        size: ButtonSize.SMALL,
                                        icon: "edit",
                                        onlyIcon: false,
                                        displayInFormModes: [FormDiaplyMode.ADD, FormDiaplyMode.EDIT],
                                        permission: {
                                            subject: "Marketing",
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