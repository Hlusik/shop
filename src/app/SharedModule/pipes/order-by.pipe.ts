import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: true
})
export class OrderBy implements PipeTransform {

  transform(value: any[], order: boolean = true, propName: string = ''): any[] {

    if (propName) {
      if (order) {
        return value.sort((a: any, b: any) => (a.propName > b.propName) ? 1 : -1);
      } else {
        return value.sort((a: any, b: any) => (b.propName > a.propName) ? 1 : -1);
      }
    }
    return value;

  }

}
