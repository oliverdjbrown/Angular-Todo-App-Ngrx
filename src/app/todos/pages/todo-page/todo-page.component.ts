import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app/app.reducer';
import * as actions from '../../../state/todos/todo.actions';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../shared/services/todo.service';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent implements OnInit {
  todos: Todo[] = [];
  completed: boolean = false;
  constructor(
    private store: Store<AppState>,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos().subscribe((todos: Todo[]) => (todos = todos));
  }

  onToggleAll(): void {
    this.completed = !this.completed;
    this.store.dispatch(actions.toggleAllTodos({ completed: this.completed }));
  }
}
