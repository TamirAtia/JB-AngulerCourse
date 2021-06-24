import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private data: DataService) {}

  currentDate = new Date();

  summaries = [
    { name: 'Lists', icon: 'list', counter: this.data.listCounter() },
    {
      name: 'Todo items',
      icon: 'done_all',
      counter: this.data.todoItemsCounter(),
    },
    {
      name: 'Active items',
      icon: 'hourglass_empty',
      counter: this.data.activeItemsCounter(),
    },
  ];

  ngOnInit(): void {}
  createNewList(): void {
    this.router.navigate(['lists', '-1', 'edit']);
  }

  goToLists(): void {
    this.router.navigate(['lists']);
  }

  goToItems(): void {
    this.router.navigate(['items']);
  }
}
