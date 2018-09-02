import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItem} from '../shared';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {

  @Input()
  public items: TodoItem;
  @Input()
  public hasReset: boolean;
  @Input()
  public title: string;
  @Output()
  public reset = new EventEmitter<void>();

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onChecked(checked: boolean, item: TodoItem) {  // den checked Event kommt von der child componente item! item von der vie *ngFor
    item.checked = checked;
    item.lastModified = new Date();
    this.snackBar.open('checked / unchecked item (steht in todo-list)', null, { duration: 1500 });
  }

}
