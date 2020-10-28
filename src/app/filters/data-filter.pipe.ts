import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {

  transform(value, criteria) {
    const parsedCriteria = JSON.parse(criteria);
    return JSON.parse(value).filter(obj => {
      return obj.launch_year === parsedCriteria.launch_year;
    });
  }

}
