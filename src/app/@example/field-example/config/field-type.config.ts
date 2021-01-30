import { Form, FormDiaplyMode, } from 'ngx-material-widget/lib/form/model';
import { FieldType, FieldDiaplyType, HelpDiaplyType, HelpTextOrientation, DisplayMode, FieldAppearance, UploadFileType, OptionDisplayTemplate, ImageFileType, DisplayType, DropdownOption } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { Validators } from '@angular/forms';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { CollectionUtils } from 'ngx-material-widget';

export const fieldType: Form = {
    identifier: "fieldTypesInForm",
    header: {
        title: "Field Types",
    },
    displayInColumns: 2,
    formFields: [
        // {
        //     field: {
        //         key: "toolbarField",
        //         title: "My Application",
        //         type: FieldType.TOOLBAR,
        //         menuItems: [
        //             {
        //                 label: 'Home',
        //                 icon: 'home',
        //                 showOnMobile: true,
        //                 showOnTablet: true,
        //                 showOnDesktop: true,
        //                 onClick: (event) => {
        //                     console.log(event);
        //                 }
        //             },
        //             {
        //                 label: 'Help',
        //                 icon: 'help',
        //                 showOnMobile: false,
        //                 showOnTablet: true,
        //                 showOnDesktop: true,
        //                 onClick: (event) => {
        //                     console.log(event);
        //                 }
        //             },
        //             {
        //                 label: 'Label',
        //                 icon: 'label',
        //                 showOnMobile: false,
        //                 showOnTablet: false,
        //                 showOnDesktop: true,
        //                 onClick: (event) => {
        //                     console.log(event);
        //                 }
        //             },
        //             {
        //                 label: 'Info',
        //                 icon: 'info',
        //                 showOnMobile: false,
        //                 showOnTablet: false,
        //                 showOnDesktop: false,
        //                 onClick: (event) => {
        //                     console.log(event);
        //                 }
        //             }
        //         ],
        //         help: {
        //             icon: 'help',
        //             message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
        //             title: 'Hello world',
        //             displayType: HelpDiaplyType.PLAIN_TEXT
        //         }
        //     }
        // },
        {
            field: {
                key: "textField",
                label: "Text Box",  
                type: FieldType.TEXT,
                placeholder: "i.e. - input some text",
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            }
        },
        { 
            field: {
                key: "textAreaField",
                label: "Text Area",
                type: FieldType.TEXTAREA,
                placeholder: "i.e. - input description",
                rows: 2,
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            }
        },
        {
            field: {
                key: "colorField",
                label: "Color",
                type: FieldType.COLOR,
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            },
        },
        {
            field: {
                key: "passwordField",
                label: "Password",
                type: FieldType.PASSWORD,
                placeholder: "i.e. - login detail",
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            }
        },
        {
            field: {
                key: "emailField",
                label: "Email",
                type: FieldType.EMAIL,
                placeholder: "i.e. - khaitan.nitin@gmail.com",
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            },
        },
        {
            field: {
                key: "monthField",
                label: "Month",
                type: FieldType.MONTH,
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            },
        },
        {
            field: {
                key: "weekField",
                label: "Week",
                type: FieldType.WEEK,
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            },
        },
        {
            field: {
                key: "numberField",
                label: "Number",
                type: FieldType.NUMBER,
                placeholder: "i.e. - 10",
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            },
        },
        {
            field: {
                key: "timeField",
                label: "Time",
                type: FieldType.TIME,
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            },
        },
        {
            field: {
                key: "calendarField",
                label: "Calendar",
                type: FieldType.CALENDAR,
                placeholder: "i.e. - 2020-01-01",
                dateRange: false,
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            }
        },
        {
            field: {
                key: "calendarField1",
                label: "Range Calendar ",
                type: FieldType.CALENDAR,
                placeholder: "",
                dateRange: true,
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            }
        },
        {
            field: {
                key: "sliderField",
                label: "Slider",
                type: FieldType.SLIDER,
                color: ButtonColor.PRIMARY,
                invert: false,
                min: 1,
                max: 100,
                step: 10,
                thumbLabel: true,
                tickInterval: 'auto',
                vertical: false,
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            },
        },
        {
            field: {
                key: "checkboxField",
                label: "Checkbox",
                type: FieldType.CHECKBOX,
                displayTemplate: OptionDisplayTemplate.CLASSIC,
                options: [
                    {
                        key: "active",
                        value: "Active",
                        description: "Check to activate the account",
                        disabled: true
                    },
                    {
                        key: "inactive",
                        value: "In active",
                        description: "Check to inactivate the account",
                    },
                    {
                        key: "none",
                        value: "None",
                        description: "Check to inactivate the account",
                    },
                ],
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            },
        },
        {
            field: {
                key: "radioBoxField",
                label: "RadioBox",
                type: FieldType.RADIO,
                displayTemplate: OptionDisplayTemplate.CLASSIC,
                options: [
                    {
                        key: "active",
                        value: "Active",
                        description: "Check to activate the account"
                    },
                    {
                        key: "inactive",
                        value: "In active",
                        description: "Check to inactivate the account",
                    },
                ],
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            },
        },
        {
            field: {
                key: "multiSelectList",
                label: "Multi Select",
                type: FieldType.CHECKBOX,
                displayTemplate: OptionDisplayTemplate.LIST,
                defaultImageUrl: 'https://my.multime.com/static/fixtures/avatar.jpg',
                showLess: 2,
                showAllLabel: "All Avatar(s)",
                options: [
                    {
                        key: "One",
                        value: "Sample 1",
                        description: 'Sub Value',
                        image: '/assets/images/avatar.png',
                        disabled: true
                    },
                    {
                        key: "Two",
                        value: "Sample 2",
                        description: 'Sub Value',
                        image: '/assets/images/avatar1.png'
                    },
                    {
                        key: "Three",
                        value: "Sample 3",
                        description: 'Sub Value',
                        image: '/assets/images/avatar.png'
                    },
                    {
                        key: "Four",
                        value: "Sample 4",
                        description: 'Sub Value',
                        image: '/assets/images/avatar2.png'
                    },
                    {
                        key: "five",
                        value: "Sample 5",
                        description: 'Sub Value',
                        image: '/assets/images/avatar.png'
                    },
                    {
                        key: "six",
                        value: "Sample 6",
                        description: 'Sub Value',
                        image: '/assets/images/avatar1.png'
                    },
                    {
                        key: "seven",
                        value: "Sample 7",
                        description: 'Sub Value',
                        image: '/assets/images/avatar.png'
                    },
                    {
                        key: "eight",
                        value: "Sample 8",
                        description: 'Sub Value',
                        image: '/assets/images/avatar2.png'
                    },
                ],
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            },
        },
        {
            field: {
                key: "singleSelectList",
                label: "Single Select",
                type: FieldType.RADIO,
                displayTemplate: OptionDisplayTemplate.LIST,
                defaultImageUrl: 'https://my.multime.com/static/fixtures/avatar.jpg',
                showLess: 4,
                options: [
                    {
                        key: 1,
                        value: "Sample 1",
                        image: '/assets/images/avatar.png',
                        description: "asfasd dfsa fd asdf as fsa f saf as fsad f saf asd f asf d f af assfasd dfsa fd asdf as fsa f saf as fsad f saf asd f asf d f af as",
                        disabled: true
                    },
                    {
                        key: 2,
                        value: "Sample 2",
                    },
                    {
                        key: 3,
                        value: "Sample 3",
                    },
                    {
                        key: 4,
                        value: "Sample 4",
                    },
                ],
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            },
        },
        {
            field: {
                key: "toggleField",
                label: "Toggle",
                description: "Mark Test Mode",
                type: FieldType.TOGGLE_OPTION,
                color: ButtonColor.PRIMARY,
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            },
        },
        {
            field: {
                key: "dropdownField",
                label: "Dropdown",
                type: FieldType.DROPDOWN,
                options: [
                    {
                        key: "active",
                        value: "Active",
                        description: "Check to activate the account"
                    },
                    {
                        key: "inactive",
                        value: "In active",
                        description: "Check to inactivate the account",
                    },
                ],
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            },
        },
        {
            field: {
                key: "autocompleteField",
                label: "Autocomplete",
                type: FieldType.AUTOCOMPLETE,
                placeholder: "i.e. - Status",
                noRecordFound: 'No Data Found',
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            },
        },
        {
            field: {
                key: "fileUploaderField",
                label: "File Uploader",
                type: FieldType.UPLOAD,
                uploadButtonText: "Upload Files",
                hideDownloadButton: true,
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
                hideUploadButton: false,
                multiple: true,
                fileType: UploadFileType.IMAGE,
                subFileType: [ImageFileType.BMP, ImageFileType.GIF, ImageFileType.JPEG, ImageFileType.JPG],
                onUploadClick: (files) => {
                    console.log(files)
                    return of([{
                        name: 'Sample 1',
                        url: '/assets/images/avatar.png',
                        data: null
                    },
                    {
                        name: 'Sample 2',
                        url: '/assets/images/avatar.png',
                        data: null
                    },
                    {
                        name: 'Sample 3',
                        url: '/assets/images/avatar.png',
                        data: null
                    }
                    ]).pipe(delay(5000))
                },
                onDeleteAllClick: (files) => {
                    return of(true).pipe(delay(5000));
                },
                onDeleteFileClick: (files) => {
                    return of(true).pipe(delay(5000));
                },
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            },
        },
        {
            field: {
                key: "fileUploaderField1",
                label: "File Uploader 2",
                type: FieldType.UPLOAD,
                uploadButtonText: "Upload File",
                //                displayMode: DisplayMode.DISABLED,
                value: [
                    {
                        name: 'Sample 1',
                        url: '/assets/images/avatar.png',
                    },
                    {
                        name: 'Sample 1',
                        url: '/assets/images/avatar.png',
                    },
                    {
                        name: 'Sample 1',
                        url: '/assets/images/avatar.png',
                    }
                ],
                multiple: false,
                //                showDeleteAllButton: true, 
                fileType: UploadFileType.PDF,
                showLess: 2,
                onUploadClick: (files) => {
                    return of([{
                        name: 'Sample 1',
                        url: '/assets/images/avatar.png'
                    },
                    {
                        name: 'Sample 2',
                        url: '/assets/images/avatar.png'
                    },
                    {
                        name: 'Sample 3',
                        url: '/assets/images/avatar.png'
                    }]).pipe(delay(5000))
                },
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            },
        },
        {
            field: {
                key: "imageField",
                label: "Image",
                type: FieldType.IMAGE,
                //                acceptEncoding: "gif,jpeg,jpg",
                width: "50",
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            }
        },
        {
            field: {
                key: "htmlEditorField",
                label: "Html Editor",
                type: FieldType.HTML_EDITOR,
                maxLength: 200,
                height: 400,
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            },
            displayInColumns: 2
        },
        {
            field: {
                key: "jsonField",
                label: "Json",
                type: FieldType.JSON,
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            }
        },
        {
            field: {
                key: "labelField",
                label: "Label",
                type: FieldType.LABEL,
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            },
        },
        {
            field: {
                key: "booleanField",
                label: "Boolean",
                type: FieldType.BOOLEAN,
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            },
        },
        {
            field: {
                key: "chips1",
                label: "Chips 1",
                type: FieldType.CHIPS,
                // chips: [
                //     {
                //         value: 'Apple',
                //         disabled: true
                //     },
                //     {
                //         value: 'Orange',
                //     }

                // ],
                // onRemoveItem: (item: string) => {
                //     return of(true).pipe(delay(1000));
                // },
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            },
        },
        {
            field: {
                key: "chips2",
                label: "Chips 2",
                type: FieldType.CHIPS,
                options: [
                    {
                        "key": "india",
                        "value": "India",
                        "description": "Check to activate the account"
                    },
                    {
                        "key": "australia",
                        "value": "Australia",
                        "description": "Check to activate the account"
                    },
                    {
                        "key": "new",
                        "value": "New Zealand",
                        "description": "Check to activate the account"
                    },
                    {
                        "key": "canada",
                        "value": "Canada",
                        "description": "Check to activate the account"
                    },
                    {
                        "key": "austria",
                        "value": "Austria",
                        "description": "Check to activate the account"
                    }
                ],
                // chips: [
                //     {
                //         value: 'Apple',
                //     },
                //     {
                //         value: 'Orange',
                //     }

                // ],
                // onRemoveItem: (item: string) => {
                //     return of(true).pipe(delay(1000));
                // },
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            },
        },
        {
            field: {
                key: "chips3",
                label: "Chips 3",
                type: FieldType.CHIPS,
                // hideInput: true,
                // chips: [
                //     {
                //         value: 'Apple',
                //         removable: false,
                //         disabled: true
                //     },
                //     {
                //         value: 'Orange', 
                //         removable: false,
                //     }

                // ],
                // onRemoveItem: (item: string) => {
                //     return of(true).pipe(delay(1000));
                // },
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            },
        },
        {
            field: {
                key: "chips4",
                label: "Chips 4",
                type: FieldType.CHIPS,
                options: [
                    {
                        "key": "india",
                        "value": "India",
                        "description": "Check to activate the account"
                    },
                    {
                        "key": "australia",
                        "value": "Australia",
                        "description": "Check to activate the account"
                    },
                    {
                        "key": "new",
                        "value": "New Zealand",
                        "description": "Check to activate the account"
                    },
                    {
                        "key": "canada",
                        "value": "Canada",
                        "description": "Check to activate the account"
                    },
                    {
                        "key": "austria",
                        "value": "Austria",
                        "description": "Check to activate the account"
                    }
                ],
                // chips: [
                //     {
                //         value: 'Apple',
                //         removable: false,
                //         disabled: true
                //     },
                //     {
                //         value: 'Orange',
                //         removable: false,
                //     }
                // ],
                // onRemoveItem: (item: string) => {
                //     return of(true).pipe(delay(1000));
                // },
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            },
        },
        {
            field: {
                key: "multi-image",
                label: "multi-image",
                showCount: true,
                count: 3,
                showAll: true,
                radius: 5,
                type: FieldType.MULTI_IMAGE,
                images: [
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png"
                ],
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            },
        },
        {
            field: {
                key: "multi-image2",
                label: "multi-image",
                count: 2,
                showCount: true,
                radius: 10,
                showAll: false,
                type: FieldType.MULTI_IMAGE,
                images: [
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                ],
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            },
        },
        {
            field: {
                key: "multi-image3",
                label: "multi-image",
                type: FieldType.MULTI_IMAGE,
                showCount: false,
                showAll: true,
                count: 2,
                radius: 15,
                images: [
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png",
                    "/assets/images/avatar.png"
                ],
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            },
        },
        {
            field: {
                key: "multi-image4",
                label: "multi-image",
                type: FieldType.MULTI_IMAGE,
                showCount: false,
                showAll: false,
                radius: 5,
                images: [
                    { url: "/assets/images/avatar.png", name: 'sachin' },
                    { url: "/assets/images/avatar.png", name: 'rahul' },
                    { url: "/assets/images/avatar.png", name: 'abc' },
                    { url: "/assets/images/avatar.png", name: 'demo' },
                    { url: "/assets/images/avatar.png", name: 'rahul' },
                ],
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ],
                help: {
                    icon: 'help',
                    message: 'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title: 'Hello world',
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            },
        },
        {
            field: {
                key: "sentence",
                label: "",
                type: FieldType.PARAGRAPH,
                template: "Hi {title}   {here}  click {name} to go to my profile page",
                fieldContexts: {
                    "title": {
                        key: "dropdownField",
                        label: "",
                        type: FieldType.DROPDOWN,
                        options: [
                            {
                                key: "my",
                                value: "Mr.",
                                description: "Mr."
                            },
                            {
                                key: "mrs",
                                value: "Mrs.",
                                description: "Mrs."
                            },
                        ],
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
                    "name": {
                        key: "title",
                        label: "",
                        type: FieldType.TEXT,
                        placeholder: "enter title",
                        validations: [
                            {
                                type: Validators.required,
                                message: {
                                    key: "required",
                                    message: "Field can't be empty"
                                }
                            }
                        ],
                    }
                },
                buttonContexts: {
                    "here": {
                        identifier: "profile",
                        type: ButtonType.GHOST, 
                        label: "here",
                        color: ButtonColor.PRIMARY,
                        size: ButtonSize.SMALL,
                        icon: "save",
                        onlyIcon: false
                    }
                },
                help: {
                    icon:'help',
                    message:'Tool tip sample working fine testing on multiple fields and it seems to be working fine',
                    title:'Hello world',
                            displayType: HelpDiaplyType.PLAIN_TEXT,
                            orientation: HelpTextOrientation.BOTTOM
                }
            },
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
            {
                identifier: "cancel",
                type: ButtonType.RAISED,
                label: "cancel",
                color: ButtonColor.PRIMARY,
                size: ButtonSize.SMALL,
                icon: "save",
                onlyIcon: false,
                showOnMobile: false,
                showOnTablet: true,
                showOnDesktop: true,
            },
            {
                identifier: "add",
                type: ButtonType.RAISED,
                label: "add",
                color: ButtonColor.PRIMARY,
                size: ButtonSize.SMALL,
                icon: "add",
                onlyIcon: false,
                showOnMobile: true,
                showOnTablet: false,
                showOnDesktop: true,
            },
            {
                identifier: "delete",
                type: ButtonType.RAISED,
                label: "Delete",
                color: ButtonColor.PRIMARY,
                size: ButtonSize.SMALL,
                icon: "delete",
                onlyIcon: false,
                showOnMobile: false,
                showOnTablet: false,
                showOnDesktop: false,
            },
        ]
    },
    displayType: FieldDiaplyType.INLINE,
    displayMode: FormDiaplyMode.ADD,
    // badge?: Badge,
    // help?: FormHelp,
    // template?: Template,
    // privilege?: any
}