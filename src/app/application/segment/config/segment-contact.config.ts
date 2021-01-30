import { StringUtils, Crud, SearchDisplayType, CrudListDisplayType, CrudWidgetType, CrudFormDisplayType, ListType, ListSortOrder, PaginationType, ButtonType, ButtonColor, ButtonSize, FieldType, FieldDiaplyType, HelpDiaplyType, FieldAppearance } from 'ngx-material-widget';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';
import { SegmentContact } from '../model';

export const segmentContactCrud: Crud = {
    identifier: "segmentContactCrud",
    header: {
        title: "Contact",
        description: {
            text: 'Contact(s) associated with different segments'
        },
        searchModeTitle: "Search Contact",
        viewModeTitle: "View Contact"
    },
    actions: [
    ],
    quickLinks: [
    ],
    search: {
        displayType: SearchDisplayType.ABOVE_LIST,
        form: {
            identifier: "segmentContactSearchForm",
            header: {
                title: "Search Contact",
            },
            description: {
                text: "Filter criteria based on which contacts can be searched"
            },
            displayInColumns: 3,
            formFields: [
                {
                    field: {
                        key: "segmentId",
                        label: "Segment",
                        type: FieldType.DROPDOWN,
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
                        key: "contact",
                        label: "Contact",
                        type: FieldType.TEXT,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        fieldDisplayType: FieldDiaplyType.INLINE
                    },
                },
                {
                    field: {
                        key: "subscription",
                        label: "Subscription",
                        type: FieldType.DROPDOWN,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: false,
                        fieldDisplayType: FieldDiaplyType.INLINE
                    },
                },
                {
                    field: {
                        key: "active",
                        label: "Active",
                        type: FieldType.DROPDOWN,
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
                identifier: "segmentContactList",
                header: {
                    title: "List of Contacts",
                },
                columns: [
                    {
                        fields: [
                            {
                                key: "segmentId",
                                label: "Segment",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: false,
                                fieldDisplayType: FieldDiaplyType.INLINE
                            }
                        ],
                        sortable: true,
                        show: true,
                        width: 20,
                    },
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
                                key: "contact",
                                label: "Contact",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: false,
                                fieldDisplayType: FieldDiaplyType.INLINE
                            }
                        ],
                        sortable: true,
                        show: true,
                        width: 45,
                    },
                    {
                        fields: [
                            {
                                key: "unsubscribedOn",
                                label: "Unsubscribed",
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
                        identifier: "viewSegmentContact",
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
                rowTextColor: (segmentContact: SegmentContact)  => {
                    if (!StringUtils.isEmpty(segmentContact.unsubscribedOn))    {
                        return "red";
                    }
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
                actionWidth: 10,
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
                identifier: "segmentContactForms",
                label: "Contact",
                description: {
                    text: ""
                },
                statistic: "10",
                displayOnAction: "segmentContactDetail",
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
                        displayOnAction: "segmentContactDetail",
                        widgetType: CrudWidgetType.FORM,
                        widget: {
                            identifier: "segmentContactForm",
                            header: {
                                title: "Contact",
                                addModeTitle: "Add Contact",
                                editModeTitle: "Edit Contact",
                                viewModeTitle: "View Contact"
                            },
                            description: {
                                text: ""
                            },
                            displayInColumns: 3,
                            formFields: [
                                {
                                    field: {
                                        key: "segmentId", 
                                        label: "Segment",
                                        type: FieldType.LABEL,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        // fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    }
                                },
                                {
                                    field: {
                                        key: "contact",
                                        label: "Contact",
                                        type: FieldType.LABEL,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        // fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
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
                                        key: "info",
                                        label: "Other Details",
                                        type: FieldType.JSON,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                    separator: {
                                        label: "Contact Other Details",
                                        beforeField: true
                                    },
                                    displayInColumns: 3
                                },
                                {
                                    field: {
                                        key: "unsubscribedOn",
                                        label: "Unsubscribed On",
                                        type: FieldType.LABEL,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        value: "NA",
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                    separator: {
                                        label: "Active Status",
                                        beforeField: true
                                    }
                                },
                                {
                                    field: {
                                        key: "active",
                                        label: "Active",
                                        type: FieldType.BOOLEAN,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        //fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                    },
                                }
                            ],
                            displayType: FieldDiaplyType.INLINE,
                            displayMode: FormDiaplyMode.VIEW,
                        },
                    }
                ]
            }
        ],
    }
}