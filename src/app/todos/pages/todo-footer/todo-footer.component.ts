import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app/app.reducer';
import { filterTypes, filterTodos } from 'src/app/state/filter/filter.actions';
import { clearCompletedTodos } from 'src/app/state/todos/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
})
export class TodoFooterComponent implements OnInit {
  currentFilter: string = 'All';
  filters: filterTypes[] = ['All', 'Completed', 'Pending'];
  pending: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe(({ filter, todos }) => {
      this.currentFilter = filter;
      this.pending = todos.filter((todo) => !todo.completed).length;
    });
  }

  onFilter(filter: filterTypes): void {
    this.store.dispatch(filterTodos({ filter }));
  }

  onClearCompletedTodos(): void {
    this.store.dispatch(clearCompletedTodos());
  }
}
