import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, Validators} from '@angular/forms';
import {Meal} from '../../../core/models/meal.model';


@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MealFormComponent implements OnInit {

  private id: number;

  @Input() set meal(meal: Meal) {
    if (meal && meal.name) {
      this.id = meal.id;
      this.exists = true;
      this.ingredients.clear();

      this.form.patchValue(meal);

      if (meal.ingredients) {
        for (const item of meal.ingredients) {
          this.ingredients.push(new FormControl(item, [Validators.required]));
        }
      }
    }
  }
  @Output() create = new EventEmitter<Meal>();
  @Output() update = new EventEmitter<Meal>();

  exists = false;

  form = this.fb.group({
    name: ['', Validators.required],
    ingredients: this.fb.array([new FormControl('', [Validators.required])])
  });

  constructor(private fb: FormBuilder) { }

  get ingredients() {
    return this.form.get('ingredients') as FormArray;
  }

  get required() {
    return (
      this.form.get('name').hasError('required') &&
      this.form.get('name').touched
    );
  }

  ngOnInit() {
  }

  createMeal() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
  }

  updateMeal() {
    if (this.form.valid) {
      this.update.emit({...this.form.value, id: this.id});
    }
  }

  addIngredient() {
    this.ingredients.push(new FormControl(''));
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }
}
