import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Workout} from '../../../core/models/workout.model';
import {WorkoutsService} from '../../services/workouts.service';
import {ActivatedRoute} from '@angular/router';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css'],
  providers: [WorkoutsService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkoutComponent implements OnInit {

  workout$: Observable<Workout>;
  id: number;

  constructor(private workoutsService: WorkoutsService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    if (this.id) {
      this.workout$ = this.workoutsService.getWorkoutById(this.id);
    }
  }

  createWorkout(workout: Workout) {
    this.workoutsService.createWorkoutHandler(workout).subscribe();
  }

  updateWorkout(workout: Workout) {
    this.workoutsService.updateWorkoutById(workout).subscribe();
  }

}
