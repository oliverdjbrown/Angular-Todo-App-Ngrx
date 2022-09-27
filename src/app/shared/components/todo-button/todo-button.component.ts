import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'todo-button',
  templateUrl: './todo-button.component.html',
  styleUrls: ['./todo-button.component.scss']
})
export class TodoButtonComponent implements OnInit {

  @Input() class: string = '';
  @Input() text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
