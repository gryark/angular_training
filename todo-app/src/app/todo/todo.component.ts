import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  itemValue: string = '';
  todos: string[] = [];

  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
    this.loadTodos();
  }

  async loadTodos(): Promise<void> {
    try {
      this.todos = await this.todoService.getTodos(); // Assuming getTodos returns a promise
    } catch (error) {
      console.error('Failed to load todos', error);
    }
  }

  async addTodo(): Promise<void> {
    if (!this.itemValue.trim()) {
      return; // Prevent adding empty todos
    }

    try {
      await this.todoService.ekle(this.itemValue); // Assuming addTodo returns a promise
      this.todos.push(this.itemValue);
      this.itemValue = ''; // Clear input after adding
    } catch (error) {
      console.error('Failed to add todo', error);
    }
  }
}
