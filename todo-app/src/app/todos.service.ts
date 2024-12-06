import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todoList: string[] = [];
  constructor() { }

  ekle(item: string) {
    this.todoList.push(item);
    console.log(item);
  }
  getTodos(){
    return this.todoList;
  }
}
