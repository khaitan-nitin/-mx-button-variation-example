import { Navigation, NavigationPannel, SubTextType } from 'ngx-material-widget/lib/navigation/model';

export const navigation: Array<Navigation> = [
  {
    name: "Setting",
    icon: "settings",
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Google_Messages_logo.svg',
    nameAsImage: 'https://i.ibb.co/Qr15Ndx/1277760585.png',
    route: "",
    permission: {
      subject: "Property",
      action: "read"
    },
    subText: {
      text: "10",
      displayType: SubTextType.BADGE
    },
    children: [
      {
        name: "Application",
        icon: "apps",
        route: "/application/setting/application",
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Google_Messages_logo.svg',
        permission: {
          subject: "Setting",
          action: "read"
        }
      },
      {
        name: "Module",
        icon: "view_modules",
        route: "/application/setting/module",
        permission: {
          subject: "Setting",
          action: "read"
        }
      },
      {
        name: "Category",
        icon: "graphic_eq",
        route: "/application/setting/category",
        permission: {
          subject: "SettingCategory",
          action: "read"
        }
      },
      {
        name: "Master Data",
        icon: "storage",
        route: "/application/setting/master-data",
        permission: {
          subject: "MasterData",
          action: "read"
        }
      },
      {
        name: "Properties",
        icon: "perm_data_setting",
        route: "/application/setting/property",
        permission: {
          subject: "Property",
          action: "read"
        }
      }
    ]
  },
  {
    name: "Message",
    icon: "settings",
    route: "",
    permission: {
      subject: "Message",
      action: "read"
    },
    children: [
      {
        name: "Message",
        icon: "waves",
        route: "/application/message/message",
        permission: {
          subject: "Message",
          action: "read"
        }
      },
      {
        name: "Error Code",
        icon: "bug_report",
        route: "/application/message/error-code",
        permission: {
          subject: "Message",
          action: "read"
        }
      }
    ]
  },
  {
    name: "Log",
    icon: "vertical_split",
    route: "",
    children: [
      {
        name: "Api Log",
        icon: "view_array",
        route: "/application/log/api-log",
      },
      {
        name: "Error Log",
        icon: "view_carousel",
        route: "/application/log/error-log",
      },
      {
        name: "App Log",
        icon: "view_column",
        route: "/application/log/app-log",
      },
      {
        name: "Sms Log",
        icon: "textsms",
        route: "/application/communication/sms-log",
      },
      {
        name: "Email Log",
        icon: "email",
        route: "/application/communication/email-log",
      },
      {
        name: "Push Log",
        icon: "short_text",
        route: "/application/communication/push-log",
      },
    ]
  },
  {
    name: "Rule",
    icon: "settings",
    route: "",
    permission: {
      subject: "Rule",
      action: "read"
    },
    children: [
      {
        name: "Rule",
        icon: "domain",
        route: "/application/rule/rule",
        permission: {
          subject: "Rule",
          action: "read"
        }
      },
      {
        name: "Access Criteria",
        icon: "domain",
        route: "/application/marketing/access-criteria",
        permission: {
          subject: "Rule",
          action: "read"
        }
      }
    ]
  },
  {
    name: "Segment",
    icon: "settings",
    route: "",
    permission: {
      subject: "Segment",
      action: "read"
    },
    children: [
      {
        name: "Segment",
        icon: "domain",
        route: "/application/segment/segment",
        permission: {
          subject: "Segment",
          action: "read"
        }
      },
      {
        name: "Contact",
        icon: "deck",
        route: "/application/segment/segment-contact",
        permission: {
          subject: "Segment",
          action: "read"
        }
      }
    ]
  },
    {
    name: "Communication",
    icon: "settings",
    route: "",
    permission: {
      subject: "Communication",
      action: "read"
    },
    children: [
      {
        name: "Template",
        icon: "toc",
        route: "/application/communication/communication-template",
        permission: {
          subject: "Communication",
          action: "read"
        }
      },
      {
        name: "Push Channel",
        icon: "chrome_reader_mode",
        route: "/application/communication/push-channel",
        permission: {
          subject: "Communication",
          action: "read"
        }
      },
      {
        name: "Sms Sender Id",
        icon: "sms_failed",
        route: "/application/communication/sms-sender-id",
        permission: {
          subject: "Communication",
          action: "read"
        }
      },
      {
        name: "Campaign",
        icon: "all_out",
        route: "/application/communication/campaign",
        permission: {
          subject: "Communication",
          action: "read"
        }
      }
    ]
  },
  {
    name: "Marketing",
    icon: "vertical_split",
    route: "",
    children: [
      {
        name: "Collection",
        icon: "view_array",
        route: "/application/marketing/collection",
      },
      {
        name: "Promotion Code Type",
        icon: "view_carousel",
        route: "/application/marketing/promotion-code-type",
      },
      {
        name: "Promotion",
        icon: "view_carousel",
        route: "/application/marketing/promotion-code",
      },
      {
        name: "Gallery",
        icon: "view_column",
        route: "/application/log/app-log",
      }
    ]
  },
  {
    name: "User",
    icon: "vertical_split",
    route: "",
    children: [
      {
        name: "Device",
        icon: "perm_device_information",
        route: "/application/communication/device",
      },
    ]
  },
  {
    name: "Button Example",
    icon: "zoom_out",
    route: "",
    children: [
      {
        name: "Button",
        icon: "layers",
        route: "/application/example/button",
      },
      {
        name: "Form",
        icon: "money",
        route: "/application/example/form",
      },
      {
        name: "List",
        icon: "list",
        route: "/application/example/list",
      },
      {
        name: "Crud",
        icon: "line_style",
        route: "/application/example/crud",
      }
    ]
  },
  {
    name: "Field Example",
    icon: "zoom_out",
    route: "",
    children: [
      {
        name: "Autocomplete",
        icon: "money",
        route: "/application/example/autocomplete-field",
      },
      {
        name: "Calendar",
        icon: "money",
        route: "/application/example/calendar-field",
      },
      {
        name: "Checkbox",
        icon: "money",
        route: "/application/example/checkbox-field",
      },
      {
        name: "Chips",
        icon: "money",
        route: "/application/example/chips-field",
      },
      {
        name: "Dropdown",
        icon: "money",
        route: "/application/example/dropdown-field",
      },
      {
        name: "Html Editor",
        icon: "money",
        route: "/application/example/html-editor-field",
      },
      {
        name: "Label",
        icon: "money",
        route: "/application/example/label-field",
      },
      {
        name: "Multi Image",
        icon: "money",
        route: "/application/example/multi-image-field",
      },
      {
        name: "Paragraph",
        icon: "money",
        route: "/application/example/paragraph-field",
      },
      {
        name: "Radio Button",
        icon: "money",
        route: "/application/example/radio-button-field",
      },
      {
        name: "Textarea",
        icon: "money",
        route: "/application/example/text-area-field",
      },
      {
        name: "Text Box",
        icon: "money",
        route: "/application/example/text-box-field",
      },
      {
        name: "Toggle",
        icon: "money",
        route: "/application/example/toggle-field",
      },
      {
        name: "Upload",
        icon: "money",
        route: "/application/example/upload-field",
      },
      {
        name: "Field Type",
        icon: "money",
        route: "/application/example/field-type",
      }
    ]
  },
];

export const navigationPannel: NavigationPannel = {
  templateKey: '',
  canCollapse: true,
  defaultCollapse: false,
  navigations: navigation,
  footer: {
    logout: true,
    template: {
      css: `.foomenu{display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;} .t1{    margin-left: 15px;}`,
      content: ` 
      <span class="foomenu">
        <mat-icon mat-list-icon>power_settings_new</mat-icon>
        <span class="t1">Logout temp</span>
        </span>
     `
    }
  },
  header: {
    logo: false,
    notification: false,
    profile: false,
  }
};