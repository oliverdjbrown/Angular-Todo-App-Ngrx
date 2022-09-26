import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {

  @Input() id: string = '';
  @Input() class: string = '';
  @Input() placeHolder: string = '';
  @Input() type: 'text' | 'checkbox' = 'text';
  @Input() control!: FormControl;
  
  constructor() { }

  ngOnInit(): void {
  }

}
