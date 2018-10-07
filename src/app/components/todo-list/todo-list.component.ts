import { Component, OnInit } from "@angular/core";
import { Task } from "../../models/Task";
import { TodoDataServiceService } from "../../services/todo-data-service.service";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  private _tasks: Task[];

  constructor(private todoService: TodoDataServiceService) {}

  ngOnInit() {
    console.log('inside ngOnInit()');
    
    this.todoService.getAllTasks().subscribe( data => {
      this._tasks = data;
    });

  }

  
  public get tasks() : Task[] {
    return this._tasks
  }
  
}
