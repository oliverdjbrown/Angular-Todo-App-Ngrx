import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../../state/todos/todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  todo = new FormControl('',Validators.required);
  
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  addTodo(): void {
    if(this.todo.invalid) return; 
    this.store.dispatch(actions.createTodo({text: this.todo.value!}));
    this.clearTodoField();
  }

  clearTodoField(): void {
    this.todo.reset();
  }

}
