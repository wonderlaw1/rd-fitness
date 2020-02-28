import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {rangeValidator, rangeValidatorParam} from '../../../core/validators/range.validator';
import {Workout} from '../../../core/models/workout.model';

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.css']
})
export class WorkoutFormComponent implements OnInit {

  id: number;
  existed: boolean;

  @Input() set workout(workout: Workout) {
    if (workout && workout.id) {
      this.id = workout.id;
      this.existed = true;
      this.form.patchValue(workout);
    }
  }

  @Output() add: EventEmitter<Workout> = new EventEmitter();
  @Output() edit: EventEmitter<Workout> = new EventEmitter();

  form = this.fb.group({
    name: ['', Validators.required],
    type: 'strength',
    strength: this.fb.group({
      reps: '',
      sets: ['', rangeValidatorParam(1, 10)],
      weight: ['', rangeValidator]
    }),
    endurance: this.fb.group({
      duration: '',
      distance: ''
    })
  });

  get isEnduranceVisible(): boolean {
    return this.form.get('type').value === 'endurance';
  }

  get isStrengthVisible(): boolean {
    return this.form.get('type').value === 'strength';
  }

  get strength(): FormGroup {
    return this.form.get('strength') as FormGroup;
  }

  get isWeightRangeInvalid(): boolean {
    const weight = this.strength.get('weight');

    return weight.hasError('range') && weight.touched;
  }

  get isSetsRangeInvalid(): boolean {
    const sets = this.strength.get('sets');

    return sets.hasError('range') && sets.touched;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onAdd(): void {
    if (this.form.valid) {
      this.add.emit(this.form.value);
    }
  }

  onEdit(): void {
    if (this.form.valid) {
      this.edit.emit({...this.form.value, id: this.id});
    }
  }
}
