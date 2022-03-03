import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../movie';

// for the category. i prefer a pipe because it dosent run on change
@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(items: Movie[], filter: string): Movie[] {
    return items.filter(a => a.genres.includes(filter));
  }

}
