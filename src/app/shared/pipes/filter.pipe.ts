import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../../todos/models/todo.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(array: Todo[], filter: string): Todo[] {
    switch (filter) {
      case 'Completed':
        return array.filter((todo) => todo.completed);
      case 'Pending':
        return array.filter((todo) => !todo.completed);
      default:
        return array;
    }
  }
}
