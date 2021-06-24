import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { wordsLenValidator } from 'src/app/core-module/validators/validators';
import { DataService } from 'src/app/services/data.service';

import { TodoList } from '../../model/todo-list';

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css'],
})
export class ListEditComponent implements OnInit {
  form!: FormGroup;
  id: number = -1;
  lists$!: BehaviorSubject<TodoList[]>;

  listToEdit: TodoList = {
    id: 0,
    caption: '',
    description: '',
    color: '',
    imgUrl: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private activateRoute: ActivatedRoute,
    private data: DataService
  ) {}

  ngOnInit(): void {
    this.id = +(this.activateRoute.snapshot.paramMap.get('id') ?? -1);
    this.lists$ = new BehaviorSubject([this.listToEdit]);
    this.buildForm();
  }

  buildForm() {
    this.form = this.formBuilder.group({
      id: [this.listToEdit.id++],
      Caption: [
        this.listToEdit.caption,
        [Validators.required, Validators.minLength(30), wordsLenValidator(10)],
      ],
      Description: [this.listToEdit.description, [Validators.required]],
      Icon: [this.listToEdit.imgUrl, [Validators.required]],
      Color: [this.listToEdit.color, [Validators.required]],
    });
  }

  iconsName: string[] = ['work', 'shopping'];
  colors: string[] = [
    'pink',
    'blue',
    'green',
    'grey',
    'red',
    'yellow',
    'orange',
  ];

  async onSubmit() {
    this.listToEdit = this.form.value;
    let list: TodoList = await this.data.addList(this.listToEdit);
    let lists = this.lists$.value;
    lists.push(list);
    this.lists$.next(lists);
    console.log(this.form.value);
  }
}
