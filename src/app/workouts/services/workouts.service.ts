import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {switchMap, tap} from 'rxjs/operators';

import {Workout} from '../../core/models/workout.model';
import {WorkoutsApiService} from '../../core/services/workouts.api-service';
import {LoaderService} from '../../core/services/loader.service';


@Injectable()
export class WorkoutsService {

  private workoutsSubject: Subject<Workout[]> = new Subject();
  workouts: Observable<Workout[]> = this.workoutsSubject.asObservable();

  constructor(private workoutsAPIService: WorkoutsApiService,
              private loaderService: LoaderService) {
  }

  loadWorkouts() {
    this.loaderService.show();
    return this.getWorkouts().pipe(
      tap(this.omWorkoutsReceive),
    );
  }

  deleteWorkoutById(id: number): Observable<{}> {
    this.loaderService.show();
    return this.deleteWorkout(id).pipe(
      switchMap(() => this.getWorkouts()),
      tap(this.omWorkoutsReceive)
    );
  }

  private getWorkouts(): Observable<Workout[]> {
    return this.workoutsAPIService.getWorkouts();
  }

  private deleteWorkout(id: number): Observable<{}> {
    return this.workoutsAPIService.deleteWorkout(id);
  }

  private omWorkoutsReceive = (workouts: Workout[]) => {
    this.workoutsSubject.next(workouts);
    this.loaderService.hide();
  }
}
