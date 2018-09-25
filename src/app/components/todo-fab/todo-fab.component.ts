import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-fab',
  templateUrl: './todo-fab.component.html',
  styleUrls: ['./todo-fab.component.css']
})
export class TodoFabComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let options = {
      hoverEnabled: false
    }

    window['M'].FloatingActionButton.init(document.querySelectorAll('.fixed-action-btn'), options);
    
    window['M'].Tooltip.init(document.querySelectorAll(".tooltipped"), options);
  }

}
