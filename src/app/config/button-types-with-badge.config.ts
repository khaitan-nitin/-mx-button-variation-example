import { Button, ButtonType, ButtonColor, ButtonGroup, HoverButton, BadgeColor, BadgePosition, BadgeSize, ButtonSize } from 'ngx-material-widget/lib/button/model';
import { FormDiaplyMode } from 'ngx-material-widget/lib/form/model';

export const buttonTypesWithBadge: Array<Button | ButtonGroup | HoverButton> = [
    {
        identifier: "flatButton",
        type: ButtonType.FLAT,
        label: "Flat",
        color: ButtonColor.DEFAULT,
        size: ButtonSize.DEFAULT,
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
        badge: {
            identifier: "flatBadge",
            content: "1",
            color: BadgeColor.WARN,
            position: BadgePosition.ABOVE_AFTER,
            size: BadgeSize.MEDIUM,
            hide: false
        },
    },
    {
        identifier: "ghostButton",
        type: ButtonType.GHOST,
        label: "Ghost",
        color: ButtonColor.WARN,
        size: ButtonSize.DEFAULT,
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
        badge: {
            identifier: "ghostBadge",
            content: "2",
            color: BadgeColor.ASCENT,
            position: BadgePosition.ABOVE,
            size: BadgeSize.MEDIUM,
            hide: false
        },
    },
    {
        identifier: "strokedButton",
        type: ButtonType.STROKED,
        label: "Stroked",
        color: ButtonColor.PRIMARY,
        size: ButtonSize.DEFAULT,
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
        badge: {
            identifier: "strokedBadge",
            content: "3",
            color: BadgeColor.WARN,
            position: BadgePosition.BELOW_BEFORE,
            size: BadgeSize.MEDIUM,
            hide: false
        },
    },
    {
        identifier: "raisedButton",
        type: ButtonType.RAISED,
        label: "Raised",
        color: ButtonColor.ASCENT,
        size: ButtonSize.DEFAULT,
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
        badge: {
            identifier: "raisedBadge",
            content: "4",
            color: BadgeColor.PRIMARY,
            position: BadgePosition.AFTER,
            size: BadgeSize.MEDIUM,
            hide: false
        },
    },
    {
        identifier: "fabButton",
        type: ButtonType.FAB,
        label: "Fab",
        color: ButtonColor.WARN,
        size: ButtonSize.DEFAULT,
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
        badge: {
            identifier: "fabBadge",
            content: "5",
            color: BadgeColor.ASCENT,
            position: BadgePosition.BELOW,
            size: BadgeSize.MEDIUM,
            hide: false
        },
    },
    {
        identifier: "maleChipButton",
        type: ButtonType.CHIP,
        label: "Male",
        color: ButtonColor.PRIMARY,
        size: ButtonSize.DEFAULT,
        groupIdentifier: "genderChipGroup",
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ]
    },
    {
        identifier: "femaleChipButton",
        type: ButtonType.CHIP,
        label: "Female",
        color: ButtonColor.PRIMARY,
        size: ButtonSize.DEFAULT,
        groupIdentifier: "genderChipGroup",
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
        badge: {
            identifier: "chipBadge",
            content: "8",
            color: BadgeColor.ASCENT,
            position: BadgePosition.BELOW_BEFORE,
            size: BadgeSize.MEDIUM,
            hide: false
        },
    },
    {
        identifier: "trueDdButton",
        type: ButtonType.DROPDOWN,
        label: "Active",
        color: ButtonColor.PRIMARY,
        size: ButtonSize.DEFAULT,
        groupIdentifier: "activeDdGroup",
        groupLabel: "",
        groupIcon: "more_horiz",
        onlyIcon: true,
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
        badge: {
            identifier: "ddBadge",
            content: "10",
            color: BadgeColor.WARN,
            position: BadgePosition.BEFORE,
            size: BadgeSize.MEDIUM,
            hide: false
        },
    },
    {
        identifier: "falseDdButton",
        type: ButtonType.DROPDOWN,
        label: "In active",
        color: ButtonColor.PRIMARY,
        size: ButtonSize.DEFAULT,
        groupIdentifier: "activeDdGroup",
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
    },
];