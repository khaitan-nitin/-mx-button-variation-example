import { FieldType, FieldDiaplyType, FieldAppearance } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { ListType, ListSortOrder, PaginationType, ChildListType } from 'ngx-material-widget/lib/list/model';
import { Crud, CrudListDisplayType } from 'ngx-material-widget/lib/crud/model';
import { MasterData } from '../model';
import { PermissionAction } from 'ngx-material-widget/lib/privilege/model';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';

export const settingMasterDataCrud: Crud = {
    identifier: "masterDataCrud",
    header: {
        title: "<master data sub category title>",
        description: {
            text: '<master data sub category description>'
        },
    },
    actions: [
        {
            identifier: "addMasterData",
            type: ButtonType.RAISED,
            label: "Add Master Data",
            color: ButtonColor.PRIMARY,
            size: ButtonSize.SMALL,
            icon: "add",
            onlyIcon: false,
            displayInFormModes: [FormDiaplyMode.CRUD_LIST],
            permission: {
                subject: "MasterData",
                action: PermissionAction.CREATE
            }
        }
    ],
    quickLinks: [
    ],
    list: {
        displayType: CrudListDisplayType.LIST,
        lists: [
            {
                identifier: "masterDataList",
                header: {
                    title: "Master Data List"
                },
                columns: [
                    {
                        fields: [
                            {
                                key: "type",
                                label: "Type",
                                type: FieldType.TEXT,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: true,
                                fieldDisplayType: FieldDiaplyType.INLINE,
                                placeholder: "i.e. GENDER"
                            }
                        ],
                        sortable: true,
                        show: true,
                        width: 20,
                    },
                    {
                        fields: [
                            {
                                key: "label",
                                label: "Display",
                                type: FieldType.TEXT,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: false,
                                fieldDisplayType: FieldDiaplyType.INLINE,
                                placeholder: "i.e. Gender"
                            },
                            {
                                key: "description",
                                label: "Description",
                                type: FieldType.TEXTAREA,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: false,
                                fieldDisplayType: FieldDiaplyType.INLINE,
                                placeholder: "i.e. To configure possible options of Gender"
                            }
                        ],
                        sortable: true,
                        show: true,
                        width: 35,
                    },
                    {
                        fields: [
                            {
                                key: "access",
                                label: "Access",
                                type: FieldType.DROPDOWN,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: false,
                                fieldDisplayType: FieldDiaplyType.INLINE,
                                defaultOption: "Select"
                            }
                        ],
                        sortable: true,
                        show: true,
                        width: 15,
                    },
                    {
                        fields: [
                            {
                                key: "isEditable",
                                label: "Is Editable",
                                type: FieldType.DROPDOWN,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: false,
                                fieldDisplayType: FieldDiaplyType.INLINE,
                                defaultOption: "Select",
                                permission: {
                                    subject: "MasterData",
                                    action: PermissionAction.CREATE
                                }
                            }
                        ],
                        sortable: true,
                        show: true,
                        width: 15,
                    }
                ],
                actions: [
                    {
                        identifier: "addMasterDataOption",
                        type: ButtonType.RAISED,
                        label: "Add Option",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "playlist_add",
                        onlyIcon: true,
                        permission: {
                            subject: "MasterData",
                            action: PermissionAction.CREATE
                        }
                    },
                    {
                        identifier: "editMasterData",
                        type: ButtonType.RAISED,
                        label: "Edit",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "edit",
                        onlyIcon: true,
                        permission: {
                            subject: "MasterData",
                            action: PermissionAction.UPDATE
                        }
                    },
                    {
                        identifier: "deleteMasterData",
                        type: ButtonType.RAISED,
                        label: "Delete",
                        color: ButtonColor.WARN,
                        size: ButtonSize.SMALL,
                        icon: "delete",
                        onlyIcon: true,
                        permission: {
                            subject: "MasterData",
                            action: PermissionAction.DELETE
                        }
                    }
                ],
                rowTextColor: (masterData: MasterData) => {
                },
                rowBgColor: (record) => {
                },
                disableRow: (masterData: MasterData) => {
                    let disable = false;
                    if (masterData && !masterData.isEditable) {
                        disable = true;
                    }
                    return disable;
                },
                uniqueKeys: ["type"],
                listType: ListType.STATIC,
                staticList: {
                    hasOnPageFilter: false
                },
                hasColumnSelection: false,
                pagination: PaginationType.ALL,
                pageSize: 10,
                hideFooter: false,
                hideHeader: true,
                hideHeaderRow: false,
                hideCard: false,
                stickyHeader: false,
                actionWidth: 15,
                defaultSort: {
                    column: "label",
                    order: ListSortOrder.asc
                },
                permission: {
                    subject: "MasterData",
                    action: PermissionAction.READ
                },
                child: {
                    type: ChildListType.LIST,
                    recordIdentifier: "items",
                    record: {
                        identifier: "masterDataItems",
                        header: {
                            title: "Option List"
                        },
                        columns: [
                            {
                                fields: [
                                    {
                                        key: "key",
                                        label: "Key",
                                        type: FieldType.TEXT,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: true,
                                        fieldDisplayType: FieldDiaplyType.INLINE,
                                        placeholder: "i.e. MALE"
                                    }
                                ],
                                sortable: false,
                                show: true,
                                width: 19,
                            },
                            {
                                fields: [
                                    {
                                        key: "label",
                                        label: "Label",
                                        type: FieldType.TEXT,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        fieldDisplayType: FieldDiaplyType.INLINE,
                                        placeholder: "i.e. Male"
                                    }
                                ],
                                sortable: false,
                                show: true,
                                width: 40,
                            },
                            {
                                fields: [
                                    {
                                        key: "active",
                                        label: "Active",
                                        type: FieldType.DROPDOWN,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        fieldDisplayType: FieldDiaplyType.INLINE,
                                        defaultOption: "Select"
                                    }
                                ],
                                sortable: false,
                                show: true,
                                width: 15,
                            }
                        ],
                        actions: [
                            {
                                identifier: "editMasterDataItem",
                                type: ButtonType.RAISED,
                                label: "Edit",
                                color: ButtonColor.PRIMARY,
                                size: ButtonSize.SMALL,
                                icon: "edit",
                                onlyIcon: true,
                                permission: {
                                    subject: "MasterData",
                                    action: PermissionAction.UPDATE
                                }
                            },
                            {
                                identifier: "deleteMasterDataItem",
                                type: ButtonType.RAISED,
                                label: "Delete",
                                color: ButtonColor.WARN,
                                size: ButtonSize.SMALL,
                                icon: "delete",
                                onlyIcon: true,
                                permission: {
                                    subject: "MasterData",
                                    action: PermissionAction.DELETE
                                }
                            }
                        ],
                        rowTextColor: (record) => {
                        },
                        rowBgColor: (record) => {
                        },
                        uniqueKeys: ["key"],
                        listType: ListType.STATIC,
                        staticList: {
                            hasOnPageFilter: false
                        },
                        hasColumnSelection: false,
                        pagination: PaginationType.ALL,
                        pageSize: 10,
                        hideFooter: false,
                        hideHeader: true,
                        hideHeaderRow: false,
                        hideCard: true,
                        stickyHeader: false,
                        actionWidth: 25,
                        defaultSort: {
                            column: "key",
                            order: ListSortOrder.asc
                        },
                        permission: {
                            subject: "MasterData",
                            action: PermissionAction.READ
                        }
                    }
                }
            }
        ]
    },

}