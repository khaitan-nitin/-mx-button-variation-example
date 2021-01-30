import { FieldType, FieldDiaplyType, FieldAppearance } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { Validators } from '@angular/forms';
import { List, ListType, ListSortOrder, PaginationType, ChildListType, ListShadeType } from 'ngx-material-widget/lib/list/model';

export const basicList: List = {
    identifier: "listIdentifier1",
    header: {
        title: "Basic List"
    },
    description: {
        text: "Basic List Description",
        bgColor: "#80ecfa",
        icon: 'keyboard',
    },
    shade: {
        type: ListShadeType.HOVER
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
                    fieldDisplayType: FieldDiaplyType.INLINE,
                    placeholder: "place holder 1",
                    maxLength: 10,
                    value: "1",
                    ellipsis: 100,
                    validations: [
                        {
                            type: Validators.required,
                            message: {
                                key: "required",
                                message: "Field can't be empty"
                            }
                        }
                    ]
                }
            ],
            // link: {
            //     identifier: "save",
            //     type: ButtonType.GHOST,
            //     label: "onClick",
            //     color: ButtonColor.PRIMARY,
            //     onlyIcon: false
            // },
            //            help?: ColumnHelp,
            sortable: true,
            show: true,
            width: 20,
            // textColor: (record) => {
            // console.log(record);
            // if (record['id'] % 2 == 1) {
            //     return "green";
            // } else {
            //     return "blue";
            // }
            // },
            // bgColor: (record) => {
            // console.log(record);
            // if (record['id'] % 2 == 1) {
            //     return "yellow";
            // } else {
            //     return "orange";
            // }
            // }
        },
        {
            fields: [
                {
                    key: "firstName",
                    label: "First Name",
                    type: FieldType.LABEL,
                    appearance: FieldAppearance.STANDARD,
                    multiple: true,
                    isReadOnly: false,
                    isUnique: true,
                    fieldDisplayType: FieldDiaplyType.INLINE,
                    placeholder: "place holder 1",
                    maxLength: 1000,
                    value: "2",
                    ellipsis: 100,
                    validations: [
                        {
                            type: Validators.required,
                            message: {
                                key: "required",
                                message: "Field can't be empty"
                            }
                        }
                    ]
                }
            ],
            sortable: true,
            show: true,
            width: 50,
            // textColor: (record) => {
            //                console.log(record);
            // if (record['id'] % 2 == 1) {
            //     return "red";
            // } else {
            //     return "blue";
            // }
            // },
            // bgColor: (record) => {
            //                console.log(record);
            // if (record['id'] % 2 == 1) {
            //     return "yellow";
            // } else {
            //     return "orange";
            // }
            // }
        }
    ],
    actions: [
        {
            identifier: "save",
            type: ButtonType.RAISED,
            label: "Save",
            color: ButtonColor.DEFAULT,
            size: ButtonSize.SMALL,
            icon: "save",
            onlyIcon: false
        },
        {
            identifier: "update",
            type: ButtonType.RAISED,
            label: "Update",
            color: ButtonColor.DEFAULT,
            size: ButtonSize.SMALL,
            icon: "save",
            onlyIcon: false
        }
    ],
    // rowTextColor: (record) => {
    //                console.log(record);
    // if (record['id'] % 2 == 1) {
    //     return "red";
    // } else {
    //     return "blue";
    // }
    // },
    // rowBgColor: (record) => {
    //                console.log(record);
    // if (record['id'] % 2 == 1) {
    //     return "yellow";
    // } else {
    //     return "orange";
    // }
    // },
    uniqueKeys: ["id"],
    listType: ListType.STATIC,
    staticList: {
        hasOnPageFilter: false
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
    //    template?: Template,
    child: {
        recordIdentifier: "childRecordLevelOne",
        type: ChildListType.LIST,
        record: {
            // identifier: "formIdentifier1",
            // header: {
            //     title: "Main Heading",
            //     actions: [
            //         {
            //             identifier: "save",
            //             type: ButtonType.RAISED,
            //             label: "Save",
            //             color: ButtonColor.PRIMARY,
            //             size: ButtonSize.SMALL,
            //             icon: "save",
            //             onlyIcon: false
            //         },
            //     ]
            // },
            // displayInColumns: 2,
            // formFields: [
            //     {
            //         field: {
            //             key: "fieldIdentifier3",
            //             label: "TextArea",
            //             type: FieldType.TEXTAREA,
            //             appearance: FieldAppearance.STANDARD,
            //             isReadOnly: false,
            //             isUnique: false,
            //             fieldDisplayType: FieldDiaplyType.HORIZONTAL,
            //             maxLength: 100,
            //             placeholder: "place holder 2",
            //             help: {
            //                 icon: "help",
            //                 title: "Help Me Title 3!",
            //                 message: "Help Me Message 3!",
            //                 displayType: HelpDiaplyType.PLAIN_TEXT,
            //                 orientation: HelpTextOrientation.BELOW
            //             },
            //         },
            //     },
            //     {
            //         field: {
            //             key: "fieldIdentifier4",
            //             label: "Color",
            //             type: FieldType.COLOR,
            //             appearance: FieldAppearance.STANDARD,
            //             isReadOnly: false,
            //             isUnique: false,
            //             fieldDisplayType: FieldDiaplyType.HORIZONTAL,
            //             placeholder: "place holder 2",
            //             help: {
            //                 icon: "help",
            //                 title: "Help Me Title 3!",
            //                 message: "Help Me Message 3!",
            //                 displayType: HelpDiaplyType.PLAIN_TEXT,
            //                 orientation: HelpTextOrientation.BELOW
            //             },
            //         },
            //     },
            //     {
            //         field: {
            //             key: "fieldIdentifier5",
            //             label: "Email",
            //             type: FieldType.EMAIL,
            //             appearance: FieldAppearance.STANDARD,
            //             isReadOnly: false,
            //             isUnique: false,
            //             fieldDisplayType: FieldDiaplyType.HORIZONTAL,
            //             maxLength: 10,
            //             placeholder: "place holder 2",
            //             // help: {
            //             //     helpIcon: "help",
            //             //     title: "Help Me Title 3!",
            //             //     message: "Help Me Message 3!",
            //             //     displayType: HelpDiaplyType.PLAIN_TEXT,
            //             //     orientation: HelpTextOrientation.BELOW
            //             // },
            //         },
            //     },
            //     {
            //         field: {
            //             key: "fieldIdentifier6",
            //             label: "Month",
            //             type: FieldType.MONTH,
            //             appearance: FieldAppearance.STANDARD,
            //             isReadOnly: false,
            //             isUnique: false,
            //             fieldDisplayType: FieldDiaplyType.HORIZONTAL,
            //             placeholder: "place holder 2",
            //             help: {
            //                 icon: "help",
            //                 title: "Help Me Title 3!",
            //                 message: "Help Me Message 3!",
            //                 displayType: HelpDiaplyType.PLAIN_TEXT,
            //                 orientation: HelpTextOrientation.BELOW
            //             },
            //         },
            //     },
            //     {
            //         field: {
            //             key: "fieldIdentifier7",
            //             label: "Number",
            //             type: FieldType.NUMBER,
            //             appearance: FieldAppearance.STANDARD,
            //             isReadOnly: false,
            //             isUnique: false,
            //             fieldDisplayType: FieldDiaplyType.HORIZONTAL,
            //             min: 2,
            //             max: 5,
            //             placeholder: "place holder 2",
            //             help: {
            //                 icon: "help",
            //                 title: "Help Me Title 3!",
            //                 message: "Help Me Message 3!",
            //                 displayType: HelpDiaplyType.PLAIN_TEXT,
            //                 orientation: HelpTextOrientation.BELOW
            //             }
            //         },
            //     },
            //     {
            //         field: {
            //             key: "fieldIdentifier8",
            //             label: "Password",
            //             type: FieldType.PASSWORD,
            //             appearance: FieldAppearance.STANDARD,
            //             isReadOnly: false,
            //             isUnique: false,
            //             fieldDisplayType: FieldDiaplyType.HORIZONTAL,
            //             maxLength: 5,
            //             placeholder: "place holder 2",
            //         },
            //     },
            // ],
            // buttons: [
            // ],
            // displayType: FieldDiaplyType.HORIZONTAL,
            // displayMode: FormDiaplyMode.ADD,
            identifier: "listIdentifier1",
            header: {
                title: "Basic Child List"
            },
            description: {
                text: "Basic Child List Description"
            },
            columns: [
                {
                    fields: [
                        {
                            key: "childOne",
                            label: "Child One",
                            type: FieldType.TEXT,
                            appearance: FieldAppearance.STANDARD,
                            isReadOnly: false,
                            isUnique: true,
                            fieldDisplayType: FieldDiaplyType.INLINE,
                            placeholder: "place holder 1",
                            maxLength: 10,
                            value: "1",
                            ellipsis: 100,
                            validations: [
                                {
                                    type: Validators.required,
                                    message: {
                                        key: "required",
                                        message: "Field can't be empty"
                                    }
                                }
                            ]
                        }
                    ],
                    link: {
                        identifier: "save",
                        type: ButtonType.GHOST,
                        label: "onClickChild One",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        onlyIcon: false
                    },
                    //            help?: ColumnHelp,
                    sortable: true,
                    show: true,
                    width: 25,
                    // textColor: (record) => {
                    //     // console.log(record);
                    //     if (record['id'] % 2 == 1) {
                    //         return "green";
                    //     } else {
                    //         return "blue";
                    //     }
                    // },
                    // bgColor: (record) => {
                    // console.log(record);
                    // if (record['id'] % 2 == 1) {
                    //     return "yellow";
                    // } else {
                    //     return "orange";
                    // }
                    // }
                },
                {
                    fields: [
                        {
                            key: "childTwo",
                            label: "Child Two",
                            type: FieldType.TEXTAREA,
                            appearance: FieldAppearance.STANDARD,
                            multiple: true,
                            isReadOnly: false,
                            isUnique: true,
                            fieldDisplayType: FieldDiaplyType.INLINE,
                            placeholder: "place holder 1",
                            maxLength: 1000,
                            value: "2",
                            ellipsis: 100,
                            validations: [
                                {
                                    type: Validators.required,
                                    message: {
                                        key: "required",
                                        message: "Field can't be empty"
                                    }
                                }
                            ]
                        }
                    ],
                    sortable: true,
                    show: true,
                    width: 40,
                    // textColor: (record) => {
                    //                console.log(record);
                    // if (record['id'] % 2 == 1) {
                    //     return "red";
                    // } else {
                    //     return "blue";
                    // } 
                    // },
                    // bgColor: (record) => {
                    //                console.log(record);
                    // if (record['id'] % 2 == 1) {
                    //     return "yellow";
                    // } else {
                    //     return "orange";
                    // }
                    // }
                }
            ],
            actions: [
                {
                    identifier: "save",
                    type: ButtonType.RAISED,
                    label: "Save",
                    color: ButtonColor.PRIMARY,
                    size: ButtonSize.SMALL,
                    icon: "save",
                    onlyIcon: false
                },
                {
                    identifier: "update",
                    type: ButtonType.RAISED,
                    label: "Update",
                    color: ButtonColor.PRIMARY,
                    size: ButtonSize.SMALL,
                    icon: "save",
                    onlyIcon: false
                }
            ],
            // rowTextColor: (record) => {
            //     //                console.log(record);
            //     if (record['id'] % 2 == 1) {
            //         return "grey";
            //     } else {
            //         return "purple";
            //     }
            // },
            // rowBgColor: (record) => {
            //                console.log(record);
            // if (record['id'] % 2 == 1) {
            //     return "yellow";
            // } else {
            //     return "orange";
            // }
            // },
            uniqueKeys: ["id"],
            listType: ListType.STATIC,
            staticList: {
                hasOnPageFilter: false
            },
            hasColumnSelection: false,
            pagination: PaginationType.PAGE_WISE,
            pageSize: 10,
            hideFooter: false,
            hideHeader: true,
            hideCard: true,
            //            displayMode: ListDiaplyMode.VIEW,
            stickyHeader: false,
            selectable: {
                label: "Selectable",
                icon: "call_split"
            },
            //    template?: Template,
            // child: {
            //     record: {

            //     }
            // },

            //    privilege?: any,
            actionWidth: 50,
            defaultSort: {
                column: "id",
                order: ListSortOrder.asc
            }
        }
    },

    //    privilege?: any,
    actionWidth: 50,
    defaultSort: {
        column: "id",
        order: ListSortOrder.asc
    }
}