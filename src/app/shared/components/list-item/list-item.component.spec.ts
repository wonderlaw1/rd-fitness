import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import {ListItemComponent} from './list-item.component';
import {JoinPipe} from '../../pipes/join.pipe';
import {By} from '@angular/platform-browser';

const mealMock = {
  id: 2,
  name: 'English Breakfast',
  ingredients: [
    'Toast',
    'Egg',
    'Beans'
  ]
};

fdescribe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListItemComponent, JoinPipe],
      providers: [JoinPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;

    component.item = {...mealMock};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct bindings', inject([JoinPipe], (injectService: JoinPipe) => {
    const name = fixture.debugElement.query(By.css('.item-name'));
    const desc = fixture.debugElement.query(By.css('.item-desc'));

    expect(name.nativeNode.textContent).toBe('English Breakfast');
    expect(desc.nativeNode.textContent).toBe(injectService.transform(mealMock.ingredients));
  }));

  it('should emit value on edit', () => {
    let id;
    const editEl = fixture.debugElement.query(By.css('.fa-edit'));

    component.edit.subscribe(itemId => id = itemId);

    editEl.triggerEventHandler('click', null);

    expect(id).toBe(mealMock.id);
  });

  it('should emit value on delete', () => {
    let id;
    const deleteEl = fixture.debugElement.query(By.css('.fa-trash-alt'));

    component.deleted.subscribe(itemId => id = itemId);

    deleteEl.triggerEventHandler('click', null);

    expect(id).toBe(mealMock.id);
  });
});
