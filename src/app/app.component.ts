import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo App';

  todoValue: string = '';
  list: Todo[] = [];

  // lifecycle methods
  // as soon as it is initialized
  ngOnInit() {
    this.list = [];
    this.todoValue = '';
  }

  addItem() {
    if (this.todoValue !== "") {
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false
      };
      // add newitem to the list
      this.list.push(newItem);
    }
    this.todoValue = "";
  }

  deleteItem(id: number) {
    // filter the list
    this.list = this.list.filter(item => item.id !== id);
  }
}