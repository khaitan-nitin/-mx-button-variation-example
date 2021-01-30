import { DropdownOption, CollectionUtils } from 'ngx-material-widget';
import { PromotionCodeType } from '../model';

export class RecurringUtils {
  static getPromotionCodeTypeOptions(promotionCodeTypes: Array<PromotionCodeType>): Array<DropdownOption> {
    let options: Array<DropdownOption> = new Array<DropdownOption>();

    if (!CollectionUtils.isEmpty(promotionCodeTypes)) {
      promotionCodeTypes.forEach(promotionCodeType => {
        options.push({
          key: promotionCodeType.id,
          value: promotionCodeType.name
        })
      })
    }

    return options;
  }

  static getAvailableOnDaysOptions(frequency: string): Array<DropdownOption> {
    let availableOnDaysOptions: Array<DropdownOption> = new Array<DropdownOption>();

    if (frequency == "WEEKLY") {
      availableOnDaysOptions.push({
        key: "1",
        value: "Sunday"
      });
      availableOnDaysOptions.push({
        key: "2",
        value: "Monday"
      });
      availableOnDaysOptions.push({
        key: "3",
        value: "Tuesday"
      });
      availableOnDaysOptions.push({
        key: "4",
        value: "Wednesday"
      });
      availableOnDaysOptions.push({
        key: "5",
        value: "Thursday"
      });
      availableOnDaysOptions.push({
        key: "6",
        value: "Friday"
      });
      availableOnDaysOptions.push({
        key: "7",
        value: "Saturday"
      });
    } else if (frequency == "BIWEEKLY") {
      availableOnDaysOptions.push({
        key: "1",
        value: "Sunday (1st Week)"
      });
      availableOnDaysOptions.push({
        key: "2",
        value: "Monday (1st Week)"
      });
      availableOnDaysOptions.push({
        key: "3",
        value: "Tuesday (1st Week)"
      });
      availableOnDaysOptions.push({
        key: "4",
        value: "Wednesday (1st Week)"
      });
      availableOnDaysOptions.push({
        key: "5",
        value: "Thursday (1st Week)"
      });
      availableOnDaysOptions.push({
        key: "6",
        value: "Friday (1st Week)"
      });
      availableOnDaysOptions.push({
        key: "7",
        value: "Saturday (1st Week)"
      });
      availableOnDaysOptions.push({
        key: "8",
        value: "Sunday (2nd Week)"
      });
      availableOnDaysOptions.push({
        key: "9",
        value: "Monday (2nd Week)"
      });
      availableOnDaysOptions.push({
        key: "10",
        value: "Tuesday (2nd Week)"
      });
      availableOnDaysOptions.push({
        key: "11",
        value: "Wednesday (2nd Week)"
      });
      availableOnDaysOptions.push({
        key: "12",
        value: "Thursday (2nd Week)"
      });
      availableOnDaysOptions.push({
        key: "13",
        value: "Friday (2nd Week)"
      });
      availableOnDaysOptions.push({
        key: "14",
        value: "Saturday (2nd Week)"
      });
    }

    return availableOnDaysOptions;
  }


  static getAvailableOnDaysMonthlyOptions(frequencyFor: string): Array<DropdownOption> {
    let availableOnDaysOptions: Array<DropdownOption> = new Array<DropdownOption>();

    if (frequencyFor == "FIRST_FEW" || frequencyFor == "LAST_FEW") {
      for (let day = 1; day < 15; day++) {
        availableOnDaysOptions.push({
          key: day,
          value: "Day " + day
        });
      }
    } else if (frequencyFor == "SPECIFIC") {
        for (let day = 1; day < 31; day++) {
          availableOnDaysOptions.push({
            key: day,
            value: "Day " + day
          });
        }
      }

    return availableOnDaysOptions;
  }
}