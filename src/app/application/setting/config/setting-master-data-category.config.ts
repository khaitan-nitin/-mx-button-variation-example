import { FieldType, FieldDiaplyType, FieldAppearance, ImageFileType, UploadFileType } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { ListType, ListSortOrder, PaginationType, ChildListType } from 'ngx-material-widget/lib/list/model';
import { Crud, CrudListDisplayType } from 'ngx-material-widget/lib/crud/model';
import { PermissionAction } from 'ngx-material-widget/lib/privilege/model';

export const settingMasterDataCategoryCrud: Crud = {
    identifier: "masterDataCategoryCrud",
    header: { 
        title: "System Options", 
        description: {
            text: 'Categorized list of system options generically available to be used in different flow'
        },
    },
    actions: [
    ],
    quickLinks: [
    ],
    list: {
        displayType: CrudListDisplayType.LIST,
        style: {
            hideCard: true 
        },    
        lists: [
            {
                identifier: "masterDataCategoryList",
                header: {
                    title: "Categoy List"
                },
                columns: [
                    {
                        fields: [
                            {
                                key: "image",
                                label: "Image",
                                type: FieldType.IMAGE,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: false,
                                fieldDisplayType: FieldDiaplyType.INLINE,
                                multiple: false,
                                fileType: UploadFileType.IMAGE,
                                subFileType: [ImageFileType.JPG, ImageFileType.JPEG],
                                width: "50"
                            }
                        ],
                        sortable: false,
                        show: true,
                        width: 5,
                    },
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
                        width: 80,
                    }
                ],
                actions: [
                    {
                        identifier: "row_expand",
                        type: ButtonType.GHOST,
                        label: "View",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "expand_more",
                        onlyIcon: true
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
                actionWidth: 15,
                defaultSort: {
                    column: "name",
                    order: ListSortOrder.asc
                },
                permission: {
                    subject: "MasterData",
                    action: PermissionAction.READ
                },
                child: {
                    type: ChildListType.LIST,
                    recordIdentifier: "subCategories",
                    record: {
                        identifier: "masterDataSubCategoryList",
                        header: {
                            title: "Sub Categoy List"
                        },
                        columns: [
                            {
                                fields: [
                                    {
                                        key: "image",
                                        label: "Image",
                                        type: FieldType.IMAGE,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        fieldDisplayType: FieldDiaplyType.INLINE,
                                        width: "50"
                                    }
                                ],
                                sortable: false,
                                show: true,
                                width: 4,
                            },
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
                                width: 80,
                            }
                        ],
                        rowAction: "row_collapse",
                        actions: [
                            {
                                identifier: "row_collapse",
                                type: ButtonType.GHOST,
                                label: "View",
                                color: ButtonColor.PRIMARY,
                                size: ButtonSize.SMALL,
                                icon: "keyboard_arrow_right",
                                onlyIcon: true
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
                        actionWidth: 15,
                        defaultSort: {
                            column: "name",
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
    }
}