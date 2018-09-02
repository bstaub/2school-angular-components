import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {cloneArray, TodoItem} from '../shared';

@Component({
  selector: 'todo-view',
  templateUrl: './todo-view.component.html',
  styles: []
})
export class TodoViewComponent implements OnInit {
  @Input()
  public items: TodoItem[];

  @Output()
  public reset = new EventEmitter<void>(); // direkt an parent weiterleiten, weil Emmiter keine Daten schickt <void> -> direct im template emit aufrufen  -> (reset)="reset.emit()"

  constructor() { }

  ngOnInit() {
  }

  public get itemsOpen(): TodoItem[] {   // itemsOpen ist im Template eingebunden, dieses holt via filterCheckedBy(false) aus this.items (kommt von parent!) alle offenen Fälle
    return this.filterCheckedBy(false);
  }

  public get itemsDone(): TodoItem[] {   // itemsOpen ist im Template eingebunden, dieses holt via filterCheckedBy(false) aus this.items (kommt von parent!) alle offenen Fälle
    return this.filterCheckedBy(true);
  }

  private filterCheckedBy(checked: boolean): TodoItem[] {
    if (this.items) {
      return this.items.filter((item) => item.checked === checked);
    }

    return undefined;
  }


}
