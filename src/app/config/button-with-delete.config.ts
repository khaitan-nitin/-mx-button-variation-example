import { Button, ButtonType, ButtonColor, ButtonGroup, HoverButton, ButtonSize } from 'ngx-material-widget';

export const buttonWithDelete: Array<Button | ButtonGroup | HoverButton> = [
    {
        identifier: "deleteButton",
        type: ButtonType.RAISED,
        label: "Delete (with confirmation)",
        color: ButtonColor.WARN,
        size: ButtonSize.DEFAULT,
        icon: "delete",
        onlyIcon: false,
        confirmationConfiguration: {
            identifier: 'deleteButtonConfirmation',
            title: 'Delete Record',
            message: 'Please confirm if we can delete the record?',
            width: '500px',
            buttons: [
                {
                    identifier: 'dbcCancel',
                    type: ButtonType.GHOST,
                    color: ButtonColor.ASCENT,
                    size: ButtonSize.SMALL,
                    label: 'Cancel',
                    icon: "subdirectory_arrow_left"
                },
                {
                    identifier: 'dbcUpdate',
                    type: ButtonType.FLAT,
                    color: ButtonColor.WARN,
                    size: ButtonSize.SMALL,
                    label: 'Delete',
                    icon: "delete"
                }
            ]      
        },
        // routerLink: ["/"],
        //  displayInFormModes?: Array < FormDiaplyMode >,
        //  confirmationConfiguration?: ConfirmationPopup
    },
];