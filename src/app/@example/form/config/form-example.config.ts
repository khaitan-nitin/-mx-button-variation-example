import { Form, FormDiaplyMode, FormTitleIconPosition, } from 'ngx-material-widget/lib/form/model';
import { FieldType, FieldDiaplyType, HelpDiaplyType, HelpTextOrientation, DisplayMode, FieldAppearance, UploadFileType } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { Validators } from '@angular/forms';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export const basicForm: Form = {
    identifier: "formIdentifier1",
    header: {
        title: "Form Title",
        subtitle: "Form Sub Title",
        icon: {
            font: "home",
            position: FormTitleIconPosition.BEFORE_TITLE
        },
        actions: [
            {
                key: "fieldIdentifier20",
                type: FieldType.TOGGLE_OPTION,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: false,
                fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                color: ButtonColor.PRIMARY,
                checked: true
            },
            {
                identifier: "save",
                type: ButtonType.RAISED,
                label: "Add",
                color: ButtonColor.PRIMARY,
                size: ButtonSize.SMALL,
                icon: "add",
                onlyIcon: false
            }
        ]
    },
    description: {
        text: "Form Description",
        bgColor: "#ffd74038",
        icon: 'keyboard',
    },
    displayInColumns: 2,  
    // displayType: FieldDiaplyType.HORIZONTAL,
    formFields: [
        { 
            field: {
                key: "firstNames",
                label: "First Name", 
                type: FieldType.TEXT,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: true,
//                fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                placeholder: "place holder 1",
                maxLength: 10,
                hasClear: true,
                help: {
                    icon: "live_help",  
                    title: "Help Me Title!",
                    message: "Help Me Message!",
                    displayType: HelpDiaplyType.RIGHT_MODAL,
                    // orientation: HelpTextOrientation.BELOW
                },
                value: "1",
                ellipsis: 100,
                navigate: {
                    icon: "call_made",
                    text: "Route To",
                    routeTo: ["/help"]
                },
                //template: Template,
                //dependentOnFields: Array<DependentOnField>,
                validations: [
                    {
                        type: Validators.required,
                        message: {
                            key: "required",
                            message: "Field can't be empty"
                        }
                    }
                ]
                //displayMode: DisplayMode
            },
            //            link: Button,
            addMore: true,
        },
        // {
        //     field: {
        //         key: "fieldIdentifier2",
        //         label: "Hidden Field ",
        //         type: FieldType.HIDDEN,
        //         isReadOnly: false,
        //         isUnique: false,
        //         fieldDisplayType: FieldDiaplyType.HORIZONTAL,
        //         placeholder: "place holder 2",
        //         help: {
        //             helpicon: "live_help",
        //             title: "Help Me Title 2!",
        //             message: "Help Me Message 2!",
        //             displayType: HelpDiaplyType.PLAIN_TEXT,
        //             orientation: HelpTextOrientation.BELOW
        //         },
        //         value: "2",
        //         ellipsis: 100,
        //         //template: Template,

        //         //dependentOnFields: Array<DependentOnField>,
        //         //validations: Array<Validation>,

        //         //displayMode: DisplayMode            
        //     },
        //     //            link: Button,
        //     //            addMore: boolean,
        //     separator: {
        //         label: "Sub Heading 2"
        //     }
        // },
        {
            field: {
                key: "fieldIdentifier3",
                label: "TextArea",
                type: FieldType.TEXTAREA,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: false,
                // fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                maxLength: 100,
                placeholder: "place holder 2",
                help: {
                    icon: "live_help",
                    title: "Help Me Title 3!",
                    message: "Help Me Message 3!",
                    displayType: HelpDiaplyType.TOOLTIP,
                    orientation: HelpTextOrientation.BOTTOM
                },
            },
            separator: {
                label: "Sub Heading 3",
                beforeField: true
            }
        },
        {
            field: {
                key: "fieldIdentifier4",
                label: "Color",
                type: FieldType.COLOR,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: false,
                // fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                placeholder: "place holder 2",
                help: {
                    icon: "live_help",
                    title: "Help Me Title 3!",
                    message: "Help Me Message 3!",
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                },
            },
        },
        {
            field: {
                key: "fieldIdentifier5",
                label: "Email",
                type: FieldType.EMAIL,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: false,
                // fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                maxLength: 10,
                placeholder: "place holder 2",
                // help: {
                //     helpicon: "live_help",
                //     title: "Help Me Title 3!",
                //     message: "Help Me Message 3!",
                //     displayType: HelpDiaplyType.PLAIN_TEXT,
                //     orientation: HelpTextOrientation.BOTTOM
                // },
            },
        },
        {
            field: {
                key: "fieldIdentifier6",
                label: "Month",
                type: FieldType.MONTH,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: false,
                // fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                placeholder: "place holder 2",
                help: {
                    icon: "live_help",
                    title: "Help Me Title 3!",
                    message: "Help Me Message 3!",
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                },
            },
        },
        {
            field: {
                key: "fieldIdentifier7",
                label: "Number",
                type: FieldType.NUMBER,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: false,
                // fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                min: 2,
                max: 5,
                placeholder: "place holder 2",
                help: {
                    icon: "live_help",
                    title: "Help Me Title 3!",
                    message: "Help Me Message 3!",
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                }
            },
        },
        {
            field: {
                key: "fieldIdentifier8",
                label: "Password",
                type: FieldType.PASSWORD,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: false,
                // fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                maxLength: 5,
                placeholder: "place holder 2",
            },
            separator: {
                label: "Sub Heading 4",
                beforeField: false
            }
        },
        {
            field: {
                key: "fieldIdentifier11",
                label: "Time",
                type: FieldType.TIME,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: false,
                // fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                placeholder: "place holder 2",
            },
        },
        {
            field: {
                key: "fieldIdentifier13",
                label: "Week",
                type: FieldType.WEEK,
                isReadOnly: false,
                isUnique: false,
                // fieldDisplayType: FieldDiaplyType.HORIZONTAL,
            },
        },
        {
            field: {
                key: "fieldIdentifier18",
                label: "Calendar",
                type: FieldType.CALENDAR,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: false,
                // fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                placeholder: "place holder 2",
                help: {
                    icon: "live_help",
                    title: "Help Me Title 3!",
                    message: "Help Me Message 3!",
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                },
            }
        },        
        {
            field: {
                key: "fieldIdentifier19",
                label: "Slider",
                type: FieldType.SLIDER,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: false,
                // fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                placeholder: "place holder 2",
                help: {
                    icon: "live_help",
                    title: "Help Me Title 3!",
                    message: "Help Me Message 3!",
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                },
                color: ButtonColor.PRIMARY,
                invert: true,
                min: 1,
                max: 100,
                step: 10, 
                thumbLabel: true,
                tickInterval: 'auto',
                vertical: false
                //template: Template,

                //dependentOnFields: Array<DependentOnField>,
                //validations: Array<Validation>,

                //displayMode: DisplayMode            
            },
            //            link: Button,
            //            addMore: boolean,
        },
        {
            field: {
                key: "fieldIdentifier20",
                label: "Toggle Option",
                description: "Option Description 2",
                type: FieldType.TOGGLE_OPTION,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: false,
                // fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                color: ButtonColor.PRIMARY,
                checked: true
            },
        },
        {
            field: {
                key: "fieldIdentifier16",
                label: "Checkbox",
                type: FieldType.CHECKBOX,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: false,
                // fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                options: [
                    {
                        key: "opt1",
                        value: "option 1",
                        description: "Option Description Done",
                        disabled: true
                    },
                    {
                        key: "opt2",
                        value: "option 2",
                        description: "Option Description 2",
                    },
                ]
            },
        },
        {
            field: {
                key: "fieldIdentifier17",
                label: "RadioBox",
                type: FieldType.RADIO,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: false,
                // fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                placeholder: "place holder 2",
                help: {
                    icon: "live_help",
                    title: "Help Me Title 3!",
                    message: "Help Me Message 3!",
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                },
                value: "3",
                ellipsis: 100,
                options: [
                    {
                        key: "opt1",
                        value: "option 1",
                        description: "Option Description 2",
                    },
                    {
                        key: "opt2",
                        value: "option 2",
                        description: "Option Description 2",
                        disabled: true
                    },
                ]
                //routeTo: FieldNavigate,
                //template: Template,

                //dependentOnFields: Array<DependentOnField>,
                //validations: Array<Validation>,

                //displayMode: DisplayMode            
            },
            //            link: Button,
            //            addMore: boolean,
        },
        {
            field: {
                key: "fieldIdentifier15",
                label: "Select",
                type: FieldType.DROPDOWN,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: false,
                // fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                multiple: false,
                options: [
                    {
                        key: "opt1",
                        value: "option 1"
                    },
                    {
                        key: "opt2",
                        value: "option 2"
                    },
                ]
            },
        },
        {
            field: {
                key: "fieldIdentifier21",
                label: "File Uploader",
                type: FieldType.UPLOAD,
                appearance: FieldAppearance.STANDARD,
                isReadOnly: false,
                isUnique: false,
                // fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                uploadButtonText: "Upload",
                multiple: true,
                fileType : UploadFileType.IMAGE,    
                onUploadClick: (files) => {
                    return of([{
                        name:'Sample 1',
                        url:'/assets/images/avatar.png',
                        data: null
                    },
                    {
                        name:'Sample 2',
                        url:'/assets/images/avatar.png',
                        data: null
                    },
                    {
                        name:'Sample 3',
                        url:'/assets/images/avatar.png',
                        data: null
                    }]).pipe(delay(5000))
                },
            },
        },
        {
            field: {
                key: "fieldIdentifier14",
                label: "Autocomplete",
                type: FieldType.AUTOCOMPLETE,
                isReadOnly: false,
                isUnique: false,
                // fieldDisplayType: FieldDiaplyType.HORIZONTAL,
                placeholder: "place holder 2",
                help: {
                    icon: "live_help",
                    title: "Help Me Title 3!",
                    message: "Help Me Message 3!",
                    displayType: HelpDiaplyType.PLAIN_TEXT,
                    orientation: HelpTextOrientation.BOTTOM
                },
                options: [
                    {
                        key: "opt1",
                        value: "option 1"
                    },
                    {
                        key: "opt2",
                        value: "option 2",
                        disabled: true
                    },
                ]
            },
        },        
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
                onlyIcon: false
            }
        ]
    },
    help: {
        icon: "help",
        message: "help message"
    },
    displayType: FieldDiaplyType.HORIZONTAL,
    displayMode: FormDiaplyMode.ADD,
    // badge?: Badge,
    // help?: FormHelp,
    // template?: Template,
    // privilege?: any
}