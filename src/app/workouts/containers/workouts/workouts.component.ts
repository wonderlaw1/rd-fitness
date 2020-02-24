import {Component, OnInit} from '@angular/core';
import {switchMap, tap} from 'rxjs/operators';

import {Workout} from '../../../core/models/workout.model';
import {WorkoutsService} from '../../services/workouts.service';


@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css'],
  providers: [WorkoutsService]
})
export class WorkoutsComponent implements OnInit {

  workouts: Workout[];

  constructor(private workoutsService: WorkoutsService) {
  }

  ngOnInit(): void {
    this.workoutsService.getWorkouts().pipe(
      tap(data => this.workouts = data)
    ).subscribe();
  }

  handleDelete(id: number) {
    this.workoutsService.deleteWorkout(id).pipe(
      switchMap(() => this.workoutsService.getWorkouts()),
      tap(data => this.workouts = data)
    ).subscribe();
  }

}
