import { Pipe, PipeTransform } from '@angular/core';

// add spaces to array of string
@Pipe({
  name: 'addSpace'
})
export class AddSpacePipe implements PipeTransform {

  transform(value: string[]): string {
    return (value.toString()).replace(/,/g, ', ');
  }

}
