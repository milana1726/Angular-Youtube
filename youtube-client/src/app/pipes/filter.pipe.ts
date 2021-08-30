import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from './../models/search-item.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  public transform(items: ISearchItem[], search = ''): ISearchItem[] {
    if (!search.trim()) {
      return items;
    }
    return items.filter((item) => {
      return item.snippet.title.toLowerCase().includes(search.toLowerCase());
    });
  }
}
