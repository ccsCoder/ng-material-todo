import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import { Task } from '../models/Task';
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/map' ;

@Injectable()
export class TodoDataServiceService {
  
  private api: string = 'https://serene-meadow-60299.herokuapp.com/todoapi/v1/';
  
  constructor(private http: Http) {}

  public getAllTasks(): Observable<Task[]> {
    return this.http.get(this.api+'tasks').map( res => {
      return res.json().map( item => {
        return new Task(item.title, item.description);
      })
    })
  }
}
