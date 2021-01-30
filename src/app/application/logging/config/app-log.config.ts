import { FieldType, FieldDiaplyType, HelpDiaplyType, FieldAppearance, HelpTextOrientation } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, BadgeColor, BadgePosition, BadgeSize, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { ListType, ListSortOrder, PaginationType, ChildListType } from 'ngx-material-widget/lib/list/model';
import { Crud, SearchDisplayType, CrudListDisplayType, CrudWidgetType, CrudFormDisplayType } from 'ngx-material-widget/lib/crud/model';
import { FormDiaplyMode, FormSectionExpand } from 'ngx-material-widget/lib/form/model';
import { AppLog } from '../model';

let minDate: Date = new Date();
minDate.setDate(new Date().getDate() - 5);

let maxDate: Date = new Date();
maxDate.setDate(new Date().getDate() + 5);

export const appLogCrud: Crud = {
    identifier: "appLogCrud",
    header: {
        title: "Log",
        description: {
            text: 'App log provide insite into the custom log as published by the application'
        },
        searchModeTitle: "Search App Log",
        viewModeTitle: "App Log"
    },
    actions: [
    ],
    quickLinks: [
        {
            identifier: "apiLogButton",
            type: ButtonType.GROUP,
            groupIdentifier: "logButtonGroup",
            fullWidth: true,
            label: "Api Log",
            color: ButtonColor.PRIMARY,
            size: ButtonSize.SMALL,
            icon: "view_array",
            onlyIcon: false
        },
        {
            identifier: "appLogButton",
            type: ButtonType.GROUP,
            groupIdentifier: "logButtonGroup",
            fullWidth: true,
            label: "App Log",
            color: ButtonColor.PRIMARY,
            size: ButtonSize.SMALL,
            icon: "view_carousel",
            onlyIcon: false
        },
        {
            identifier: "errorLogButton",
            type: ButtonType.GROUP,
            groupIdentifier: "logButtonGroup",
            fullWidth: true,
            label: "Error Log",
            color: ButtonColor.PRIMARY,
            size: ButtonSize.SMALL,
            icon: "view_column",
            onlyIcon: false
        }
    ],
    search: {
        displayType: SearchDisplayType.ABOVE_LIST,
        form: {
            identifier: "appLogSearchForm",
            header: {
                title: "Search App Log",
            },
            description: {
                text: "Filter criteria based on which app logs can be searched"
            },
            displayInColumns: 3,
            formFields: [
                {
                    field: {
                        key: "userId",
                        label: "User Id",
                        type: FieldType.TEXT,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        fieldDisplayType: FieldDiaplyType.INLINE,
                        placeholder: "Ex. - 2939",
                        help: {
                            icon: "help",
                            message: "Type User Id!",
                            displayType: HelpDiaplyType.TOOLTIP,
                        }
                    },
                },
                {
                    field: {
                        key: "mobile",
                        label: "Mobile",
                        type: FieldType.TEXT,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        fieldDisplayType: FieldDiaplyType.INLINE
                    },
                },
                {
                    field: {
                        key: "userName",
                        label: "User Name",
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
                        key: "source",
                        label: "Source",
                        type: FieldType.DROPDOWN,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        fieldDisplayType: FieldDiaplyType.INLINE,
                        defaultOption: "Select"
                    },
                },
                {
                    field: {
                        key: "exception",
                        label: "Exception",
                        type: FieldType.TEXT,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        fieldDisplayType: FieldDiaplyType.INLINE
                    },
                },
                {
                    field: {
                        key: "startDate",
                        label: "Error from dates",
                        type: FieldType.CALENDAR,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        fieldDisplayType: FieldDiaplyType.INLINE
                    },
                },
                {
                    field: {
                        key: "endDate",
                        label: "Error till dates",
                        type: FieldType.CALENDAR,
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
                identifier: "appLogList",
                header: {
                    title: "List of App Logs"
                },
                columns: [
                    {
                        fields: [
                            {
                                key: "url",
                                label: "URL",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: false,
                                fieldDisplayType: FieldDiaplyType.INLINE
                            },
                            {
                                key: "source",
                                label: "Source",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: false,
                                fieldDisplayType: FieldDiaplyType.INLINE
                            },
                            {
                                key: "exception",
                                label: "Exception",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: false,
                                fieldDisplayType: FieldDiaplyType.INLINE,
                                ellipsis: 100
                            },
                ],
                        sortable: true,
                        show: true,
                        width: 50,
                    },
                    {
                        fields: [
                            {
                                key: "userName",
                                label: "User Name",
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
                                key: "date",
                                label: "At",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: true,
                                fieldDisplayType: FieldDiaplyType.INLINE
                            }
                        ],
                        sortable: true,
                        show: true,
                        width: 20,
                    }
                ],
                actions: [
                    {
                        identifier: "viewLog",
                        type: ButtonType.GHOST,
                        label: "View",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "search",
                        onlyIcon: false
                    }
                ],
                rowTextColor: (appLog: AppLog) => {
                    if (appLog.statusCode >= 400) {
                        return "red";
                    } else {
                        return "green";
                    }
                },
                rowBgColor: (record) => {
                },
                uniqueKeys: ["id"],
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
                actionWidth: 20,
                defaultSort: {
                    column: "id",
                    order: ListSortOrder.asc
                },
                child: {
                    record: {
                        identifier: "errorDetailList",
                        header: {
                            title: "Error Detail"
                        },
                        columns: [
                            {
                                fields: [
                                    {
                                        key: "exception",
                                        label: "Exception",
                                        type: FieldType.LABEL,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        fieldDisplayType: FieldDiaplyType.INLINE
                                    },
                                    {
                                        key: "trace",
                                        label: "Trace",
                                        type: FieldType.LABEL,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        fieldDisplayType: FieldDiaplyType.INLINE
                                    }
                                ],
                                sortable: true,
                                show: true,
                                width: 100,
                            }
                        ],
                        actions: [],
                        rowTextColor: (record) => {
                        },
                        rowBgColor: (record) => {
                        },
                        uniqueKeys: ["id"],
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
                        // displayMode: ListDiaplyMode.VIEW,
                        stickyHeader: false,
                        actionWidth: 20,
                        defaultSort: {
                            column: "id",
                            order: ListSortOrder.asc
                        },
                    },
                    type: ChildListType.LIST,
                    recordIdentifier: ""
                }
            }
        ]
    },
    form: {
        displayType: CrudFormDisplayType.TAB,
        tabs: [
            {
                identifier: "appLogForms",
                label: "App Log",
                description: {
                    text: ""
                },
                statistic: "10",
                displayOnAction: "appLog",
                // tabPageBackRoute: ['pages', 'widget1-back'],
                actions: [
                ],
                widgets: [
                    {
                        rowSpan: 1,
                        colSpan: 2,
                        displayOnAction: "appLog",
                        widgetType: CrudWidgetType.FORM,
                        widget: {
                            identifier: "appLogForm",
                            header: {
                                title: "App Log Detail",
                            },
                            description: {
                                text: ""
                            },
                            displayInColumns: 3,
                            formFields: [
                                {
                                    field: {
                                        key: "userId",
                                        label: "User",
                                        type: FieldType.LABEL,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        // fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    // },
                                    // separator: {
                                    //     label: "User Details",
                                    //     beforeField: true
                                    }
                                },
                                {
                                    field: {
                                        key: "userName",
                                        label: "User Name",
                                        type: FieldType.LABEL,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        // fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                },
                                {
                                    field: {
                                        key: "mobile",
                                        label: "Mobile",
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
                                    separator: {
                                        label: "Request Summary",
                                        expandable: {
                                            allowed: true,
                                            default: FormSectionExpand.COLLAPSE
                                        },
                                        beforeField: true
                                    }
                                },
                                {
                                    field: {
                                        key: "userAgent",
                                        label: "User Agent",
                                        type: FieldType.LABEL,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        // fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                },
                                {
                                    field: {
                                        key: "source",
                                        label: "Source",
                                        type: FieldType.LABEL,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        // fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                },
                                {
                                    field: {
                                        key: "url",
                                        label: "URL",
                                        type: FieldType.LABEL,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        // fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                },
                                {
                                    field: {
                                        key: "referer",
                                        label: "Referer",
                                        type: FieldType.LABEL,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        // fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                },
                                {
                                    field: {
                                        key: "date",
                                        label: "At",
                                        type: FieldType.LABEL,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        // fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                },
                                {
                                    field: {
                                        key: "exception",
                                        label: "Exception",
                                        type: FieldType.JSON,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                                        ellipsis: 100
                                    },
                                    separator: {
                                        label: "Error Detail",
                                        beforeField: true
                                    },
                                    displayInColumns: 3
                                },
                                {
                                    field: {
                                        key: "trace",
                                        label: "Trace",
                                        type: FieldType.JSON,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                                        ellipsis: 100
                                    },
                                    displayInColumns: 3
                                },
                                {
                                    field: {
                                        key: "requestParams",
                                        label: "Parameters",
                                        type: FieldType.LABEL,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                    separator: {
                                        label: "Request Payload Details",
                                        beforeField: true
                                    },
                                    displayInColumns: 3
                                },
                                {
                                    field: {
                                        key: "header",
                                        label: "Header",
                                        type: FieldType.JSON,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                                        ellipsis: 100
                                    },
                                    displayInColumns: 3
                                },
                                {
                                    field: {
                                        key: "request",
                                        label: "Request",
                                        type: FieldType.JSON,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                                        ellipsis: 100
                                    },
                                    displayInColumns: 3
                                },
                                {
                                    field: {
                                        key: "response",
                                        label: "Response",
                                        type: FieldType.JSON,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                                        ellipsis: 100
                                    },
                                    displayInColumns: 3
                                },
                            ],
                            action: {
                                align: "right",
                                buttons: [
                                    {
                                        identifier: "backToList",
                                        type: ButtonType.RAISED,
                                        label: "Close",
                                        color: ButtonColor.PRIMARY,
                                        size: ButtonSize.SMALL,
                                        icon: "settings_power",
                                        onlyIcon: false
                                    },
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