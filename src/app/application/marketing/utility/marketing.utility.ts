import { CollectionUtils, DropdownOption } from 'ngx-material-widget';
import { SmsSenderId } from '../../communication/model';

export class MarketingUtils {
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
}