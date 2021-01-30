import { FieldType, FieldDiaplyType, HelpDiaplyType, FieldAppearance, DisplayMode } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { ListType, ListSortOrder, PaginationType } from 'ngx-material-widget/lib/list/model';
import { Crud, SearchDisplayType, CrudListDisplayType, CrudWidgetType, CrudFormDisplayType } from 'ngx-material-widget/lib/crud/model';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';
import { Validators } from '@angular/forms';
import { PermissionAction } from 'ngx-material-widget/lib/privilege/model';

export const campaignCrud: Crud = {
    identifier: "campaignCrud",
    header: {
        title: "Campaign",
        description: {
            text: 'Marketing Campaign in the application is used to run various form of email, sms, whatsapp marketing'
        },
        searchModeTitle: "Search Campaign",
        viewModeTitle: "View Campaign"
    },
    actions: [
        {
            identifier: "addCampaign",
            type: ButtonType.RAISED,
            label: "App Campaign",
            color: ButtonColor.PRIMARY,
            size: ButtonSize.SMALL,
            icon: "add",
            onlyIcon: false,
            alwaysEnable: true,
            displayInFormModes: [FormDiaplyMode.CRUD_LIST],
            permission: {
                subject: "Campaign",
                action: PermissionAction.CREATE
            }
        }
    ],
    quickLinks: [
    ],
    search: {
        displayType: SearchDisplayType.RIGHT_MODAL,
        form: {
            identifier: "campaignSearchForm",
            header: {
                title: "Search Campaign",
            },
            description: {
                text: "Filter criteria based on which campaigns can be searched"
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
                        // fieldDisplayType: FieldDiaplyType.HORIZONTAL
                    }
                },
                {
                    field: {
                        key: "message.type",
                        label: "Message Type",
                        type: FieldType.DROPDOWN,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                    }
                },
                {
                    field: {
                        key: "message.template",
                        label: "Template",
                        type: FieldType.DROPDOWN,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                    }
                },
                {
                    field: { 
                        key: "receiver",
                        label: "Access Criteria",
                        type: FieldType.DROPDOWN,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                    }
                },
                {
                    field: {
                        key: "receiveAs.ivr",
                        label: "Receive IVR",
                        type: FieldType.DROPDOWN,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                    }
                },
                {
                    field: {
                        key: "receiveAs.text",
                        label: "Receive Text",
                        type: FieldType.DROPDOWN,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                    }
                },
                {
                    field: {
                        key: "send.type",
                        label: "Send Type",
                        type: FieldType.DROPDOWN,
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
                identifier: "campaignList",
                header: {
                    title: "List of Campaigns",
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
                                key: "message.type",
                                label: "Type",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: true,
                                fieldDisplayType: FieldDiaplyType.INLINE
                            }
                        ],
                        sortable: true,
                        show: true,
                        width: 15,
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
                                key: "send.type",
                                label: "Send",
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
                        identifier: "deleteCampaign",
                        type: ButtonType.GHOST,
                        label: "Delete",
                        color: ButtonColor.ASCENT,
                        size: ButtonSize.SMALL,
                        icon: "delete",
                        onlyIcon: false,
                        confirmationConfiguration: {
                            identifier: "deleteCampaignCnfDialog",
                            title: "Confirm Delete",
                            message: "Do you want to delete Campaign - '{name}'?",
                            width: "350",
                            buttons: [
                                {
                                    identifier: "cancelDeleteCampaign",
                                    color: ButtonColor.DEFAULT,
                                    size: ButtonSize.SMALL,
                                    type: ButtonType.GHOST,
                                    icon: "close",
                                    label: "Cancel"
                                },
                                {
                                    identifier: "deleteCampaignConfirm",
                                    color: ButtonColor.ASCENT,
                                    size: ButtonSize.SMALL,
                                    type: ButtonType.FLAT,
                                    icon: "delete",
                                    label: "Delete"
                                }
                            ]
                        },
                        permission: {
                            subject: "Campaign",
                            action: PermissionAction.DELETE
                        }
                    },
                    {
                        identifier: "editCampaign",
                        type: ButtonType.GHOST,
                        label: "Edit",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "edit",
                        onlyIcon: false,
                        permission: {
                            subject: "Campaign",
                            action: PermissionAction.UPDATE
                        }
                    },
                    {
                        identifier: "viewCampaign",
                        type: ButtonType.GHOST,
                        label: "View",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "search",
                        onlyIcon: false,
                        permission: {
                            subject: "Campaign",
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
                identifier: "campaignForms",
                label: "Campaign Detail",
                description: {
                    text: ""
                },
                statistic: "10",
                displayOnAction: "campaignDetail",
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
                        displayOnAction: "campaignDetail",
                        widgetType: CrudWidgetType.FORM,
                        widget: {
                            identifier: "campaignForm",
                            header: {
                                title: "Campaign",
                                addModeTitle: "Add Campaign",
                                editModeTitle: "Edit Campaign",
                                viewModeTitle: "View Campaign"
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
                                        ]
                                    },
                                    // fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    displayInColumns: 3
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
                                        key: "message.type",
                                        label: "Message Type",
                                        type: FieldType.DROPDOWN,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                    separator: {
                                        beforeField: true,
                                        label: "Message Details"
                                    },
                                    displayInColumns: 2
                                },
                                {
                                    field: {
                                        key: "message.template",
                                        label: "Template",
                                        type: FieldType.DROPDOWN,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                    displayInColumns: 2
                                },
                                {
                                    field: { 
                                        key: "receiver",
                                        label: "Access Criteria",
                                        type: FieldType.DROPDOWN,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                    separator: {
                                        beforeField: true,
                                        label: "Receiver Details"
                                    }
                                },
                                {
                                    field: {
                                        key: "receiveAs.ivr",
                                        label: "Receive IVR",
                                        type: FieldType.DROPDOWN,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                                    },
                                    displayInColumns: 3
                                },
                                {
                                    field: {
                                        key: "receiveAs.text",
                                        label: "Receive Text",
                                        type: FieldType.DROPDOWN,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                                    },
                                    displayInColumns: 3
                                },
                                {
                                    field: {
                                        key: "send.type",
                                        label: "Send Type",
                                        type: FieldType.DROPDOWN,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                    separator: {
                                        beforeField: true,
                                        label: "Send Details"
                                    }
                                },
                                {
                                    field: {
                                        key: "send.cron",
                                        label: "Send as per Cron",
                                        type: FieldType.TEXT,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        dependentOnFields: [
                                            {
                                                key: "send.type",
                                                condition: "CRON",
                                                displayMode: DisplayMode.HIDDEN
                                            }
                                        ],
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                },
                                {
                                    field: {
                                        key: "send.sendPattern",
                                        label: "Send Pattern",
                                        type: FieldType.DROPDOWN,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                },
                                {
                                    field: {
                                        key: "send.batchSize",
                                        label: "Batch Size",
                                        type: FieldType.TEXT,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        dependentOnFields: [
                                            {
                                                key: "send.sendPattern",
                                                condition: "BATCH",
                                                displayMode: DisplayMode.HIDDEN
                                            }
                                        ],
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                },
                                {
                                    field: {
                                        key: "send.nextAfterDelay",
                                        label: "Next After Delay",
                                        type: FieldType.TEXT,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        dependentOnFields: [
                                            {
                                                key: "send.sendPattern",
                                                condition: "BATCH",
                                                displayMode: DisplayMode.HIDDEN
                                            }
                                        ],
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                },
                            ],
                            action: {
                                align: "right",
                                buttons: [
                                    {
                                        identifier: "deleteCampaign",
                                        type: ButtonType.GHOST,
                                        label: "Delete",
                                        color: ButtonColor.ASCENT,
                                        size: ButtonSize.SMALL,
                                        icon: "delete",
                                        onlyIcon: false,
                                        displayInFormModes: [FormDiaplyMode.EDIT],
                                        permission: {
                                            subject: "Campaign",
                                            action: PermissionAction.DELETE
                                        },
                                        confirmationConfiguration: {
                                            identifier: "deleteCampaignCnfDialog",
                                            title: "Confirm Delete",
                                            message: "Do you want to delete Campaign - '{name}'?",
                                            width: "350",
                                            buttons: [
                                                {
                                                    identifier: "cancelDeleteCampaign",
                                                    color: ButtonColor.DEFAULT,
                                                    size: ButtonSize.SMALL,
                                                    type: ButtonType.GHOST,
                                                    icon: "close",
                                                    label: "Cancel"
                                                },
                                                {
                                                    identifier: "deleteCampaignConfirm",
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
                                        identifier: "updateCampaign",
                                        type: ButtonType.RAISED,
                                        label: "Update",
                                        color: ButtonColor.PRIMARY,
                                        size: ButtonSize.SMALL,
                                        icon: "edit",
                                        onlyIcon: false,
                                        displayInFormModes: [FormDiaplyMode.ADD, FormDiaplyMode.EDIT],
                                        permission: {
                                            subject: "Campaign",
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
        ]
    }
}