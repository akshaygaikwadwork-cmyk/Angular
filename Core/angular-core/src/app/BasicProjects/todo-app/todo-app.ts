import { Component, signal } from '@angular/core';

interface TodoItem {
  name: string;
  isCompleted: boolean;
}
@Component({
  selector: 'app-todo-app',
  imports: [],
  templateUrl: './todo-app.html',
  styleUrl: './todo-app.scss',
})
export class TodoApp {
  todoListRecords = signal<TodoItem[]>([]);

  addItemIntoToDoList(value: string) {
    const name = value.trim();

    if (!name) {
      return;
    }

    this.todoListRecords.update((items) => [...items, { name, isCompleted: false }]);
  }

  toggleTodo(index: number) {
    (this,
      this.todoListRecords.update((items) =>
        items.map((item, i) => (i === index ? { ...item, isCompleted: !item.isCompleted } : item)),
      ));
  }

  deleteFromToDoList(index: number) {
    this.todoListRecords.update((items) => items.filter((_, i) => i !== index));
  }
}
