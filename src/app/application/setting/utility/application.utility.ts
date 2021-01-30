import { CollectionUtils, DropdownOption, KeyMap } from 'ngx-material-widget';
import { Application } from '../model/application.model';

export class ApplicationUtils {
  static getApplicationOptions(applications: Array<Application>): Array<DropdownOption>  {
    let options: Array<DropdownOption> = new Array<DropdownOption>();

    if (!CollectionUtils.isEmpty(applications)) {
      applications.forEach(application => {
        options.push({
          key: application.key,
          value: application.label
        })
      })
    }

    return options;
  }
}
