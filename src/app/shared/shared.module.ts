import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { TodoButtonComponent } from './components/todo-button/todo-button.component';
import { ReactiveFormsModule } from '@angular/forms';

const components = [
  TodoInputComponent, 
  TodoButtonComponent
];

const pipes = [FilterPipe];


@NgModule({
  declarations: [
    ...components,
    ...pipes
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ...components,
    ...pipes
  ]
})
export class SharedModule { }
