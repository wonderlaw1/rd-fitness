import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListItemComponent} from './list-item.component';
import {JoinPipe} from '../../pipes/join.pipe';
import {By} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

const mealMock = {
  name: 'Spaghetti',
  ingredients: [
    'Pasta',
    'Tomato',
    'Meat'
  ],
  id: 1
};

fdescribe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListItemComponent, JoinPipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
    component.item = mealMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct bindings', () => {
    const nameEl = fixture.debugElement.query(By.css('.item-name'));
    const descEl = fixture.debugElement.query(By.css('.item-desc'));

    expect(nameEl.nativeElement.textContent).toBe(mealMock.name);
    expect(descEl.nativeElement.textContent).toBe(mealMock.ingredients.join(', '));
  });

  it('should emit on edit click', () => {
    let id;
    const editEl = fixture.debugElement.query(By.css('.fa-edit'));

    component.edit.subscribe(elemId => id = elemId);

    editEl.triggerEventHandler('click', null);
    expect(id).toBe(mealMock.id);
  });

  it('should delete on delete click', () => {
    let id;
    const deleteEl = fixture.debugElement.query(By.css('.fa-trash-alt'));

    component.deleted.subscribe(elemId => id = elemId);

    deleteEl.triggerEventHandler('click', null);
    expect(id).toBe(mealMock.id);
  });
});
