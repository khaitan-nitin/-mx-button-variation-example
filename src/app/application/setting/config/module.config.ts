import { FieldType, FieldDiaplyType, HelpDiaplyType, FieldAppearance } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, ButtonSize, IconPosition } from 'ngx-material-widget/lib/button/model';
import { ListType, ListSortOrder, PaginationType } from 'ngx-material-widget/lib/list/model';
import { Crud, SearchDisplayType, CrudListDisplayType, CrudWidgetType, CrudFormDisplayType } from 'ngx-material-widget/lib/crud/model';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';
import { Validators } from '@angular/forms';
import { PermissionAction } from 'ngx-material-widget/lib/privilege/model';

export const moduleCrud: Crud = {
    identifier: "moduleCrud",
    header: {
        title: "Module",
        description: {
            text: 'Different list of module as will be used by the organization'
        }, 
        searchModeTitle: "Search Module",
        viewModeTitle: "View Module"
    },
    actions: [
        {
            identifier: "addModule",
            type: ButtonType.RAISED,
            label: "Add Module",
            color: ButtonColor.PRIMARY,
            size: ButtonSize.SMALL,
            icon: "add",
            onlyIcon: false,
            alwaysEnable: true,
            displayInFormModes: [FormDiaplyMode.CRUD_LIST],
            permission: {
                subject: "Setting",
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
                identifier: "moduleList",
                header: {
                    title: "List of Modules",
                },
                columns: [
                    {
                        fields: [
                            {
                                key: "label",
                                label: "Label",
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
                        identifier: "deleteModule",
                        type: ButtonType.GHOST,
                        label: "Delete",
                        color: ButtonColor.ASCENT,
                        size: ButtonSize.SMALL,
                        icon: "delete",
                        onlyIcon: false,
                        confirmationConfiguration: {
                            identifier: "deleteModuleCnfDialog",
                            title: "Confirm Delete",
                            message: "Do you want to delete Module - '{label}'?",
                            width: "350",
                            buttons: [
                                {
                                    identifier: "cancelDeleteModule",
                                    color: ButtonColor.DEFAULT,
                                    size: ButtonSize.SMALL,
                                    type: ButtonType.GHOST,
                                    icon: "close",
                                    label: "Cancel"
                                },
                                {
                                    identifier: "deleteModuleConfirm",
                                    color: ButtonColor.ASCENT,
                                    size: ButtonSize.SMALL,
                                    type: ButtonType.FLAT,
                                    icon: "delete",
                                    label: "Delete"
                                }
                            ]
                        }, 
                        permission: {
                            subject: "Setting",
                            action: PermissionAction.DELETE
                        }
                    },
                    {
                        identifier: "editModule",
                        type: ButtonType.GHOST,
                        label: "Edit",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "edit",
                        onlyIcon: false,
                        permission: {
                            subject: "Setting",
                            action: PermissionAction.UPDATE
                        }
                    },
                    {
                        identifier: "viewModule",
                        type: ButtonType.GHOST,
                        label: "View",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "search",
                        onlyIcon: false,
                        permission: {
                            subject: "Setting",
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
                identifier: "moduleForms",
                label: "Module Detail",
                description: {
                    text: ""
                },
                statistic: "10",
                displayOnAction: "moduleDetail",
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
                        displayOnAction: "moduleDetail",
                        widgetType: CrudWidgetType.FORM,
                        widget: {
                            identifier: "moduleForm",
                            header: {
                                title: "Module",
                                addModeTitle: "Add Module",
                                editModeTitle: "Edit Module",
                                viewModeTitle: "View Module"
                            },
                            description: {
                                text: ""
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
                                        validations: [
                                            {
                                                type: Validators.required,
                                                message: {
                                                    key: "required",
                                                    message: "Key can't be empty"
                                                }
                                            }
                                        ],
                                        // fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    }
                                },
                                {
                                    field: {
                                        key: "label",
                                        label: "Label",
                                        type: FieldType.TEXT,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        validations: [
                                            {
                                                type: Validators.required,
                                                message: {
                                                    key: "required",
                                                    message: "Label can't be empty"
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
                                    displayInColumns: 3 
                                }
                            ],
                            action: {
                                align: "right",
                                buttons: [
                                    {
                                        identifier: "deleteModule",
                                        type: ButtonType.GHOST,
                                        // type: ButtonType.DROPDOWN,
                                        // groupIdentifier: "g1",
                                        // groupLabel: "Group B",
                                        // groupIcon: "add",
                                        label: "Delete",
                                        color: ButtonColor.ASCENT,
                                        size: ButtonSize.SMALL,
                                        icon: "delete",
                                        onlyIcon: false,
                                        displayInFormModes: [FormDiaplyMode.EDIT],
                                        permission: {
                                            subject: "Setting",
                                            action: PermissionAction.DELETE
                                        },
                                        confirmationConfiguration: {
                                            identifier: "deleteModuleCnfDialog",
                                            title: "Confirm Delete",
                                            message: "Do you want to delete Module - '{label}'?",
                                            width: "350",
                                            buttons: [
                                                {
                                                    identifier: "cancelDeleteModule",
                                                    color: ButtonColor.DEFAULT,
                                                    size: ButtonSize.SMALL,
                                                    type: ButtonType.GHOST,
                                                    icon: "close",
                                                    label: "Cancel"
                                                },
                                                {
                                                    identifier: "deleteModuleConfirm",
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
                                        identifier: "updateModule",
                                        type: ButtonType.FLAT,
                                        // type: ButtonType.DROPDOWN,
                                        // groupIdentifier: "g1", 
                                        // groupLabel: "Group B",
                                        // groupIcon: "add",
                                        label: "Update",
                                        color: ButtonColor.PRIMARY, 
                                        size: ButtonSize.SMALL,
                                        icon: "edit",
                                        onlyIcon: false,
                                        displayInFormModes: [FormDiaplyMode.ADD, FormDiaplyMode.EDIT],
                                        permission: {
                                            subject: "Setting", 
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