import { Button, ButtonType, ButtonColor, ButtonGroup, HoverButton, ButtonSize, IconPosition } from 'ngx-material-widget';
import { FormDiaplyMode } from 'ngx-material-widget';

export const buttonTypesWithIconBottom: Array<Button | ButtonGroup | HoverButton> = [
    {
        identifier: "flatButton",
        type: ButtonType.FLAT,
        label: "Flat",
        icon: "addchart",
        iconPosition: IconPosition.BOTTOM,
        color: ButtonColor.DEFAULT,
        size: ButtonSize.DEFAULT,
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
    },
    {
        identifier: "ghostButton",
        type: ButtonType.GHOST,
        label: "Ghost",
        icon: "highlight_alt",
        iconPosition: IconPosition.BOTTOM,
        color: ButtonColor.WARN,
        size: ButtonSize.DEFAULT,
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
    },
    {
        identifier: "strokedButton",
        type: ButtonType.STROKED,
        label: "Stroked",
        icon: "grading",
        iconPosition: IconPosition.BOTTOM,
        color: ButtonColor.PRIMARY,
        size: ButtonSize.DEFAULT,
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
    },
    {
        identifier: "raisedButton",
        type: ButtonType.RAISED,
        label: "Raised",
        icon: "lock_open",
        iconPosition: IconPosition.BOTTOM,
        color: ButtonColor.ASCENT,
        size: ButtonSize.DEFAULT,
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
    },
    {
        identifier: "leftGroupButton",
        type: ButtonType.GROUP,
        label: "Left",
        icon: "format_align_left",
        iconPosition: IconPosition.BOTTOM,
        color: ButtonColor.PRIMARY,
        size: ButtonSize.DEFAULT,
        onlyIcon: false,
        groupIdentifier: "alignGroupGroup",
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
    },
    {
        identifier: "centerGroupButton",
        type: ButtonType.GROUP,
        label: "Center",
        icon: "format_align_center",
        iconPosition: IconPosition.BOTTOM,
        color: ButtonColor.PRIMARY,
        size: ButtonSize.DEFAULT,
        onlyIcon: false,
        groupIdentifier: "alignGroupGroup",
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
    },
    {
        identifier: "rightGroupButton",
        type: ButtonType.GROUP,
        label: "Right",
        icon: "format_align_right",
        iconPosition: IconPosition.BOTTOM,
        color: ButtonColor.PRIMARY,
        size: ButtonSize.DEFAULT,
        onlyIcon: false,
        groupIdentifier: "alignGroupGroup",
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
    },
    {
        identifier: "maleChipButton",
        type: ButtonType.CHIP,
        label: "Male",
        icon: "escalator_warning",
        iconPosition: IconPosition.BOTTOM,
        color: ButtonColor.PRIMARY,
        size: ButtonSize.DEFAULT,
        groupIdentifier: "genderChipGroup",
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
    },
    {
        identifier: "femaleChipButton",
        type: ButtonType.CHIP,
        label: "Female",
        icon: "family_restroom",
        iconPosition: IconPosition.BOTTOM,
        color: ButtonColor.PRIMARY,
        size: ButtonSize.DEFAULT,
        groupIdentifier: "genderChipGroup",
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
    },
    {
        identifier: "trueDdButton",
        type: ButtonType.DROPDOWN,
        label: "Active",
        icon: "check",
        iconPosition: IconPosition.BOTTOM,
        color: ButtonColor.PRIMARY,
        size: ButtonSize.DEFAULT,
        groupIdentifier: "activeDdGroup",
        groupLabel: "More",
        groupIcon: "more_vert",
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
    },
    {
        identifier: "falseDdButton",
        type: ButtonType.DROPDOWN,
        label: "In active",
        icon: "cancel",
        iconPosition: IconPosition.BOTTOM,
        color: ButtonColor.PRIMARY,
        size: ButtonSize.DEFAULT,
        groupIdentifier: "activeDdGroup",
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
    },
];