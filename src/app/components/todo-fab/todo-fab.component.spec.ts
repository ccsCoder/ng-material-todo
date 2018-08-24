import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFabComponent } from './todo-fab.component';

describe('TodoFabComponent', () => {
  let component: TodoFabComponent;
  let fixture: ComponentFixture<TodoFabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoFabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
