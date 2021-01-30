import { FieldType, FieldDiaplyType, FieldAppearance, UploadFileType, ImageFileType, DisplayMode } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { ListType, ListSortOrder, PaginationType, ChildListType } from 'ngx-material-widget/lib/list/model';
import { Crud, CrudListDisplayType } from 'ngx-material-widget/lib/crud/model';
import { PermissionAction } from 'ngx-material-widget/lib/privilege/model';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';

export const settingConfigCategoryCrud: Crud = {
    identifier: "settingCrud",
    header: {
        title: "Setting Categories",
        description: {
            text: 'Category and sub-category structure to be used by properties, params & master-data'
        },
    },
    actions: [
        {
            identifier: "addSettingCategory",
            type: ButtonType.RAISED,
            label: "Add Category",
            color: ButtonColor.PRIMARY,
            size: ButtonSize.SMALL,
            icon: "add",
            onlyIcon: false,
            displayInFormModes: [FormDiaplyMode.CRUD_LIST],
            permission: {
                subject: "SettingCategory",
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
                identifier: "settingCategoryList",
                header: {
                    title: "Categoy List"
                },
                columns: [
                    {
                        fields: [
                            {
                                key: "image",
                                label: "Image",
                                type: FieldType.UPLOAD,
                                appearance: FieldAppearance.STANDARD,
                                width: "50",
                                isReadOnly: false,
                                isUnique: false,
                                fieldDisplayType: FieldDiaplyType.INLINE,
                                multiple: false,
                                fileType: UploadFileType.IMAGE,
                                subFileType: [ImageFileType.JPG, ImageFileType.JPEG],
                                
//                                acceptEncoding: "gif,jpeg,jpg"
                            }
                        ],
                        sortable: false,
                        show: true,
                        width: 15,
                    },
                    {
                        fields: [
                            {
                                key: "key",
                                label: "Key",
                                type: FieldType.TEXT,
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
                                key: "name",
                                label: "Name",
                                type: FieldType.TEXT,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: false,
                                fieldDisplayType: FieldDiaplyType.INLINE
                            },
                            {
                                key: "description",
                                label: "Description",
                                type: FieldType.TEXTAREA,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: false,
                                fieldDisplayType: FieldDiaplyType.INLINE
                            }
                        ],
                        sortable: true,
                        show: true,
                        width: 30,
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
                        sortable: true,
                        show: true,
                        width: 5,
                    }
                ],
                actions: [
                    {
                        identifier: "addSettingSubCategory",
                        type: ButtonType.RAISED,
                        label: "Add Sub-category",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "playlist_add",
                        onlyIcon: true,
                        permission: {
                            subject: "SettingCategory",
                            action: PermissionAction.CREATE
                        }
                    },
                    {
                        identifier: "editSettingCategory",
                        type: ButtonType.RAISED,
                        label: "Edit",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "edit",
                        onlyIcon: true,
                        permission: {
                            subject: "SettingCategory",
                            action: PermissionAction.UPDATE
                        }
                    },
                    {
                        identifier: "deleteSettingCategory",
                        type: ButtonType.RAISED,
                        label: "Delete",
                        color: ButtonColor.WARN,
                        size: ButtonSize.SMALL,
                        icon: "delete",
                        onlyIcon: true,
                        permission: {
                            subject: "SettingCategory",
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
                hideHeader: false,
                hideCard: false,
                stickyHeader: false,
                actionWidth: 35,
                defaultSort: {
                    column: "name",
                    order: ListSortOrder.asc
                },
                permission: {
                    subject: "SettingCategory",
                    action: PermissionAction.READ
                },
                child: {
                    type: ChildListType.LIST,
                    recordIdentifier: "subCategories",
                    record: {
                        identifier: "settingSubCategoryList",
                        header: {
                            title: "Sub Categoy List"
                        },
                        columns: [
                            {
                                fields: [
                                    {
                                        key: "image",
                                        label: "Image",
                                        type: FieldType.UPLOAD,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        fieldDisplayType: FieldDiaplyType.INLINE
                                    }
                                ],
                                sortable: false,
                                show: true,
                                width: 14,
                            },
                            {
                                fields: [
                                    {
                                        key: "key",
                                        label: "Key",
                                        type: FieldType.TEXT,
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
                                        key: "name",
                                        label: "Name",
                                        type: FieldType.TEXT,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        fieldDisplayType: FieldDiaplyType.INLINE
                                    },
                                    {
                                        key: "description",
                                        label: "Description",
                                        type: FieldType.TEXTAREA,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        fieldDisplayType: FieldDiaplyType.INLINE
                                    }
                                ],
                                sortable: true,
                                show: true,
                                width: 30,
                            },
                            // {
                            //     fields: [
                            //         {
                            //             key: "description",
                            //             label: "Description",
                            //             type: FieldType.LABEL,
                            //             appearance: FieldAppearance.STANDARD,
                            //             isReadOnly: false,
                            //             isUnique: false,
                            //             fieldDisplayType: FieldDiaplyType.INLINE
                            //         }
                            //     ],
                            //     sortable: false,
                            //     show: false,
                            //     width: 30,
                            // },
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
                                    }
                                ],
                                sortable: true,
                                show: true,
                                width: 5,
                            }
                        ],
                        actions: [
                            {
                                identifier: "editSettingSubCategory",
                                type: ButtonType.RAISED,
                                label: "Edit",
                                color: ButtonColor.PRIMARY,
                                size: ButtonSize.SMALL,
                                icon: "edit",
                                onlyIcon: true,
                                permission: {
                                    subject: "SettingCategory",
                                    action: PermissionAction.UPDATE
                                }
                            },
                            {
                                identifier: "deleteSettingSubCategory",
                                type: ButtonType.RAISED,
                                label: "Delete",
                                color: ButtonColor.WARN,
                                size: ButtonSize.SMALL,
                                icon: "delete",
                                onlyIcon: true,
                                permission: {
                                    subject: "SettingCategory",
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
                        hideHeaderRow: true,
                        hideCard: true,
                        stickyHeader: false,
                        actionWidth: 35,
                        defaultSort: {
                            column: "name",
                            order: ListSortOrder.asc
                        },
                        permission: {
                            subject: "SettingCategory",
                            action: PermissionAction.READ
                        }
                    }
                }
            }
        ]
    },

}