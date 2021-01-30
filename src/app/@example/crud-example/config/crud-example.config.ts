import { FieldType, FieldDiaplyType, HelpDiaplyType, FieldAppearance, HelpTextOrientation } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, BadgeColor, BadgePosition, BadgeSize, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { Validators } from '@angular/forms';
import { ListType, ListSortOrder, PaginationType } from 'ngx-material-widget/lib/list/model';
import { Crud, SearchDisplayType, CrudListDisplayType, CrudWidgetType, CrudFormDisplayType } from 'ngx-material-widget/lib/crud/model';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';

export const basicCrud: Crud = {
    identifier: "crudIdentifier1",
    header: {
        title: "User",
        description: {
            text: 'User Description'
        },
        addModeTitle: "Add User",
        searchModeTitle: "Search User (M)",
        editModeTitle: "Edit User",
        viewModeTitle: "View User",
        badge: {
            identifier: "badgeIdentifier1",
            content: "Testing",
            color: BadgeColor.ASCENT,
            position: BadgePosition.AFTER,
            size: BadgeSize.SMALL,
            hide: false
        }
    },
    actions: [
        {
            identifier: "addUser",
            type: ButtonType.RAISED,
            label: "Add User",
            color: ButtonColor.PRIMARY,
            size: ButtonSize.SMALL,
            icon: "add_ic_call",
            onlyIcon: false
        },
        {
            identifier: "associateTeam",
            type: ButtonType.RAISED,
            label: "Associate Team",
            color: ButtonColor.PRIMARY,
            size: ButtonSize.SMALL,
            icon: "business",
            onlyIcon: false
        }
    ],
    quickLinks: [
        {
            identifier: "activeUsers",
            type: ButtonType.CHIP,
            groupIdentifier: "quicklinkGroup",
            label: "Active Users",
            color: ButtonColor.PRIMARY,
            size: ButtonSize.SMALL,
            icon: "business",
            onlyIcon: false
        },
        {
            identifier: "topBuyers",
            type: ButtonType.CHIP,
            groupIdentifier: "quicklinkGroup",
            label: "Top Buyers",
            color: ButtonColor.PRIMARY,
            size: ButtonSize.SMALL,
            icon: "add_ic_call",
            onlyIcon: false
        }
    ],
    search: {
        displayType: SearchDisplayType.ABOVE_LIST,
        form: {
            identifier: "formIdentifier1",
            header: {
                title: "Search User",
            },
            description: {
                text: "User can search via this form"
            },
            displayInColumns: 2,
            formFields: [
                {
                    field: {
                        key: "firstNames",
                        label: "First Name",
                        type: FieldType.TEXT,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: true,
                        fieldDisplayType: FieldDiaplyType.INLINE,
                        placeholder: "Ex. - Alex",
                        help: {
                            icon: "help",
                            // helpText: "Help Me Text!",
                            title: "Help Me Title!",
                            message: "Help Me Message!",
                            displayType: HelpDiaplyType.PLAIN_TEXT,
                            // orientation: HelpTextOrientation.BELOW
                        },
                        validations: [
                            {
                                type: Validators.required,
                                message: {
                                    key: "required",
                                    message: "Field can't be empty"
                                }
                            }
                        ]
                    },
                },
                {
                    field: {
                        key: "lastNames",
                        label: "Last Name",
                        type: FieldType.TEXT,
                        appearance: FieldAppearance.STANDARD,
                        isReadOnly: false,
                        isUnique: true,
                        fieldDisplayType: FieldDiaplyType.INLINE,
                        placeholder: "Ex. - Moris",
                        validations: [
                            {
                                type: Validators.required,
                                message: {
                                    key: "required",
                                    message: "Field can't be empty"
                                }
                            }
                        ]
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
                        icon: "business",
                        onlyIcon: false
                    },
                    {
                        identifier: "search",
                        type: ButtonType.RAISED,
                        label: "Search",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "business",
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
                identifier: "listIdentifier1",
                header: {
                    title: "User List"
                },
                description: {
                    text: "User List Description"
                },
                columns: [
                    {
                        fields: [
                            {
                                key: "id",
                                label: "###",
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
                                key: "name",
                                label: "Name",
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
                                key: "gender",
                                label: "Gender",
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
                                key: "age",
                                label: "Age",
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
                                key: "lastActive",
                                label: "Last Active",
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
                        identifier: "edit",
                        type: ButtonType.RAISED,
                        label: "Edit",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "edit",
                        onlyIcon: false
                    },
                    {
                        identifier: "delete",
                        type: ButtonType.RAISED,
                        label: "Delete",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "delete",
                        onlyIcon: false
                    }
                ],
                rowTextColor: (record) => {
                    //                console.log(record);
                    if (record['id'] % 2 == 1) {
                        return "red";
                    } else {
                        return "blue";
                    }
                },
                rowBgColor: (record) => {
                    //                console.log(record);
                    if (record['id'] % 2 == 1) {
                        return "yellow";
                    } else {
                        return "orange";
                    }
                },
                uniqueKeys: ["id"],
                listType: ListType.STATIC,
                staticList: {
                    hasOnPageFilter: true
                },
                hasColumnSelection: true,
                pagination: PaginationType.PAGE_WISE,
                pageSize: 10,
                hideFooter: false,
                hideHeader: false,
                hideCard: false,
                // displayMode: ListDiaplyMode.VIEW,
                stickyHeader: false,
                selectable: {
                    label: "Selectable",
                    icon: "call_split"
                },
                actionWidth: 20,
                defaultSort: {
                    column: "id",
                    order: ListSortOrder.asc
                }
            },
            {
                identifier: "listIdentifier1",
                header: {
                    title: "Active User List"
                },
                description: {
                    text: "Active User List Description"
                },
                columns: [
                    {
                        fields: [
                            {
                                key: "id",
                                label: "###",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: true,
                                fieldDisplayType: FieldDiaplyType.HORIZONTAL
                            }
                        ],
                        sortable: true,
                        show: true,
                        width: 10,
                    },
                    {
                        fields: [
                            {
                                key: "name",
                                label: "Name",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: true,
                                fieldDisplayType: FieldDiaplyType.HORIZONTAL
                            }
                        ],
                        sortable: true,
                        show: true,
                        width: 25,
                    },
                    {
                        fields: [
                            {
                                key: "gender",
                                label: "Gender",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: true,
                                fieldDisplayType: FieldDiaplyType.HORIZONTAL
                            }
                        ],
                        sortable: true,
                        show: true,
                        width: 15,
                    },
                    {
                        fields: [
                            {
                                key: "age",
                                label: "Age",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: true,
                                fieldDisplayType: FieldDiaplyType.HORIZONTAL
                            }
                        ],
                        sortable: true,
                        show: true,
                        width: 10,
                    },
                    {
                        fields: [
                            {
                                key: "lastActive",
                                label: "Last Active",
                                type: FieldType.LABEL,
                                appearance: FieldAppearance.STANDARD,
                                isReadOnly: false,
                                isUnique: true,
                                fieldDisplayType: FieldDiaplyType.HORIZONTAL
                            }
                        ],
                        sortable: true,
                        show: true,
                        width: 20,
                    }
                ],
                actions: [
                    {
                        identifier: "edit",
                        type: ButtonType.RAISED,
                        label: "Edit",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "edit",
                        onlyIcon: false
                    },
                    {
                        identifier: "delete",
                        type: ButtonType.RAISED,
                        label: "Delete",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "delete",
                        onlyIcon: false
                    }
                ],
                rowTextColor: (record) => {
                    //                console.log(record);
                    if (record['id'] % 2 == 1) {
                        return "red";
                    } else {
                        return "blue";
                    }
                },
                rowBgColor: (record) => {
                    //                console.log(record);
                    if (record['id'] % 2 == 1) {
                        return "yellow";
                    } else {
                        return "orange";
                    }
                },
                uniqueKeys: ["id"],
                listType: ListType.DYNAMIC,
                staticList: {
                    hasOnPageFilter: true
                },
                hasColumnSelection: true,
                pagination: PaginationType.PAGE_WISE,
                pageSize: 10,
                hideFooter: false,
                hideHeader: false,
                hideCard: false,
                // displayMode: ListDiaplyMode.VIEW,
                stickyHeader: false,
                selectable: {
                    label: "Selectable",
                    icon: "call_split"
                },
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
                identifier: "userDetailIdentifier1",
                label: "User Detail",
                description: {
                    text: "User Basic Details"
                },
                statistic: "10",
                displayOnAction: "test",
                // tabPageBackRoute: ['pages', 'widget1-back'],
                actions: [
                    {
                        identifier: "update",
                        type: ButtonType.RAISED,
                        label: "Update",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "update",
                        onlyIcon: false
                    },
                ],
                widgets: [
                    {
                        rowSpan: 1,
                        colSpan: 1,
                        displayOnAction: "test",
                        badge: {
                            identifier: "badgeIdentifier1",
                            content: "Testing",
                            color: BadgeColor.ASCENT,
                            position: BadgePosition.AFTER,
                            size: BadgeSize.SMALL,
                            hide: false
                        },
                        widgetType: CrudWidgetType.FORM,
                        widget: {
                            identifier: "userBasicDetailForm1",
                            header: {
                                title: "User Basic Detail",
                            },
                            description: {
                                text: "User Basic Profile Details"
                            },
                            displayInColumns: 1,
                            formFields: [
                                {
                                    field: {
                                        key: "firstNames",
                                        label: "First Name",
                                        type: FieldType.TEXT,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: true,
                                        fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                                        placeholder: "Ex. - Alex",
                                        validations: [
                                            {
                                                type: Validators.required,
                                                message: {
                                                    key: "required",
                                                    message: "Field can't be empty"
                                                }
                                            }
                                        ]
                                    },
                                },
                                {
                                    field: {
                                        key: "lastNames",
                                        label: "Last Name",
                                        type: FieldType.TEXT,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: true,
                                        fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                                        placeholder: "Ex. - Moris",
                                        validations: [
                                            {
                                                type: Validators.required,
                                                message: {
                                                    key: "required",
                                                    message: "Field can't be empty"
                                                }
                                            }
                                        ]
                                    },
                                },
                                {
                                    field: {
                                        key: "age",
                                        label: "Age",
                                        type: FieldType.TEXT,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: true,
                                        fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                                        placeholder: "Ex. - 10",
                                        help: {
                                            icon: "help",
                                            title: "(in years)",
                                            message: "Age in number of years",
                                            displayType: HelpDiaplyType.PLAIN_TEXT,
                                            // orientation: HelpTextOrientation.BELOW
                                        },
                                        validations: [
                                            {
                                                type: Validators.required,
                                                message: {
                                                    key: "required",
                                                    message: "Field can't be empty"
                                                }
                                            }
                                        ]
                                    },
                                },
                                {
                                    field: {
                                        key: "gender",
                                        label: "Gender",
                                        type: FieldType.DROPDOWN,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: true,
                                        fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                                        options: [
                                            {
                                                key: "M",
                                                value: "Male",
                                            },
                                            {
                                                key: "F",
                                                value: "Female",
                                            }
                                        ],
                                        help: {
                                            icon: "help",
                                            title: "(in years)",
                                            message: "Age in number of years",
                                            displayType: HelpDiaplyType.PLAIN_TEXT,
                                            // orientation: HelpTextOrientation.BELOW
                                        },
                                        validations: [
                                            {
                                                type: Validators.required,
                                                message: {
                                                    key: "required",
                                                    message: "Field can't be empty"
                                                }
                                            }
                                        ]
                                    },
                                },
                            ],
                            action: {
                                align: "right",
                                buttons: [
                                    {
                                        identifier: "update",
                                        type: ButtonType.RAISED,
                                        label: "Update",
                                        color: ButtonColor.PRIMARY,
                                        size: ButtonSize.SMALL,
                                        icon: "update",
                                        onlyIcon: false
                                    },
                                ]
                            },
                            displayType: FieldDiaplyType.HORIZONTAL,
                            displayMode: FormDiaplyMode.ADD,
                        },
                    },
                    {
                        rowSpan: 1,
                        colSpan: 1,
                        displayOnAction: "test",
                        widgetType: CrudWidgetType.FORM,
                        widget: {
                            identifier: "userSecurityDetailForm1",
                            header: {
                                title: "User Security Detail",
                            },
                            description: {
                                text: "User Security Profile Details"
                            },
                            displayInColumns: 1,
                            formFields: [
                                {
                                    field: {
                                        key: "currentPassworkd",
                                        label: "Current Password",
                                        type: FieldType.PASSWORD,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: true,
                                        fieldDisplayType: FieldDiaplyType.INLINE,
                                        placeholder: "Type your current password",
                                        validations: [
                                            {
                                                type: Validators.required,
                                                message: {
                                                    key: "required",
                                                    message: "Field can't be empty"
                                                }
                                            }
                                        ]
                                    },
                                },
                                {
                                    field: {
                                        key: "newPassword",
                                        label: "New Password",
                                        type: FieldType.PASSWORD,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: true,
                                        fieldDisplayType: FieldDiaplyType.INLINE,
                                        placeholder: "Type your new password",
                                        validations: [
                                            {
                                                type: Validators.required,
                                                message: {
                                                    key: "required",
                                                    message: "Field can't be empty"
                                                }
                                            }
                                        ]
                                    },
                                },
                                {
                                    field: {
                                        key: "confirmNewPassword",
                                        label: "Confirm New Password",
                                        type: FieldType.PASSWORD,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: true,
                                        fieldDisplayType: FieldDiaplyType.INLINE,
                                        placeholder: "Confirm new password",
                                        validations: [
                                            {
                                                type: Validators.required,
                                                message: {
                                                    key: "required",
                                                    message: "Field can't be empty"
                                                }
                                            }
                                        ]
                                    },
                                },
                            ],
                            action: {
                                align: "right",
                                buttons: [
                                    {
                                        identifier: "changePassword",
                                        type: ButtonType.RAISED,
                                        label: "Change Password",
                                        color: ButtonColor.PRIMARY,
                                        size: ButtonSize.SMALL,
                                        icon: "update",
                                        onlyIcon: false
                                    },
                                ]
                            },
                            displayType: FieldDiaplyType.HORIZONTAL,
                            displayMode: FormDiaplyMode.ADD,
                        },
                    },
                    {
                        rowSpan: 1,
                        colSpan: 2,
                        displayOnAction: "test",
                        widgetType: CrudWidgetType.LIST,
                        widget: {
                            identifier: "addressList",
                            header: {
                                title: "Address List"
                            },
                            description: {
                                text: "User Address List Description"
                            },
                            columns: [
                                {
                                    fields: [
                                        {
                                            key: "address1",
                                            label: "Address 1",
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
                                },
                                {
                                    fields: [
                                        {
                                            key: "address2",
                                            label: "Address 2",
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
                                },
                                {
                                    fields: [
                                        {
                                            key: "city",
                                            label: "City",
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
                                            key: "state",
                                            label: "State",
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
                                            key: "country",
                                            label: "Country",
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
                                }
                            ],
                            actions: [
                                {
                                    identifier: "editAddress",
                                    type: ButtonType.RAISED,
                                    label: "Edit",
                                    color: ButtonColor.PRIMARY,
                                    size: ButtonSize.SMALL,
                                    icon: "edit",
                                    onlyIcon: false
                                },
                                {
                                    identifier: "deleteAddress",
                                    type: ButtonType.RAISED,
                                    label: "Delete",
                                    color: ButtonColor.PRIMARY,
                                    size: ButtonSize.SMALL,
                                    icon: "delete",
                                    onlyIcon: false
                                }
                            ],
                            uniqueKeys: ["id"],
                            listType: ListType.STATIC,
                            staticList: {
                                hasOnPageFilter: true
                            },
                            hasColumnSelection: true,
                            pagination: PaginationType.PAGE_WISE,
                            pageSize: 10,
                            hideFooter: false,
                            hideHeader: false,
                            hideCard: false,
                            // displayMode: ListDiaplyMode.VIEW,
                            stickyHeader: false,
                            selectable: {
                                label: "Selectable",
                                icon: "call_split"
                            },
                            actionWidth: 20,
                            defaultSort: {
                                column: "id",
                                order: ListSortOrder.asc
                            }
                        },
                    }
                ]
            },
            {
                identifier: "userTransactions1",
                label: "User Transactions",
                description: {
                    text: "User Transaction Details"
                },
                statistic: "10",
                displayOnAction: "test",
                // tabPageBackRoute: ['pages', 'widget1-back'],
                actions: [
                    {
                        identifier: "update",
                        type: ButtonType.RAISED,
                        label: "Update",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "update",
                        onlyIcon: false
                    },
                ],
                widgets: [
                    {
                        rowSpan: 1,
                        colSpan: 2,
                        displayOnAction: "test",
                        widgetType: CrudWidgetType.LIST,
                        widget: {
                            identifier: "transactionList",
                            header: {
                                title: "Transaction List"
                            },
                            description: {
                                text: "User Transaction List Description"
                            },
                            columns: [
                                {
                                    fields: [
                                        {
                                            key: "customerName",
                                            label: "Customer Name",
                                            type: FieldType.LABEL,
                                            appearance: FieldAppearance.STANDARD,
                                            isReadOnly: false,
                                            isUnique: true,
                                            fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                        }
                                    ],
                                    sortable: true,
                                    show: true,
                                    width: 25,
                                },
                                {
                                    fields: [
                                        {
                                            key: "balance",
                                            label: "Balance",
                                            type: FieldType.LABEL,
                                            appearance: FieldAppearance.STANDARD,
                                            isReadOnly: false,
                                            isUnique: true,
                                            fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                        }
                                    ],
                                    sortable: true,
                                    show: true,
                                    width: 10,
                                },
                                {
                                    fields: [
                                        {
                                            key: "amount",
                                            label: "Amount",
                                            type: FieldType.LABEL,
                                            appearance: FieldAppearance.STANDARD,
                                            isReadOnly: false,
                                            isUnique: true,
                                            fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                        }
                                    ],
                                    sortable: true,
                                    show: true,
                                    width: 25,
                                },
                                {
                                    fields: [
                                        {
                                            key: "type",
                                            label: "Type",
                                            type: FieldType.LABEL,
                                            appearance: FieldAppearance.STANDARD,
                                            isReadOnly: false,
                                            isUnique: true,
                                            fieldDisplayType: FieldDiaplyType.HORIZONTAL
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
                                            label: "Date",
                                            type: FieldType.LABEL,
                                            appearance: FieldAppearance.STANDARD,
                                            isReadOnly: false,
                                            isUnique: true,
                                            fieldDisplayType: FieldDiaplyType.HORIZONTAL
                                        }
                                    ],
                                    sortable: true,
                                    show: true,
                                    width: 10,
                                }
                            ],
                            actions: [
                                {
                                    identifier: "viewTransaction",
                                    type: ButtonType.RAISED,
                                    label: "View",
                                    color: ButtonColor.PRIMARY,
                                    size: ButtonSize.SMALL,
                                    icon: "view",
                                    onlyIcon: false
                                }
                            ],
                            uniqueKeys: ["id"],
                            listType: ListType.STATIC,
                            staticList: {
                                hasOnPageFilter: true
                            },
                            hasColumnSelection: false,
                            pagination: PaginationType.PAGE_WISE,
                            pageSize: 10,
                            hideFooter: false,
                            hideHeader: false,
                            hideCard: false,
                            // displayMode: ListDiaplyMode.VIEW,
                            stickyHeader: false,
                            selectable: {
                                label: "Selectable",
                                icon: "call_split"
                            },
                            actionWidth: 20,
                            defaultSort: {
                                column: "id",
                                order: ListSortOrder.asc
                            }
                        },
                    }
                ]
            }
        ]
    },
    // actionPages: Array < ActionPage >, //  ?? Might not be required as now forms in map mode
    // listPageBackRoute: ["pages", "list-page"],
    // tabPageBackRoute: ["pages", "tab-page"],
    // template?: Template,
    // privilege?: any
}