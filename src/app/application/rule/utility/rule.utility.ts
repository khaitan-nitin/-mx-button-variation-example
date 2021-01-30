import { CollectionUtils, DropdownOption, KeyMap } from 'ngx-material-widget';
import { Rule } from '../model';

export class RuleUtils {
  static getRuleOptions(rules: Array<Rule>): Array<DropdownOption>  {
    let options: Array<DropdownOption> = new Array<DropdownOption>();

    if (!CollectionUtils.isEmpty(rules)) {
      rules.forEach(rule => {
        options.push({
          key: rule.id,
          value: rule.name
        })
      })
    }

    return options;
  }
}
