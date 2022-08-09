import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app/app.reducer';
import * as actions from '../../../state/todos/todo.actions';


@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {

  completed: boolean = false;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  toggleAll(): void {
    this.completed = !this.completed;
    this.store.dispatch(actions.toggleAllTodos({completed: this.completed}));
  }

}
