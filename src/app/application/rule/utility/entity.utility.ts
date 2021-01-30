import { CollectionUtils, DropdownOption } from 'ngx-material-widget';
import { Entity } from '../model';

export class EntityUtils {
  static getEntityOptions(entities: Array<Entity>): Array<DropdownOption>  {
    let options: Array<DropdownOption> = new Array<DropdownOption>();

    if (!CollectionUtils.isEmpty(entities)) {
      entities.forEach(entity => {
        options.push({
          key: entity.name,
          value: entity.label ? entity.label : entity.name
        })
      })
    }

    return options;
  }

  static getEntityFieldOptions(entity: Entity): Array<DropdownOption>  {
    let options: Array<DropdownOption> = new Array<DropdownOption>();

    if (!CollectionUtils.isEmpty(entity.fields)) {
      entity.fields.forEach(field => {
        options.push({
          key: field.name,
          value: field.label ? field.label : field.name
        })
      })
    }

    return options;
  }
}
