import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { cloneArray, TodoItem } from '../shared';

@Component({
    selector: 'todo-page',
    templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit, OnDestroy {
    public todos: TodoItem[];
    private orig: TodoItem[];

    @ViewChild('description') private descriptionInput: ElementRef;

    constructor(private http: HttpClient, private snackBar: MatSnackBar) {

    }

    public ngOnInit() {
        this.http.get<TodoItem[]>('assets/mock-data/todos.json')
            .subscribe((result) => {
                this.orig = result;
                this.todos = cloneArray(result);
            });
    }

    public ngOnDestroy() {

    }

    // public onAdd(newItemDescription: string) {
    //     const newItem = { description: newItemDescription, checked: false, lastModified: new Date(), id: 0 };
    //     this.descriptionInput.nativeElement.value = '';
    //     this.snackBar.open(`Item with description "${newItemDescription} added`, null, { duration: 1500 });
    //     this.todos.push(newItem);
    //     this.snackBar.open('add item', null, { duration: 1500 });
    //
    // }

    public onAdd(newItem: TodoItem) {
      this.todos.push(newItem);
      this.snackBar.open('add item', null, { duration: 1500 });
    }

    public onReset(): void {
        this.todos = cloneArray(this.orig);
        this.snackBar.open('reset todos (von todo.component)', null, { duration: 1500 });
    }

    // public get itemsOpen(): TodoItem[] {
    //     return this.filterCheckedBy(false);
    // }
    //
    // public get itemsDone(): TodoItem[] {
    //     return this.filterCheckedBy(true);
    // }

    // public onChecked(checked: boolean, item: TodoItem) {
    //     item.checked = checked;
    //     item.lastModified = new Date();
    //     this.snackBar.open('checked / unchecked item', null, { duration: 1500 });
    // }

    // private filterCheckedBy(checked: boolean): TodoItem[] {
    //     if (this.todos) {
    //         return this.todos.filter((item) => item.checked === checked);
    //     }
    //
    //     return undefined;
    // }
}
