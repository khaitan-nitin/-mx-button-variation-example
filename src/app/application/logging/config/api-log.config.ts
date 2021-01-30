import { FieldType, FieldDiaplyType, HelpDiaplyType, FieldAppearance, HelpTextOrientation } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, BadgeColor, BadgePosition, BadgeSize, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { ListType, ListSortOrder, PaginationType, CellControllType, CellControllFieldClass } from 'ngx-material-widget/lib/list/model';
import { Crud, SearchDisplayType, CrudListDisplayType, CrudWidgetType, CrudFormDisplayType } from 'ngx-material-widget/lib/crud/model';
import { FormDiaplyMode, FormSectionExpand } from 'ngx-material-widget/lib/form/model';
import * as moment from 'moment';
import { ApiLog } from '../model';
import { reduce } from 'rxjs/operators';

let minDate: Date = new Date();
minDate.setDate(new Date().getDate() - 5);

let maxDate: Date = new Date();
maxDate.setDate(new Date().getDate() + 5);

export const apiLogCrud: Crud = {
    identifier: "apiLogCrud",
    header: {
        title: "Api Log",
        addModeTitle: "Add Api Log",
        searchModeTitle: "Search Api Log",
        editModeTitle: "Edit Api Log",
        viewModeTitle: "View Api Log",
        description: {
            text: 'Api log provide insite into the api that has been invoked via the application'
        },
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
            onlyIcon: false,
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
        displayType: SearchDisplayType.RIGHT_MODAL,
        form: {
            identifier: "apiLogSearchForm",
            header: {
                title: "Search Api Log",
            },
            description: {
                text: "Filter criteria based on which api logs can be searched"
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
                        key: "module",
                        label: "Module",
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
                identifier: "apiLogList",
                header: {
                    title: "List of Api Logs",
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
                            }
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
                                key: "startTime",
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
                row: {
                    hover: {
                        width: 300,
                        template: {
                            layout: {
                                rowHeight: 100,
                                cells: [
                                    {
                                        rows: 1,
                                        cols: 12,
                                        controls: [
                                            {
                                                key: "request",
                                                type: CellControllType.FIELD,
                                                fieldStyle: {
                                                    class: CellControllFieldClass.PRIMARY
                                                },
                                                control: {
                                                    key: "request",
                                                    label: "Request",
                                                    type: FieldType.JSON,
                                                    appearance: FieldAppearance.STANDARD,
                                                    isReadOnly: false,
                                                    isUnique: false,
                                                    fieldDisplayType: FieldDiaplyType.INLINE,
                                                    ellipsis: 100
                                                },
                                            },
                                        ],
                                        // displayInline: {
                                        //     separator: "&bull;"
                                        // },
                                        show: true
                                    },
                                    {
                                        rows: 1,
                                        cols: 12,
                                        controls: [
                                            {
                                                key: "response",
                                                type: CellControllType.FIELD,
                                                fieldStyle: {
                                                    class: CellControllFieldClass.PRIMARY
                                                },
                                                control: {
                                                    key: "response",
                                                    label: "Response",
                                                    type: FieldType.JSON,
                                                    appearance: FieldAppearance.STANDARD,
                                                    isReadOnly: false,
                                                    isUnique: false,
                                                    fieldDisplayType: FieldDiaplyType.INLINE,
                                                    ellipsis: 100
                                                }
                                            }
                                        ],
                                        show: true
                                    }
                                ],
                            }
                        }
                    }
                },
                actions: [
                    {
                        identifier: "viewError",
                        type: ButtonType.GHOST,
                        label: "View",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "search",
                        onlyIcon: false
                    }
                ],
                rowTextColor: (apiLog: ApiLog) => {
                    if (apiLog.statusCode >= 400) {
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
                }
            }
        ]
    },
    form: {
        displayType: CrudFormDisplayType.TAB,
        tabs: [
            {
                identifier: "apiLogForms",
                label: "Api Log",
                description: {
                    text: ""
                },
                statistic: "10",
                displayOnAction: "apiLog",
                // tabPageBackRoute: ['pages', 'widget1-back'],
                actions: [
                ],
                widgets: [
                    {
                        rowSpan: 1,
                        colSpan: 2,
                        displayOnAction: "apiLog",
                        widgetType: CrudWidgetType.FORM,
                        widget: {
                            identifier: "apiLogForm",
                            // header: {
                            //     title: "Api Log Detail",
                            // },
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
                                        isReadOnly: true,
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
                                        key: "requestId",
                                        label: "Request Id",
                                        type: FieldType.LABEL,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        // fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                },
                                {
                                    field: {
                                        key: "threadName",
                                        label: "Thread",
                                        type: FieldType.LABEL,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        // fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                },
                                {
                                    field: {
                                        key: "time",
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
                            displayMode: FormDiaplyMode.VIEW,
                        },
                    }
                ]
            }
        ],
    }
}