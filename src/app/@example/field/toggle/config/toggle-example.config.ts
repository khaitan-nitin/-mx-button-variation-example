import { Validators } from '@angular/forms';
import { ButtonColor, ButtonSize, ButtonType, FieldType, Form, FormDiaplyMode, FieldDiaplyType, HelpDiaplyType, HelpTextOrientation, DisplayMode } from 'ngx-material-widget';

export const toggleExample: Form = {
    identifier: "toggleExampleForm",
    header: {
        title: "Toggle Attributes",
    },
    displayInColumns: 2,
    formFields: [
        {
            field: {
                key: "basicToggle",
                label: "Basic",
                type: FieldType.TOGGLE_OPTION
            }
        },
        {
            field: {
                key: "toggleWithoutLabel",
                label: "",
                type: FieldType.TOGGLE_OPTION,
            }
        },
        {
            field: {
                key: "toggleReadOnly",
                label: "Readonly",
                type: FieldType.TOGGLE_OPTION,
                isReadOnly: true
            }
        },
        {
            field: {
                key: "toggle2ColumnSpan",
                label: "2 Column Span",
                type: FieldType.TOGGLE_OPTION,
            },
            displayInColumns: 2
        },
        {
            field: {
                key: "toggleDisabled",
                label: "Disabled Toggle",
                type: FieldType.TOGGLE_OPTION,
                displayMode: DisplayMode.DISABLED
            },
            separator: {
                beforeField: false,
                label: "Display Modes"
            }
        },
        {
            field: {
                key: "toggleAsLabel",
                label: "As Label",
                type: FieldType.TOGGLE_OPTION,
                displayMode: DisplayMode.LABEL
            }
        },
        {
            field: {
                key: "toggleMainField",
                label: "Main Field",
                type: FieldType.TOGGLE_OPTION
            },
            separator: {
                beforeField: false,
                label: "Dependent Field"
            }
        },
        {
            field: {
                key: "toggleChildField",
                label: "Child Field",
                type: FieldType.TOGGLE_OPTION,
                dependentOnFields: [
                    {
                        key: "toggleMainField", 
                        condition: true,
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