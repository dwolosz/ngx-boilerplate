import { Pipe, PipeTransform } from '@angular/core';

// simple search by keyword pipe
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(categories: any, searchText: any): any {
    console.log(categories);
    if(searchText == null) return categories;

    return categories.filter(function(category){
      return category.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }
}
