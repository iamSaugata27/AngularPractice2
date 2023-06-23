import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertor'
})
export class ConvertorPipe implements PipeTransform {

  transform(value: any, targetUnits: string): any {
    if (!value)
      return '';
    switch (targetUnits) {
      case 'km':
        return value / 1000;
      case 'cm':
        return value * 100;
      case 'mm':
        return value * 1000;
      default:
        throw new Error('Target unit not supported!');
    }
  }

}
