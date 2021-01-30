import { FieldType, FieldDiaplyType, HelpDiaplyType, FieldAppearance } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { ListType, ListSortOrder, PaginationType } from 'ngx-material-widget/lib/list/model';
import { Crud, SearchDisplayType, CrudListDisplayType, CrudWidgetType, CrudFormDisplayType } from 'ngx-material-widget/lib/crud/model';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';

export const deviceCrud: Crud = {
    identifier: "deviceCrud",
    header: {
        title: "Device",
        description: {
            text: 'Device(s) registered with different Apps associated with this application'
        },
        searchModeTitle: "Search Device",
        viewModeTitle: "View Device"
    },
    actions: [
    ],
    quickLinks: [
    ],
    search: {
        displayType: SearchDisplayType.ABOVE_LIST,
        form: {
            identifier: "deviceSearchForm",
            header: {
                title: "Search Device",
            },
            description: {
                text: "Filter criteria based on which devices can be searched"
            },
            displayInColumns: 3,
            formFields: [
                {
                    field: {
                        key: "deviceId",
                        label: "Device Id",
                        type: FieldType.TEXT,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        fieldDisplayType: FieldDiaplyType.INLINE,
                        placeholder: "Ex. - AJW90ZSKAO2KLAS"
                    },
                },
                {
                    field: {
                        key: "userId",
                        label: "User Id",
                        type: FieldType.TEXT,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        fieldDisplayType: FieldDiaplyType.INLINE
                    },
                },
                {
                    field: {
                        key: "appVersion",
                        label: "App Version",
                        type: FieldType.TEXT,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        fieldDisplayType: FieldDiaplyType.INLINE
                    },
                },
                {
                    field: {
                        key: "os",
                        label: "Device Type",
                        type: FieldType.DROPDOWN,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        fieldDisplayType: FieldDiaplyType.INLINE
                    },
                },
                {
                    field: {
                        key: "token",
                        label: "Token",
                        type: FieldType.TEXT,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        fieldDisplayType: FieldDiaplyType.INLINE
                    },
                },
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
                identifier: "deviceList",
                header: {
                    title: "List of Devices",
                },
                columns: [
                    {
                        fields: [
                            {
                                key: "userName",
                                label: "User",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: false,
                                fieldDisplayType: FieldDiaplyType.INLINE,
                            },
                            {
                                key: "deviceInfo",
                                label: "Text",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: false,
                                fieldDisplayType: FieldDiaplyType.INLINE
                            }
                        ],
                        link: {
                            identifier: "viewUser",
                            type: ButtonType.GHOST,
                            label: "View User",
                            color: ButtonColor.PRIMARY,
                            size: ButtonSize.DEFAULT,
                            icon: "",
                            onlyIcon: false
                        },
                        linkKey: "userName",
                        sortable: true,
                        show: true,
                        width: 20,
                    },
                    {
                        fields: [
                            {
                                key: "deviceId",
                                label: "Device/Token",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: true,
                                fieldDisplayType: FieldDiaplyType.INLINE
                            },
                            {
                                key: "token",
                                label: "Token",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: true,
                                fieldDisplayType: FieldDiaplyType.INLINE
                            }
                        ],
                        sortable: true,
                        show: true,
                        width: 65,
                    }
                ],
                actions: [
                    {
                        identifier: "viewDevice",
                        type: ButtonType.GHOST,
                        label: "View",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "search",
                        onlyIcon: false
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
                actionWidth: 15,
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
                identifier: "deviceForms",
                label: "Device",
                description: {
                    text: ""
                },
                statistic: "10",
                displayOnAction: "deviceDetail",
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
                        displayOnAction: "deviceDetail",
                        widgetType: CrudWidgetType.FORM,
                        widget: {
                            identifier: "deviceForm",
                            header: {
                                title: "View Device",
                            },
                            description: {
                                text: ""
                            },
                            displayInColumns: 3,
                            formFields: [
                                {
                                    field: {
                                        key: "userName",
                                        label: "User",
                                        type: FieldType.LABEL,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        // fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    }
                                },
                                {
                                    field: {
                                        key: "os",
                                        label: "Device",
                                        type: FieldType.LABEL,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        // fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                },
                                {
                                    field: {
                                        key: "appVersion",
                                        label: "App Version",
                                        type: FieldType.LABEL,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        // fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                },
                                {
                                    field: {
                                        key: "deviceId",
                                        label: "Device Id",
                                        type: FieldType.LABEL,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                    separator: {
                                        label: "Installation Details",
                                        beforeField: true
                                    },
                                    displayInColumns: 3
                                },
                                {
                                    field: {
                                        key: "token",
                                        label: "Token",
                                        type: FieldType.LABEL,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                    displayInColumns: 3
                                },
                                {
                                    field: {
                                        key: "json",
                                        label: "Device Details",
                                        type: FieldType.JSON,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                    displayInColumns: 3
                                }
                            ],
                            displayType: FieldDiaplyType.INLINE,
                            displayMode: FormDiaplyMode.ADD,
                        },
                    }
                ]
            }
        ],
    }
}