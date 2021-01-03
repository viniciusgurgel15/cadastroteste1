import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any, args?: any): string {
    if (value === null || value === undefined || value === '') {
      return null;
    }

    return moment(value).format('DD/MM/YYYY');
  }

}
