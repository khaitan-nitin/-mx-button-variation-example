import { CollectionUtils, DropdownOption, KeyMap } from 'ngx-material-widget';
import { AccessCriteria } from '../model';

export class AccessCriteriaUtils {
  static getAccessCriteriaOptions(accessCriterias: Array<AccessCriteria>): Array<DropdownOption>  {
    let options: Array<DropdownOption> = new Array<DropdownOption>();

    if (!CollectionUtils.isEmpty(accessCriterias)) {
      accessCriterias.forEach(accessCriteria => {
        options.push({
          key: accessCriteria.id,
          value: accessCriteria.name
        })
      })
    }

    return options;
  }
}
