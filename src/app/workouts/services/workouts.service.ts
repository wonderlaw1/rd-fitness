import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Workout} from '../../core/models/workout.model';
import {WorkoutsApiService} from '../../core/services/workouts.api-service';


@Injectable()
export class WorkoutsService {

  constructor(private workoutsAPIService: WorkoutsApiService) {
  }

  getWorkouts(): Observable<Workout[]> {
    return this.workoutsAPIService.getWorkouts();
  }

  deleteWorkout(id: number): Observable<{}> {
    return this.workoutsAPIService.deleteWorkout(id);
  }
}
