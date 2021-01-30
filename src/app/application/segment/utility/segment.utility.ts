import { Segment } from '../model';
import { CollectionUtils, DropdownOption, KeyMap } from 'ngx-material-widget';

export class SegmentUtils {
  static getSegmentOptions(segments: Array<Segment>): Array<DropdownOption>  {
    let options: Array<DropdownOption> = new Array<DropdownOption>();

    if (!CollectionUtils.isEmpty(segments)) {
      segments.forEach(segment => {
        options.push({
          key: segment.id,
          value: segment.name
        })
      })
    }

    return options;
  }
}
