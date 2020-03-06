import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutFormComponent } from './workout-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';

fdescribe('WorkoutFormComponent', () => {
  let component: WorkoutFormComponent;
  let fixture: ComponentFixture<WorkoutFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutFormComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('submit button should be disabled', () => {
    const add = fixture.debugElement.query(By.css('button.add'));
    const edit = fixture.debugElement.query(By.css('button.edit'));
    expect(add.properties.disabled).toBeTruthy();
    expect(edit).toBeFalsy();
  });
});
