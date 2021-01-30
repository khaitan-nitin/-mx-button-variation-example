import { Button, ButtonType, ButtonColor, ButtonGroup, HoverButton, BadgeColor, BadgePosition, BadgeSize, ButtonSize } from 'ngx-material-widget';
import { FormDiaplyMode } from 'ngx-material-widget';

export const simpleButtons: Array<Button | ButtonGroup | HoverButton> = [
    {
        identifier: "textAlignGroupLeft",
        type: ButtonType.GROUP,
        label: "",
        color: ButtonColor.ASCENT,
        size: ButtonSize.SMALL,
        icon: "format_align_left",
        onlyIcon: true,
        badge: {
            identifier: "badge1",
            content: "10",
            color: BadgeColor.PRIMARY,
            position: BadgePosition.ABOVE_AFTER,
            size: BadgeSize.MEDIUM,
            hide: false        
        },
        displayInFormModes: [FormDiaplyMode.EDIT],
        groupIdentifier: "textAlignGroup",
        //  confirmationConfiguration?: ConfirmationPopup
    },
    {
        identifier: "textAlignGroupCenter",
        type: ButtonType.GROUP,
        label: "",
        color: ButtonColor.ASCENT,
        size: ButtonSize.SMALL,
        icon: "format_align_center",
        onlyIcon: true,
        //  routerLink: Array < string >,
        displayInFormModes: [FormDiaplyMode.EDIT],
        groupIdentifier: "textAlignGroup",
        //  confirmationConfiguration?: ConfirmationPopup
    },
    {
        identifier: "textAlignGroupRight",
        type: ButtonType.GROUP,
        label: "",
        color: ButtonColor.ASCENT,
        size: ButtonSize.SMALL,
        icon: "format_align_right",
        onlyIcon: true,
        //  routerLink: Array < string >,
        displayInFormModes: [FormDiaplyMode.EDIT],
        groupIdentifier: "textAlignGroup",
        //  confirmationConfiguration?: ConfirmationPopup
    },

    {
        identifier: "save",
        type: ButtonType.RAISED,
        label: "Save Default",
        color: ButtonColor.PRIMARY,
        size: ButtonSize.DEFAULT,
        icon: "save",
        onlyIcon: false,
        badge: {
            identifier: "badge1",
            content: "10",
            color: BadgeColor.WARN,
            position: BadgePosition.ABOVE_AFTER,
            size: BadgeSize.SMALL,
            hide: false        
        },
    },
    {
        identifier: "save",
        type: ButtonType.RAISED,
        label: "Save Small",
        color: ButtonColor.PRIMARY,
        size: ButtonSize.SMALL,
        icon: "save",
        onlyIcon: false,
        badge: {
            identifier: "badge1",
            content: "10",
            color: BadgeColor.WARN,
            position: BadgePosition.ABOVE_AFTER,
            size: BadgeSize.SMALL,
            hide: false        
        },
        confirmationConfiguration: {
            identifier: 'cf1',
            title: 'Confirm Title',
            message: 'Confirm Message ',
            width: '500px',
            buttons: [
                {
                    identifier: 'cfbCancel',
                    type: ButtonType.GHOST,
                    color: ButtonColor.ASCENT,
                    size: ButtonSize.SMALL,
                    label: 'Cancel',
                    icon: "save"
                },
                {
                    identifier: 'cfbUpdate',
                    type: ButtonType.FLAT,
                    color: ButtonColor.ASCENT,
                    size: ButtonSize.SMALL,
                    label: 'Update',
                    icon: "edit"
                }
            ]      
        },
        // routerLink: ["/"],
        //  displayInFormModes?: Array < FormDiaplyMode >,
        //  confirmationConfiguration?: ConfirmationPopup
    },
    {
        identifier: "update",
        type: ButtonType.RAISED,
        label: "Update Tiny",
        color: ButtonColor.ASCENT,
        size: ButtonSize.TINY,
        icon: "update",
        onlyIcon: false,
        badge: {
            identifier: "badge1",
            content: "10",
            color: BadgeColor.PRIMARY,
            position: BadgePosition.ABOVE_AFTER,
            size: BadgeSize.MEDIUM,
            hide: false        
        },
        //  routerLink: Array < string >,
        displayInFormModes: [FormDiaplyMode.EDIT],
        //  confirmationConfiguration?: ConfirmationPopup
        //  privilege?: any,
    },


    {
        identifier: "chipDelivery",
        type: ButtonType.CHIP,
        label: "Delivery",
        color: ButtonColor.ASCENT,
        size: ButtonSize.TINY,
        badge: {
            identifier: "badge1",
            content: "10",
            color: BadgeColor.PRIMARY,
            position: BadgePosition.ABOVE_AFTER,
            size: BadgeSize.MEDIUM,
            hide: false        
        },
        //  routerLink: Array < string >,
        displayInFormModes: [FormDiaplyMode.EDIT],
        groupIdentifier: "chipGroup",
        //  confirmationConfiguration?: ConfirmationPopup
    },
    {
        identifier: "chipPickup",
        type: ButtonType.CHIP,
        label: "Pickup",
        color: ButtonColor.PRIMARY,
        size: ButtonSize.SMALL,
        //  routerLink: Array < string >,
        //  displayInFormModes?: Array < FormDiaplyMode >,
        groupIdentifier: "chipGroup",
        //  confirmationConfiguration?: ConfirmationPopup
    },
    {
        identifier: "chipBoth",
        type: ButtonType.CHIP,
        label: "Both",
        color: ButtonColor.PRIMARY,
        size: ButtonSize.DEFAULT,
        //  routerLink: Array < string >,
        //  displayInFormModes?: Array < FormDiaplyMode >,
        groupIdentifier: "chipGroup",
        //  confirmationConfiguration?: ConfirmationPopup
    },


    {
        identifier: "hoverVoicemail",
        type: ButtonType.DROPDOWN,
        label: "Check voice mail",
        color: ButtonColor.ASCENT,
        size: ButtonSize.SMALL,
        icon: "voicemail",
        onlyIcon: false,
        badge: {
            identifier: "badge1",
            content: "10",
            color: BadgeColor.PRIMARY,
            position: BadgePosition.ABOVE_AFTER,
            size: BadgeSize.MEDIUM,
            hide: false        
        },
        //  routerLink: Array < string >,
        displayInFormModes: [FormDiaplyMode.EDIT],
        groupIdentifier: "ddGroup",
        groupLabel: "Menu",
        groupIcon: "more_vert",
         //  confirmationConfiguration?: ConfirmationPopup
    },
    {
        identifier: "hoverRedial",
        type: ButtonType.DROPDOWN,
        label: "Redial",
        color: ButtonColor.ASCENT,
        size: ButtonSize.SMALL,
        icon: "dialpad",
        onlyIcon: false,
        //  routerLink: Array < string >,
        displayInFormModes: [FormDiaplyMode.EDIT],
        groupIdentifier: "ddGroup",
        groupLabel: "Menu",
        groupIcon: "more_vert",
        //  confirmationConfiguration?: ConfirmationPopup
    }
];