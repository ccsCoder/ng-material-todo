import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoSearchComponent } from './components/todo-search/todo-search.component';
import { AppRoutingModule } from './/app-routing.module';
import { TodoFabComponent } from './components/todo-fab/todo-fab.component';
import { HttpModule } from "@angular/http/";

import { TodoDataServiceService } from "./services/todo-data-service.service";
import { TodoHeaderComponent } from './components/todo-header/todo-header.component';



@NgModule({
  declarations: [
    AppComponent,
    TaskDetailsComponent,
    NewTaskComponent,
    TodoListComponent,
    TodoSearchComponent,
    TodoFabComponent,
    TodoHeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    TodoDataServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
