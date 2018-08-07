import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sortNumber'
})
export class SortNumberPipe implements PipeTransform {

  transform(arrayNumber: number[], asc?: any): any {
    arrayNumber.sort((a, b) => {     // => sap xep tang dan
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });
    if (!asc) {   //  => tham so asc == 1 => tang dang | nguoc lai
      arrayNumber.reverse();
    }
    return [...arrayNumber]; // Sao chep va tra ve cac gia tri da sao chep
  }

}
