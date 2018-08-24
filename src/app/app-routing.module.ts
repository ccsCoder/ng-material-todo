import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { NewTaskComponent } from "./components/new-task/new-task.component";

const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'new', component: NewTaskComponent }
]


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
