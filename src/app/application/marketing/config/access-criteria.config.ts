import { FieldType, FieldDiaplyType, HelpDiaplyType, FieldAppearance, DisplayMode } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { ListType, ListSortOrder, PaginationType } from 'ngx-material-widget/lib/list/model';
import { Crud, SearchDisplayType, CrudListDisplayType, CrudWidgetType, CrudFormDisplayType } from 'ngx-material-widget/lib/crud/model';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';
import { Validators } from '@angular/forms';
import { PermissionAction } from 'ngx-material-widget/lib/privilege/model';

export const accessCriteriaCrud: Crud = {
    identifier: "accessCriteriaCrud",
    header: {
        title: "Access Criteria",
        description: {
            text: 'User Filter/Accessibilty criterias which can be used in different flow by the system'
        },
        searchModeTitle: "Search Access Criteria",
        viewModeTitle: "View Access Criteria"
    },
    actions: [
        {
            identifier: "addAccessCriteria",
            type: ButtonType.RAISED,
            label: "Add Criteria",
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
    list: {
        displayType: CrudListDisplayType.TAB,
        lists: [
            {
                identifier: "accessCriteriaList",
                header: {
                    title: "List of Access Criterias",
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
                                fieldDisplayType: FieldDiaplyType.INLINE,
                                ellipsis: 50
                            }
                        ],
                        sortable: true,
                        show: true,
                        width: 25,
                    },
                    {
                        fields: [
                            {
                                key: "receiver.type",
                                label: "Receiver",
                                type: FieldType.LABEL,
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
                        width: 5,
                    }
                ],
                actions: [
                    {
                        identifier: "deleteAccessCriteria",
                        type: ButtonType.GHOST,
                        label: "Delete",
                        color: ButtonColor.ASCENT,
                        size: ButtonSize.SMALL,
                        icon: "delete",
                        onlyIcon: false,
                        confirmationConfiguration: {
                            identifier: "deleteAccessCriteriaCnfDialog",
                            title: "Confirm Delete",
                            message: "Do you want to delete Access Criteria - '{name}'?",
                            width: "350",
                            buttons: [
                                {
                                    identifier: "cancelDeleteAccessCriteria",
                                    color: ButtonColor.DEFAULT,
                                    size: ButtonSize.SMALL,
                                    type: ButtonType.GHOST,
                                    icon: "close",
                                    label: "Cancel"
                                },
                                {
                                    identifier: "deleteAccessCriteriaConfirm",
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
                        identifier: "editAccessCriteria",
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
                        identifier: "viewAccessCriteria",
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
                    hasOnPageFilter: true
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
                    column: "name",
                    order: ListSortOrder.asc
                }
            }
        ]
    },
    form: {
        displayType: CrudFormDisplayType.TAB,
        tabs: [
            {
                identifier: "accessCriteriaForms",
                label: "Access Criteria Detail",
                description: {
                    text: ""
                },
                statistic: "10",
                displayOnAction: "accessCriteriaDetail",
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
                        displayOnAction: "accessCriteriaDetail",
                        widgetType: CrudWidgetType.FORM,
                        widget: {
                            identifier: "accessCriteriaForm",
                            header: {
                                title: "Access Criteria",
                                addModeTitle: "Add Access Criteria",
                                editModeTitle: "Edit Access Criteria",
                                viewModeTitle: "View Access Criteria"
                            },
                            description: {
                                text: ""
                            },
                            displayInColumns: 4,
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
                                    },
                                    displayInColumns: 2
                                },
                                {
                                    field: {
                                        key: "receiver.type",
                                        label: "Receiver Type",
                                        type: FieldType.DROPDOWN,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                    separator: {
                                        beforeField: true,
                                        label: "Receiver Details"
                                    },
                                    displayInColumns: 4
                                },
                                {
                                    field: {
                                        key: "receiver.contactDetail.query",
                                        label: "Aggregate Queries",
                                        type: FieldType.TEXTAREA, 
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        rows: 5,
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                                        dependentOnFields: [
                                            {
                                                key: "receiver.type",
                                                condition: "QUERY_BASED",
                                                displayMode: DisplayMode.HIDDEN
                                            }
                                        ]
                                    },
                                    addMore: true,
                                    displayInColumns: 4
                                },
                                {
                                    field: {
                                        key: "receiver.contactDetail.applicableSegmentIds",
                                        label: "Include Segment(s)",
                                        type: FieldType.DROPDOWN,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                                        dependentOnFields: [
                                            {
                                                key: "receiver.type",
                                                condition: "SEGMENT_BASED",
                                                displayMode: DisplayMode.HIDDEN
                                            }
                                        ]
                                    },
                                    addMore: true,
                                    displayInColumns: 2
                                },
                                {
                                    field: {
                                        key: "receiver.contactDetail.excludeSegmentIds",
                                        label: "Exclude Segment(s)",
                                        type: FieldType.DROPDOWN,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                                        dependentOnFields: [
                                            {
                                                key: "receiver.type",
                                                condition: "SEGMENT_BASED",
                                                displayMode: DisplayMode.HIDDEN
                                            }
                                        ]
                                    },
                                    addMore: true,
                                    displayInColumns: 2
                                },
                                {
                                    field: {
                                        key: "receiver.contactDetail.emails",
                                        label: "Email Ids",
                                        type: FieldType.TEXTAREA,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        rows: 5,
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                                        dependentOnFields: [
                                            {
                                                key: "receiver.type",
                                                condition: "CONTACT",
                                                displayMode: DisplayMode.HIDDEN
                                            }
                                        ]
                                    },
                                    displayInColumns: 4
                                },
                                {
                                    field: {
                                        key: "receiver.contactDetail.tokens",
                                        label: "Push Device Tokens",
                                        type: FieldType.TEXTAREA,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        rows: 5,
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                                        dependentOnFields: [
                                            {
                                                key: "receiver.type",
                                                condition: "CONTACT",
                                                displayMode: DisplayMode.HIDDEN
                                            }
                                        ]
                                    },
                                    displayInColumns: 4
                                },
                                {
                                    field: {
                                        key: "receiver.contactDetail.mobiles",
                                        label: "Mobile Numbers",
                                        type: FieldType.TEXTAREA,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        rows: 5,
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                                        dependentOnFields: [
                                            {
                                                key: "receiver.type",
                                                condition: "CONTACT",
                                                displayMode: DisplayMode.HIDDEN
                                            }
                                        ]
                                    },
                                    displayInColumns: 4
                                }
                            ],
                            action: {
                                align: "right",
                                buttons: [
                                    {
                                        identifier: "deleteAccessCriteria",
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
                                            identifier: "deleteAccessCriteriaCnfDialog",
                                            title: "Confirm Delete",
                                            message: "Do you want to delete Access Criteria - '{name}'?",
                                            width: "350",
                                            buttons: [
                                                {
                                                    identifier: "cancelDeleteAccessCriteria",
                                                    color: ButtonColor.DEFAULT,
                                                    size: ButtonSize.SMALL,
                                                    type: ButtonType.GHOST,
                                                    icon: "close",
                                                    label: "Cancel"
                                                },
                                                {
                                                    identifier: "deleteAccessCriteriaConfirm",
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
                                        identifier: "updateAccessCriteria",
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
                    }
                ]
            }
        ],
    }
}