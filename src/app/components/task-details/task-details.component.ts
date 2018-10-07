import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/Task';

@Component({
  selector: 'task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

    @Input() imageCount:number;  
    @Input() task:Task;

    constructor() { }

    ngOnInit() {
        
    }

}
