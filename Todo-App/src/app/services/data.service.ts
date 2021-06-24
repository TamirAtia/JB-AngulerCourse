import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoItem } from '../model/todo-item';
import { TodoList } from '../model/todo-list';
import { TODOLIST } from '../model/mock-todolists';
import { TODOITEM } from '../model/mock-todoItem';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  readonly baseUrl: string = 'http//:localhost:4200';
  items: any = {};
  lists: any = {};
  constructor(private http: HttpClient) {}

  getAllItems(): Promise<TodoItem[]> {
    const url = `${this.baseUrl}/items`;

    return new Promise((resolve, reject) => {
      resolve(TODOITEM);
    });
  }

  listCounter() {
    return Object.keys(this.lists).length;
  }

  todoItemsCounter() {
    return Object.keys(this.items).length;
  }

  activeItemsCounter() {
    return 10;
  }

  getAllItemsByListId(listId: number): Promise<TodoItem[]> {
    const url = `${this.baseUrl}/items?listId=${listId}`;

    return new Promise((resolve, reject) => {
      resolve(TODOITEM);
    });
  }

  getAllItemsIdsByListId(listId: number): Promise<TodoItem[]> {
    const url = `${this.baseUrl}/items?listId=${listId}`;

    return new Promise((resolve, reject) => {
      resolve(TODOITEM);
    });
  }

  getActiveItems(): Promise<TodoItem[]> {
    const url = `${this.baseUrl}/items`;

    return new Promise((resolve, reject) => {
      resolve(TODOITEM);
    });
  }

  addList(listToAdd: TodoList): Promise<TodoList> {
    const url = `${this.baseUrl}/lists`;

    let addList = new Promise<TodoList>((resolve) => {
      let id = Object.keys(this.lists).length;
      this.lists[id] = listToAdd.caption;
      let list = {
        id: id,
        caption: listToAdd.caption,
        description: listToAdd.caption,
        color: listToAdd.color,
        imgUrl: listToAdd.imgUrl,
      };
      resolve(list);
    });
    return addList;
  }

  addItemToList(caption: string, idList: number): Promise<TodoItem> {
    const url = `${this.baseUrl}/items`;
    let addItem = new Promise<TodoItem>((resolve) => {
      let id = Object.keys(this.items).length;
      this.items[id] = caption;
      let item = {
        id: id,
        caption: caption,
        isCompleted: false,
        listId: idList,
      };
      resolve(item);
      return item;
    }).then((item) => {
      return new Promise<TodoItem>((resolve) => {
        if (!this.lists[idList]) this.lists[idList] = [];
        this.lists[idList].push(item);
        resolve(item);
      });
    });

    return addItem;
  }

  async getListById(id: number): Promise<TodoList> {
    const url = `${this.baseUrl}/lists/${id}`;
    return new Promise((resolve, reject) => {
      resolve({
        id: 1,
        caption: 'ListA',
        imgUrl: 'work',
        description: 'this is a description',
        color: 'orange',
      });
    });
  }

  async getAllLists(): Promise<TodoList[]> {
    const url = `${this.baseUrl}/lists`;
    return new Promise((resolve, reject) => {
      resolve(TODOLIST);
    });
  }
}
