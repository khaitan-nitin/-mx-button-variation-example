import { FieldType, FieldDiaplyType, FieldAppearance } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { ListType, ListSortOrder, PaginationType } from 'ngx-material-widget/lib/list/model';
import { Crud, CrudListDisplayType } from 'ngx-material-widget/lib/crud/model';
import { Property } from '../model';
import { PermissionAction } from 'ngx-material-widget/lib/privilege/model';

export const settingPropertyCrud: Crud = {
    identifier: "propertyCrud",
    header: {
        title: "<master data sub category title>",
        description: {
            text: '<master data sub category description>'
        },
    },
    actions: [
    ],
    quickLinks: [
    ],
    list: {
        displayType: CrudListDisplayType.LIST,
        lists: [
            {
                identifier: "propertyList",
                header: {
                    title: "Property List1"
                },
                columns: [ 
                    {
                        fields: [
                            {
                                key: "key",
                                label: "Property",
                                type: FieldType.TEXT,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: true,
                                fieldDisplayType: FieldDiaplyType.INLINE,
                                placeholder: "i.e. BASE_PATH"
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
                        width: 40,
                    },
                    {
                        fields: [
                            {
                                key: "value",
                                label: "Option",
                                type: FieldType.TEXT,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: false,
                                fieldDisplayType: FieldDiaplyType.INLINE,
                                placeholder: "i.e. Gender"
                            }
                        ],
                        sortable: true,
                        show: true,
                        width: 30,
                    }
                ],
                actions: [
                    {
                        identifier: "editProperty",
                        type: ButtonType.RAISED,
                        label: "Edit",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "edit",
                        onlyIcon: true,
                        permission: {
                            subject: "Property",
                            action: PermissionAction.UPDATE
                        }
                    }
                ],
                rowTextColor: (property: Property) => {
                },
                rowBgColor: (record) => {
                },
                disableRow: (property: Property) => {
                    let disable = false;
                    if (property && !property.isEditable)  {
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
                actionWidth: 30,
                defaultSort: {
                    column: "label",
                    order: ListSortOrder.asc
                },
                permission: {
                    subject: "Property",
                    action: PermissionAction.READ
                }
            }
        ]
    },

}