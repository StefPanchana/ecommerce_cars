import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ASpace'
})
export class ASpacePipe implements PipeTransform {

  transform(value: string, buscar: string): any {
    const valueReplace = " ";
    return value.replaceAll(buscar, valueReplace);
  }

}
