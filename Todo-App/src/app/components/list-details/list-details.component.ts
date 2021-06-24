import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, observable, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { TodoItem } from 'src/app/model/todo-item';
import { TodoList } from 'src/app/model/todo-list';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css'],
})
export class ListDetailsComponent implements OnInit {
  form!: FormGroup;
  currentId!: number;
  currentList$!: Observable<TodoList>;
  listItems$!: BehaviorSubject<TodoItem[]>;
  listId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  value: string = '';
  captionItem: string = '';
  alertDelete: boolean = false;

  item: TodoItem = {
    id: 1,
    caption: 'Tomatoes',
    listId: 1,
    isCompleted: false,
  };
  ngOnInit(): void {
    this.listId = +(this.route.snapshot.paramMap.get('id') ?? -1);
    console.log(`the list id is ${this.listId}`);
    let index$ = this.route.params.pipe(map((parms) => Number(parms['index'])));

    this.currentList$ = index$.pipe(
      switchMap((index) => this.data.getListById(index))
    );

    this.listItems$ = new BehaviorSubject([this.item]);
    this.buildForm();
  }

  buildForm() {
    this.form = new FormGroup({
      captionItem: new FormControl('', []),
    });
  }

  createNewList(): void {
    this.router.navigate(['lists', 'id', 'edit']);
  }

  async deleteList(list: TodoList) {
    this.alertDelete = false;
  }

  DeleteListAlert(): void {
    this.alertDelete = !this.alertDelete;
  }

  gotoEdit() {
    this.router.navigate(['lists', this.listId, 'edit']);
  }

  //we get the Caption name from the form value
  //then we use tje data service to add it, we clear to text, get the list form our observable
  // push the new item and do next to implement the new item
  async addToList() {
    let rawItem = this.form.value.captionItem;
    let item: TodoItem = await this.data.addItemToList(rawItem, this.listId);
    this.form.setValue({ captionItem: '' });
    let items = this.listItems$.value;
    items.push(item);
    this.listItems$.next(items);
  }
}
