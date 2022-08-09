import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filterTypes, setFilter } from 'src/app/filter/filter.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
})
export class TodoFooterComponent implements OnInit {
  currentFilter = 'Todos';
  filters: filterTypes[] = ['Todos', 'Completados', 'Pendientes'];
  pending: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.currentFilter = state.filter;
      this.pending = state.todos.filter((todo) => !todo.completed).length;
    });
  }

  setFilter(filter: filterTypes): void {
    this.store.dispatch(setFilter({ filter }));
  }
}
