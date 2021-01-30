import { Validators } from '@angular/forms';
import { ButtonColor, ButtonSize, ButtonType, FieldType, Form, FormDiaplyMode, FieldDiaplyType, HelpDiaplyType, HelpTextOrientation, DisplayMode, UploadFileType, ImageFileType } from 'ngx-material-widget';

export const uploadExample: Form = {
    identifier: "uploadExampleForm",
    header: {
        title: "Upload Attributes",
    },
    displayInColumns: 2,
    formFields: [
        {
            field: {
                key: "basicUpload",
                label: "Basic",
                type: FieldType.UPLOAD,
            }
        },
        {
            field: {
                key: "uploadWithoutLabel",
                label: "",
                type: FieldType.UPLOAD,
            }
        },
        {
            field: {
                key: "uploadWithoutIcon",
                label: "Without Icon",
                type: FieldType.UPLOAD,
                hideFileIconButton: true
            }
        },
        {
            field: {
                key: "uploadReadOnly",
                label: "Readonly",
                type: FieldType.UPLOAD,
                isReadOnly: true
            }
        },
        {
            field: {
                key: "upload2ColumnSpan",
                label: "2 Column Span",
                type: FieldType.UPLOAD,
            },
            displayInColumns: 2
        },
        {
            field: {
                key: "uploadWithDefaultValue",
                label: "With Default Value",
                type: FieldType.UPLOAD,
                fileType: UploadFileType.IMAGE,
                subFileType: [],            
                value: [
                    {
                        name: 'Sample 2',
                        url: '/assets/images/avatar.png',
                        data: null
                    }
                ],
            }
        },
        {
            field: {
                key: "uploadWithDeleteAll",
                label: "With Delete All",
                type: FieldType.UPLOAD,
                hasClear: true,
                value: [
                    {
                        name: 'Sample 1',
                        url: '/assets/images/avatar.png',
                        data: null
                    },
                    {
                        name: 'Sample 2',
                        url: '/assets/images/avatar.png',
                        data: null
                    }
                ],
                hideDeleteAllButton: false,
                fileType: UploadFileType.IMAGE,
                subFileType: [],            
                help: {
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    message: "Delete All icon is displayed when the field control has some value in it"
                },
            }
        },
        {
            field: {
                key: "uploadWithHelpTooltip",
                label: "With Help Tooltip",
                type: FieldType.UPLOAD,
                help: {
                    displayType: HelpDiaplyType.TOOLTIP,
                    title: "Help Title",
                    message: "Help Message to display for the field as tooltip",
                    orientation: HelpTextOrientation.TOP
                }
            },
            separator: {
                beforeField: false,
                label: "Type of Help Display"
            }
        },
        {
            field: {
                key: "uploadWithHelpPlainText",
                label: "With Help Plain Text",
                type: FieldType.UPLOAD,
                help: {
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    title: "Help Title",
                    message: "Help Message as label"
                }
            }
        },
        {
            field: {
                key: "uploadWithHelpTextWithLabel",
                label: "With Help Text (with Label)",
                type: FieldType.UPLOAD,
                help: {
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    title: "Help Title",
                    message: "Help Message beside label",
                    withLabel: true
                }
            }
        },
        {
            field: {
                key: "uploadWithHelpRightModal",
                label: "With Help in Right Modal",
                type: FieldType.UPLOAD,
                help: {
                    displayType: HelpDiaplyType.RIGHT_MODAL,
                    title: "Help Title",
                    message: "Help Message in right modal",
                    withLabel: true
                }
            }
        },
        {
            field: {
                key: "uploadDisabled",
                label: "Disabled Upload",
                type: FieldType.UPLOAD,
                displayMode: DisplayMode.DISABLED
            },
            separator: {
                beforeField: false,
                label: "Display Modes"
            }
        },
        {
            field: {
                key: "uploadAsLabel",
                label: "As Label",
                type: FieldType.UPLOAD,
                displayMode: DisplayMode.LABEL,
                fileType: UploadFileType.IMAGE,
                subFileType: [],            
                value: [
                    {
                        name: 'Sample 1',
                        url: '/assets/images/avatar.png',
                        data: null
                    },
                    {
                        name: 'Sample 2',
                        url: '/assets/images/avatar.png',
                        data: null
                    }
                ],
            }
        },
        {
            field: {
                key: "uploadRequired",
                label: "Mandatory Field",
                type: FieldType.UPLOAD,
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
            },
            separator: {
                beforeField: false,
                label: "Validation"
            }
        },
        {
            field: {
                key: "uploadMinLength",
                label: "Minimum Length",
                type: FieldType.UPLOAD,
                validations: [
                    {
                        type: Validators.minLength(5),
                        message: {
                            key: "minlength",
                            message: "Length should be more than 5 chars"
                        }
                    }
                ],
            }
        },
        {
            field: {
                key: "uploadMainField",
                label: "Main Field",
                type: FieldType.TEXT
            },
            separator: {
                beforeField: false,
                label: "Dependent Field"
            }
        },
        {
            field: {
                key: "uploadChildField",
                label: "Child Field",
                type: FieldType.UPLOAD,
                dependentOnFields: [
                    {
                        key: "uploadMainField",
                        condition: "main",
                        displayMode: DisplayMode.DISABLED
                    }
                ]
            }
        }
    ],
    action: {
        align: "right",
        buttons: [
            {
                identifier: "save",
                type: ButtonType.RAISED,
                label: "Save",
                color: ButtonColor.PRIMARY,
                size: ButtonSize.SMALL,
                icon: "save",
                onlyIcon: false,
                showOnMobile: true,
                showOnTablet: true,
                showOnDesktop: true,
            },

        ]
    },
    displayType: FieldDiaplyType.INLINE,
    displayMode: FormDiaplyMode.ADD,
}