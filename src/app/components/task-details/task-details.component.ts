import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/Task';

@Component({
  selector: 'task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

    @Input() imageCount:number;  

    task:Task = new Task('Remember this', 'Remember Remember the fifth of November', null, false, false);

    constructor() { }

    ngOnInit() {
        
    }

}
