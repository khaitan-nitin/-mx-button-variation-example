import { EmailTemplate, SmsTemplate, WhatsAppTemplate, NotificationTemplate, PushTemplate, SmsSenderId, PushChannel, CommunicationTemplate } from '../model';
import { DropdownOption, CollectionUtils, DropdownUtils, MasterDataUtils, StringUtils } from 'ngx-material-widget';

export class CommunicationUtils {
    static instanceOfEmailTemplate(object: any): object is EmailTemplate {
        let isEmail = false;
        (<Map<string, any>>object['message']).forEach((value: any, key: string) => {
            if ('subject' in value) {
                isEmail = true;
            }
        })

        return isEmail;
    }

    static instanceOfSmsOrWhatsAppTemplate(object: any): object is SmsTemplate | WhatsAppTemplate {
        let isSms = true;
        (<Map<string, any>>object['message']).forEach((value: any, key: string) => {
            if ('subject' in value || 'title' in value) {
                isSms = false;
            }
        })

        return isSms;
    }

    static instanceOfNotificationTemplate(object: any): object is NotificationTemplate {
        let isNotification = false;
        (<Map<string, any>>object['message']).forEach((value: any, key: string) => {
            if ('title' in value && !('channelKey' in value)) {
                isNotification = true;
            }
        })

        return isNotification;
    }

    static instanceOfPushTemplate(object: any): object is PushTemplate {
        let isPush = false;
        (<Map<string, any>>object['message']).forEach((value: any, key: string) => {
            if ('title' in value && 'channelKey' in value) {
                isPush = true;
            }
        })

        return isPush;
    }

    static getSmsSenderIdOptions(senderIds: Array<SmsSenderId>): Array<DropdownOption> {
        let options: Array<DropdownOption> = new Array<DropdownOption>();

        if (!CollectionUtils.isEmpty(senderIds)) {
            senderIds.forEach(segment => {
                options.push({
                    key: segment.id,
                    value: segment.key
                })
            })
        }

        return options;
    }

    static getPushChannelIdOptions(channels: Array<PushChannel>): Array<DropdownOption> {
        let options: Array<DropdownOption> = new Array<DropdownOption>();

        if (!CollectionUtils.isEmpty(channels)) {
            channels.forEach(channel => {
                options.push({
                    key: channel.key,
                    value: channel.name
                })
            })
        }

        return options;
    }

    static getTemplateOptions(templates: Array<CommunicationTemplate>, targetType?: string): Array<DropdownOption> {
        let options: Array<DropdownOption> = new Array<DropdownOption>();

        let cmOptions: Array<DropdownOption> = MasterDataUtils.getMasterDataAsOptions("COMMUNICATION_MEDIA");

        if (!CollectionUtils.isEmpty(templates)) {
            templates.forEach(template => {
                let showOption = false;

                let targetValues: Array<string> = new Array<string>();
                if (!CollectionUtils.isEmpty(template.target)) {
                    template.target.forEach(target => {
                        if (StringUtils.isEmpty(targetType)) {
                            showOption = true;
                        } else {
                            if (target == targetType) {
                                showOption = true;
                            }
                        }
                        targetValues.push(DropdownUtils.getValue(target, cmOptions));
                    })
                }

                if (showOption) {
                    options.push({
                        key: template.key,
                        value: template.name + " (" + targetValues + ")"
                    })
                }
            })
        }

        return options;
    }
}