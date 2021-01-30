import { Button, ButtonType, ButtonColor, ButtonGroup, HoverButton, BadgeColor, BadgePosition, BadgeSize, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';

export const buttonTypesSmallSize: Array<Button | ButtonGroup | HoverButton> = [
    {
        identifier: "flatButton",
        type: ButtonType.FLAT,
        label: "Flat",
        icon: "addchart",
        color: ButtonColor.DEFAULT,
        size: ButtonSize.SMALL,
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
    },
    {
        identifier: "ghostButton",
        type: ButtonType.GHOST,
        label: "Ghost",
        icon: "highlight_alt",
        color: ButtonColor.WARN,
        size: ButtonSize.SMALL,
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
    },
    {
        identifier: "strokedButton",
        type: ButtonType.STROKED,
        label: "Stroked",
        icon: "grading",
        color: ButtonColor.PRIMARY,
        size: ButtonSize.SMALL,
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
    },
    {
        identifier: "raisedButton",
        type: ButtonType.RAISED,
        label: "Raised",
        icon: "lock_open",
        color: ButtonColor.ASCENT,
        size: ButtonSize.SMALL,
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
    },
    {
        identifier: "leftGroupButton",
        type: ButtonType.GROUP,
        label: "Left",
        icon: "format_align_left",
        color: ButtonColor.PRIMARY,
        size: ButtonSize.SMALL,
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
        color: ButtonColor.PRIMARY,
        size: ButtonSize.SMALL,
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
        color: ButtonColor.PRIMARY,
        size: ButtonSize.SMALL,
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
        color: ButtonColor.PRIMARY,
        size: ButtonSize.SMALL,
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
        color: ButtonColor.PRIMARY,
        size: ButtonSize.SMALL,
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
        color: ButtonColor.PRIMARY,
        size: ButtonSize.SMALL,
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
        color: ButtonColor.PRIMARY,
        size: ButtonSize.SMALL,
        groupIdentifier: "activeDdGroup",
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
    },
];