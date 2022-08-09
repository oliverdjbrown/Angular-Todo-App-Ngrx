import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoAddComponent } from './pages/todo-add/todo-add.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FilterTodoPipe } from './pipes/filter-todo.pipe';
import { TodoFooterComponent } from './pages/todo-footer/todo-footer.component';
import { TodoItemComponent } from './pages/todo-item/todo-item.component';
import { TodoListComponent } from './pages/todo-list/todo-list.component';
import { TodoPageComponent } from './pages/todo-page/todo-page.component';

@NgModule({
  declarations: [
    TodoAddComponent,
    TodoFooterComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoPageComponent,
    FilterTodoPipe,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TodoPageComponent],
})
export class TodoModule {}
