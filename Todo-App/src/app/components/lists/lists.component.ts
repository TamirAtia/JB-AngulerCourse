import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoList } from 'src/app/model/todo-list';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
})
export class ListsComponent implements OnInit {
  lists$!: Promise<TodoList[]>;

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.lists$ = this.data.getAllLists();
  }

  gotoEdit(id: number) {
    this.router.navigate(['lists', id]);
  }
}
