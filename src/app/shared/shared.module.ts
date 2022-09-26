import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './pipes/filter.pipe';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { TodoButtonComponent } from './components/todo-button/todo-button.component';

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
  ],
  exports: [
    ...components,
    ...pipes
  ]
})
export class SharedModule { }
