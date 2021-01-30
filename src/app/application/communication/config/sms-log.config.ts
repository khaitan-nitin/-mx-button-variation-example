import { FieldType, FieldDiaplyType, HelpDiaplyType, FieldAppearance } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { ListType, ListSortOrder, PaginationType } from 'ngx-material-widget/lib/list/model';
import { Crud, SearchDisplayType, CrudListDisplayType, CrudWidgetType, CrudFormDisplayType } from 'ngx-material-widget/lib/crud/model';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';
import { SmsLog, SmsResponse, SmsReceiver } from '../model';

let minDate: Date = new Date();
minDate.setDate(new Date().getDate() - 5);

let maxDate: Date = new Date();
maxDate.setDate(new Date().getDate() + 5);
 
export const smsLogCrud: Crud = {
    identifier: "smsLogCrud",
    header: {
        title: "Sms Log",
        description: {
            text: 'Sms log provide insite into the sms that has been sent via the application'
        },
        searchModeTitle: "Search Sms Log",
        viewModeTitle: "Sms Log"
    },
    actions: [
    ],
    quickLinks: [
        {
            identifier: "emailLogButton",
            type: ButtonType.CHIP,
            groupIdentifier: "emailButtonGroup",
            label: "Email Log",
            color: ButtonColor.PRIMARY,
            size: ButtonSize.SMALL,
            icon: "email",
            onlyIcon: false
        },
        {
            identifier: "smsLogButton",
            type: ButtonType.CHIP,
            groupIdentifier: "smsButtonGroup",
            label: "Sms Log",
            color: ButtonColor.PRIMARY,
            size: ButtonSize.SMALL,
            icon: "textsms",
            onlyIcon: false
        },
        {
            identifier: "pushLogButton",
            type: ButtonType.CHIP,
            groupIdentifier: "pushButtonGroup",
            label: "Push Log",
            color: ButtonColor.PRIMARY,
            size: ButtonSize.SMALL,
            icon: "short_text",
            onlyIcon: false
        }
    ],
    search: {
        displayType: SearchDisplayType.ABOVE_LIST,
        form: {
            identifier: "smsLogSearchForm",
            header: {
                title: "Search Sms Log",
            },
            description: {
                text: "Filter criteria based on which sms logs can be searched"
            },
            displayInColumns: 3,
            formFields: [
                {
                    field: {
                        key: "mobiles",
                        label: "Receiver Mobile No.",
                        type: FieldType.TEXT,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        fieldDisplayType: FieldDiaplyType.INLINE,
                        placeholder: "Ex. - 3933338292",
                        help: {
                            icon: "help",
                            message: "Type Receiver Mobile No.!",
                            displayType: HelpDiaplyType.TOOLTIP,
                        }
                    },
                },
                {
                    field: {
                        key: "message",
                        label: "Message",
                        type: FieldType.TEXT,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        fieldDisplayType: FieldDiaplyType.INLINE
                    },
                },
                {
                    field: {
                        key: "error",
                        label: "Error Text",
                        type: FieldType.TEXT,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        fieldDisplayType: FieldDiaplyType.INLINE
                    },
                },
                {
                    field: {
                        key: "template",
                        label: "Template",
                        type: FieldType.DROPDOWN,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        fieldDisplayType: FieldDiaplyType.INLINE
                    },
                },
                {
                    field: {
                        key: "language",
                        label: "Language",
                        type: FieldType.DROPDOWN,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        fieldDisplayType: FieldDiaplyType.INLINE
                    },
                },
                {
                    field: {
                        key: "startDate",
                        label: "Sms from dates",
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
                        label: "Sms till dates",
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
                identifier: "smsLogList",
                header: {
                    title: "List of Sms Logs",
                },
                columns: [
                    {
                        fields: [
                            {
                                key: "message.text",
                                label: "Message",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: false,
                                fieldDisplayType: FieldDiaplyType.INLINE
                            },
                            {
                                key: "mobiles",
                                label: "Mobiles",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: false,
                                fieldDisplayType: FieldDiaplyType.INLINE
                            }
                        ],
                        sortable: true,
                        show: true,
                        width: 60,
                    },
                    {
                        fields: [
                            {
                                key: "receiverStatistics",
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
                                key: "sentAt",
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
                        identifier: "viewSms",
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
                identifier: "smsLogForms",
                label: "Sms Log",
                description: {
                    text: ""
                },
                statistic: "10",
                displayOnAction: "smsLog",
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
                        displayOnAction: "smsLog",
                        widgetType: CrudWidgetType.FORM,
                        widget: {
                            identifier: "smsLogForm",
                            header: {
                                title: "Sms Log Detail",
                            },
                            description: {
                                text: ""
                            },
                            displayInColumns: 3,
                            formFields: [
                                {
                                    field: {
                                        key: "sender.userId",
                                        label: "User",
                                        type: FieldType.LABEL,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        // fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    // },
                                    // separator: {
                                    //     label: "Sender Details",
                                    //     beforeField: true
                                    }
                                },
                                {
                                    field: {
                                        key: "sender.userName",
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
                                        key: "sender.mobile",
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
                                        key: "template.key",
                                        label: "Template",
                                        type: FieldType.LABEL,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        // fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                    separator: {
                                        label: "Template Detail",
                                        beforeField: true
                                    }
                                },
                                {
                                    field: {
                                        key: "message.language",
                                        label: "Language",
                                        type: FieldType.LABEL,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        // fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                },
                                {
                                    field: {
                                        key: "sentAt",
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
                                        key: "message.link.basePath",
                                        label: "Base Path",
                                        type: FieldType.LABEL,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        // fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                },
                                {
                                    field: {
                                        key: "message.link.uri",
                                        label: "Uri",
                                        type: FieldType.LABEL,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        // fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                    displayInColumns: 2
                                },
                                {
                                    field: {
                                        key: "message.text",
                                        label: "Text",
                                        type: FieldType.LABEL,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                    separator: {
                                        label: "Message Detail",
                                        beforeField: true
                                    },
                                    displayInColumns: 3
                                },
                                {
                                    field: {
                                        key: "message.context",
                                        label: "Context",
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
                            displayType: FieldDiaplyType.INLINE,
                            displayMode: FormDiaplyMode.ADD,
                        },
                    },
                    {
                        rowSpan: 1,
                        colSpan: 2,
                        displayOnAction: "messageList",
                        widgetType: CrudWidgetType.LIST,
                        widget: {
                            identifier: "messageLogList",
                            header: {
                                title: "List of Mobile numbers on which message has been sent",
                            },
                            columns: [
                                {
                                    fields: [
                                        {
                                            key: "mobile",
                                            label: "Mobile",
                                            type: FieldType.LABEL,
                                            appearance: FieldAppearance.STANDARD,
                                            isReadOnly: false,
                                            isUnique: false,
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
                                            key: "response.body",
                                            label: "Message",
                                            type: FieldType.LABEL,
                                            appearance: FieldAppearance.STANDARD,
                                            isReadOnly: false,
                                            isUnique: true,
                                            fieldDisplayType: FieldDiaplyType.INLINE
                                        },
                                        {
                                            key: "response.error",
                                            label: "Error",
                                            type: FieldType.LABEL,
                                            appearance: FieldAppearance.STANDARD,
                                            isReadOnly: false,
                                            isUnique: true,
                                            fieldDisplayType: FieldDiaplyType.INLINE
                                        }
                                    ],
                                    sortable: true,
                                    show: true,
                                    width: 85,
                                }
                            ],
                            actions: [
                            ],
                            rowBgColor: (record) => {
                            },
                            rowTextColor: (message: SmsReceiver) => {
                                if (message.response.status == false) {
                                    return "red";
                                }
                            },
                            uniqueKeys: [""],
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
                            // displayMode: ListDiaplyMode.VIEW,
                            stickyHeader: false,
                            defaultSort: {
                                column: "id",
                                order: ListSortOrder.asc
                            }
                        },
                    }
                ]
            }
        ],
    }
}