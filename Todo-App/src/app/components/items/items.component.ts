import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/model/todo-item';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  items$!: Promise<TodoItem[]>;
  checked = false;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.items$ = this.data.getAllItems();
  }
}
