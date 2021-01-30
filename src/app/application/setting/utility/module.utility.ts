import { CollectionUtils, DropdownOption, KeyMap } from 'ngx-material-widget';
import { Module } from '../model/application.model';

export class ModuleUtils {
  static getModuleOptions(modules: Array<Module>): Array<DropdownOption>  {
    let options: Array<DropdownOption> = new Array<DropdownOption>();

    if (!CollectionUtils.isEmpty(modules)) {
      modules.forEach(module => {
        options.push({
          key: module.key,
          value: module.label
        })
      })
    }

    return options;
  }
}
