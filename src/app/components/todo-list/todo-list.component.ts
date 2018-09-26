import { Component, OnInit } from "@angular/core";
import { Task } from "../../models/Task";
import { TodoDataServiceService } from "../../services/todo-data-service.service";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private todoService: TodoDataServiceService) {}

  ngOnInit() {
    this.todoService.getAllTasks().subscribe( data => {
      this.tasks = data; 
    });
    



    // for (let i = 0; i < 10; i++) {
    //   this.tasks.push(
    //     new Task(
    //       "Remember this",
    //       "Remember Remember the fifth of November",
    //       null,
    //       false,
    //       false
    //     )
    //   );
    // }
  }
}
