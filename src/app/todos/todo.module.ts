import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { ReactiveFormsModule } from '@angular/forms';

import { TodoAddComponent } from './pages/todo-add/todo-add.component';
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
  ],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  exports: [TodoPageComponent],
})
export class TodoModule {}
