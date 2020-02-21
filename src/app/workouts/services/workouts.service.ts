import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

import {WorkoutsApiService} from '../../core/services/workouts.api-service';
import {Workout} from '../../core/models/workout.model';


@Injectable()
export class WorkoutsService {

  constructor(private workoutsApiService: WorkoutsApiService) {
  }

  getWorkouts(): Observable<Workout[]> {
    return this.workoutsApiService.getWorkouts();
  }

  deleteWorkout(id: string): Observable<{}> {
    return this.workoutsApiService.deleteWorkout(id);
  }
}
