import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Workout} from '../../../core/models/workout.model';
import {rangeValidator, rangeValidatorParams} from '../../../core/validators/range.validator';
import {Meal} from '../../../core/models/meal.model';


@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkoutFormComponent implements OnInit {

  private id: number;

  @Input() set workout(workout: Workout) {
    if (workout && workout.name) {
      this.id = workout.id;
      this.exists = true;
      this.form.patchValue(workout);
    }
  }

  @Output() create = new EventEmitter<Workout>();
  @Output() update = new EventEmitter<Workout>();

  exists = false;

  form = this.fb.group({
    name: ['', Validators.required],
    type: 'strength',
    strength: this.fb.group({
      reps: 1,
      sets: 2,
      weight: 2
    }),
    endurance: this.fb.group({
      distance: 0,
      duration: 0
    })
  });

  constructor(private fb: FormBuilder) {
  }

  get required() {
    return (
      this.form.get('name').hasError('required') &&
      this.form.get('name').touched
    );
  }

  get placeholder() {
    return `e.g. ${this.form.get('type').value === 'strength' ? 'Benchpress' : 'Treadmill'}`;
  }

  get strength(): FormGroup {
    return this.form.controls.strength as FormGroup;
  }

  get isSetsRangeInvalid(): boolean {
    const sets = this.strength.get('sets');
    return (
      sets.hasError('range') &&
      sets.touched
    );
  }

  get isWeightRangeInvalid(): boolean {
    const sets = this.strength.get('weight');
    return (
      sets.hasError('range') &&
      sets.touched
    );
  }

  ngOnInit() {
  }

  createWorkout() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
  }

  updateWorkout() {
    if (this.form.valid) {
      this.update.emit({...this.form.value, id: this.id});
    }
  }
}
