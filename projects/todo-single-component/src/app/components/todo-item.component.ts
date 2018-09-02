import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input()
  item;

  @Output()
  public checked: EventEmitter<boolean> = new EventEmitter<boolean>();  // gebe an parent list Komponente (checked) einen boolean true or false mit!


  constructor() { }

  ngOnInit() {
  }

  onChecked(value: boolean) {
    this.checked.emit(value);
  }
}
