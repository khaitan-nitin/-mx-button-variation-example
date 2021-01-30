import { Button, ButtonType, ButtonColor, ButtonGroup, HoverButton, ButtonSize } from 'ngx-material-widget';
import { FormDiaplyMode } from 'ngx-material-widget';

export const buttonGroupFullWidth: Array<Button | ButtonGroup | HoverButton> = [
    {
        identifier: "leftGroupButton",
        type: ButtonType.GROUP,
        label: "Left",
        icon: "format_align_left",
        color: ButtonColor.PRIMARY,
        size: ButtonSize.DEFAULT,
        onlyIcon: false,
        groupIdentifier: "alignGroupGroup",
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
        fullWidth: true
    },
    {
        identifier: "centerGroupButton",
        type: ButtonType.GROUP,
        label: "Center",
        icon: "format_align_center",
        color: ButtonColor.PRIMARY,
        size: ButtonSize.DEFAULT,
        onlyIcon: false,
        groupIdentifier: "alignGroupGroup",
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
        fullWidth: true
    },
    {
        identifier: "rightGroupButton",
        type: ButtonType.GROUP,
        label: "Right",
        icon: "format_align_right",
        color: ButtonColor.PRIMARY,
        size: ButtonSize.DEFAULT,
        onlyIcon: false,
        groupIdentifier: "alignGroupGroup",
        displayInFormModes: [
            FormDiaplyMode.EDIT
        ],
        fullWidth: true
    },
];