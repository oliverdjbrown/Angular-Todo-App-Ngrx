import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('inputField') inputField!: ElementRef;
  text = new FormControl('', Validators.required);
  checked = new FormControl(false);
  editing: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.text.setValue(this.todo.text);
    this.checked.setValue(this.todo.completed);

    this.checked.valueChanges.subscribe(() => {
      this.store.dispatch(actions.toggleTodo({ id: this.todo.id }));
    });
  }

  editTodo(): void {
    this.editing = true;
    this.text.setValue(this.todo.text);
    setTimeout(() => {
      this.inputField.nativeElement.select();
    }, 10);
  }

  endEditTodo(): void {
    this.editing = false;
    if (this.text.invalid) return;
    if (this.text.value === this.todo.text) return;
    this.store.dispatch(
      actions.editTodo({ id: this.todo.id, text: String(this.text.value) })
    );
  }

  deleteTodo(): void {
    this.store.dispatch(actions.deleteTodo({ id: this.todo.id }));
  }
}
