import { FieldType, FieldDiaplyType, FieldAppearance } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { ListType, ListSortOrder, PaginationType } from 'ngx-material-widget/lib/list/model';
import { Crud, CrudWidgetType, CrudFormDisplayType } from 'ngx-material-widget/lib/crud/model';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';

export const profileCrud: Crud = {
    identifier: "profile",
    header: {
        title: "User Profile"
    },
    actions: [
    ],
    quickLinks: [
    ],
    form: {
        displayType: CrudFormDisplayType.TAB,
        tabs: [
            {
                identifier: "manageProfileTab",
                label: "User Profile",
                statistic: "10",
                displayOnAction: "profile",
                actions: [
                ],
                widgets: [
                    {
                        rowSpan: 1,
                        colSpan: 1,
                        displayOnAction: "profile",
                        widgetType: CrudWidgetType.FORM,
                        widget: {
                            identifier: "profileForm", 
                            header: {
                                title: "Profile Form",
                                actions: [
                                    {
                                        identifier: "editProfile",
                                        type: ButtonType.RAISED,
                                        label: "Edit",
                                        color: ButtonColor.PRIMARY,
                                        size: ButtonSize.TINY,
                                        icon: "update",
                                        onlyIcon: false
                                    }
                                ]
                            },
                            description: {
                                text: "My Basic Profile"
                            },
                            displayInColumns: 1,
                            formFields: [
                                {
                                    field: {
                                        key: "firstName",
                                        label: "First Name",
                                        icon: "",
                                        type: FieldType.LABEL,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: true,
                                        placeholder: "i.e. - Nitin",
                                        maxLength: 50,
                                        hasClear: true,
                                        value: "--"
                                    },
                                },
                                {
                                    field: {
                                        key: "lastName",
                                        label: "Last Name",
                                        icon: "",
                                        type: FieldType.LABEL,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: true,
                                        placeholder: "i.e. - Khaitan",
                                        maxLength: 50,
                                        hasClear: true,
                                        value: "--",
                                    },
                                },
                                {
                                    field: {
                                        key: "email",
                                        label: "Email",
                                        icon: "",
                                        type: FieldType.LABEL,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: true,
                                        placeholder: "i.e. - khaitan.nitin@gmail.com",
                                        maxLength: 50,
                                        hasClear: true,
                                        value: "--"
                                    },
                                },
                                {
                                    field: {
                                        key: "phone",
                                        label: "Phone",
                                        icon: "",
                                        type: FieldType.LABEL,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: true,
                                        placeholder: "i.e. - 9293939392",
                                        maxLength: 10,
                                        hasClear: true,
                                        value: "--"
                                    },
                                },
                                {
                                    field: {
                                        key: "summary",
                                        label: "Short Summary",
                                        icon: "",
                                        type: FieldType.LABEL,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: true,
                                        placeholder: "Short summary about myself",
                                        maxLength: 10,
                                        hasClear: true,
                                        value: "--"
                                    }
                                }
                            ],
                            action: {
                                align: "right",
                                buttons: [
                                ]
                            },
                            displayType: FieldDiaplyType.HORIZONTAL,
                            displayMode: FormDiaplyMode.VIEW,
                        },
                    },
                    {
                        rowSpan: 1,
                        colSpan: 1,
                        displayOnAction: "profile",
                        widgetType: CrudWidgetType.LIST,
                        widget: {
                            identifier: "addressList",
                            header: {
                                title: "Address List",
                                actions: [
                                    {
                                        identifier: "AddAddress",
                                        type: ButtonType.RAISED,
                                        label: "Add Address",
                                        color: ButtonColor.PRIMARY,
                                        size: ButtonSize.TINY,
                                        icon: "playlist_add",
                                        onlyIcon: false
                                    }
                                ],
                                    },
                            description: {
                                text: "User Address List Description"
                            },
                            columns: [
                                {
                                    fields: [
                                        {
                                            key: "address1",
                                            label: "Address",
                                            type: FieldType.LABEL,
                                            appearance: FieldAppearance.STANDARD,
                                            isReadOnly: false,
                                            isUnique: true,
                                            fieldDisplayType: FieldDiaplyType.INLINE
                                        },
                                        {
                                            key: "address2",
                                            label: "Address 2",
                                            type: FieldType.LABEL,
                                            appearance: FieldAppearance.STANDARD,
                                            isReadOnly: false,
                                            isUnique: true,
                                            fieldDisplayType: FieldDiaplyType.INLINE
                                        },
                                        {
                                            key: "landmark",
                                            label: "Landmark",
                                            type: FieldType.LABEL,
                                            appearance: FieldAppearance.STANDARD,
                                            isReadOnly: false,
                                            isUnique: true,
                                            fieldDisplayType: FieldDiaplyType.INLINE
                                        },
                                        {
                                            key: "city",
                                            label: "City",
                                            type: FieldType.LABEL,
                                            appearance: FieldAppearance.STANDARD,
                                            isReadOnly: false,
                                            isUnique: true,
                                            fieldDisplayType: FieldDiaplyType.INLINE
                                        },
                                        {
                                            key: "state",
                                            label: "State",
                                            type: FieldType.LABEL,
                                            appearance: FieldAppearance.STANDARD,
                                            isReadOnly: false,
                                            isUnique: true,
                                            fieldDisplayType: FieldDiaplyType.INLINE
                                        },
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
                                    width: 100,
                                    displayInline: {
                                        separator: ", "
                                    }
                                }
                            ],
                            actions: [
                                {
                                    identifier: "EditAddress",
                                    type: ButtonType.RAISED,
                                    label: "Edit",
                                    color: ButtonColor.PRIMARY,
                                    size: ButtonSize.TINY,
                                    icon: "edit",
                                    onlyIcon: false
                                }, 
                            ],
                            uniqueKeys: ["address1"],
                            listType: ListType.STATIC,
                            staticList: {
                                hasOnPageFilter: true
                            },
                            hasColumnSelection: false,
                            pagination: PaginationType.ALL,
                            pageSize: 10,
                            hideFooter: false,
                            hideHeader: false,
                            hideCard: false,
                            // displayMode: ListDiaplyMode.VIEW,
                            stickyHeader: false,
                            actionWidth: 0,
                            defaultSort: {
                                column: "address1",
                                order: ListSortOrder.asc
                            }
                        },
                    },
                    {
                        rowSpan: 1,
                        colSpan: 1,
                        displayOnAction: "profile",
                        widgetType: CrudWidgetType.FORM,
                        widget: {
                            identifier: "changeCredentialForm",
                            header: {
                                title: "Change Password",
                            },
                            displayInColumns: 1,
                            formFields: [
                                {
                                    field: {
                                        key: "currentPassword",
                                        label: "Current Password",
                                        icon: "",
                                        type: FieldType.PASSWORD,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        maxLength: 50,
                                        hasClear: true,
                                        value: ""
                                    },
                                },
                                {
                                    field: {
                                        key: "newPassword",
                                        label: "New Password",
                                        icon: "",
                                        type: FieldType.PASSWORD,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        maxLength: 50,
                                        hasClear: true,
                                        value: ""
                                    },
                                },
                                {
                                    field: {
                                        key: "RepeatNewPassword",
                                        label: "Repeat New Password",
                                        icon: "",
                                        type: FieldType.PASSWORD,
                                        appearance: FieldAppearance.STANDARD,
                                        isReadOnly: false,
                                        isUnique: false,
                                        maxLength: 50,
                                        hasClear: true,
                                        value: ""
                                    },
                                },
                            ],
                            action: {
                                align: "right",
                                buttons: [
                                    {
                                        identifier: "updatePassword",
                                        type: ButtonType.RAISED,
                                        label: "Change Password",
                                        color: ButtonColor.PRIMARY,
                                        size: ButtonSize.TINY,
                                        icon: "update",
                                        onlyIcon: false
                                    },
                                ]
                            },
                            displayType: FieldDiaplyType.HORIZONTAL,
                            displayMode: FormDiaplyMode.EDIT,
                        },
                    },
                ]
            },
        ]
    },
    // actionPages: Array < ActionPage >, //  ?? Might not be required as now forms in map mode
    // listPageBackRoute: ["pages", "list-page"],
    // tabPageBackRoute: ["pages", "tab-page"],
    // template?: Template,
    // privilege?: any
}