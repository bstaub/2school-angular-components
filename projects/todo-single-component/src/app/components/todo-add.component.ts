import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {TodoItem} from '../shared';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  @Output()
  public add: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

  @ViewChild('description') private descriptionInput: ElementRef;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  public onAdd(newItemDescription: string) {
    this.add.emit({ description: newItemDescription, checked: false, lastModified: new Date(), id: 0 });
    // const newItem = { description: newItemDescription, checked: false, lastModified: new Date(), id: 0 };
    this.descriptionInput.nativeElement.value = '';
    this.snackBar.open(`Item mit Beschreibung "${newItemDescription} hinzugefügt`, null, { duration: 1500 });
    // this.todos.push(newItem);
    // this.snackBar.open('add item', null, { duration: 1500 });

  }

}
