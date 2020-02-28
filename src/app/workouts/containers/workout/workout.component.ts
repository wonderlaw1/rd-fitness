import { Component, OnInit } from '@angular/core';
import {Workout} from '../../../core/models/workout.model';
import {WorkoutsService} from '../../services/workouts.service';
import {ActivatedRoute} from '@angular/router';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css'],
  providers: [WorkoutsService]
})
export class WorkoutComponent implements OnInit {

  workout: Workout;
  id: number;

  constructor(private workoutsService: WorkoutsService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    if (this.id) {
      this.workoutsService.getWorkoutById(this.id).pipe(
        tap(workout => this.workout = workout)
      ).subscribe();
    }
  }

  createWorkout(workout: Workout) {
    this.workoutsService.createWorkoutHandler(workout).subscribe();
  }

  updateWorkout(workout: Workout) {
    this.workoutsService.updateWorkoutById(workout).subscribe();
  }

}
