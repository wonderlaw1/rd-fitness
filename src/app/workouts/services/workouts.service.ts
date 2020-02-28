import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {switchMap, tap} from 'rxjs/operators';

import {Workout} from '../../core/models/workout.model';
import {WorkoutsApiService} from '../../core/services/workouts.api-service';
import {LoaderService} from '../../core/services/loader.service';
import {Router} from '@angular/router';


@Injectable()
export class WorkoutsService {

  private workoutsSubject: Subject<Workout[]> = new Subject();
  workouts: Observable<Workout[]> = this.workoutsSubject.asObservable();

  constructor(private workoutsAPIService: WorkoutsApiService,
              private loaderService: LoaderService,
              private router: Router) {
  }

  loadWorkouts() {
    this.loaderService.show();
    return this.getWorkouts().pipe(
      tap(this.onWorkoutsReceive),
    );
  }

  deleteWorkoutById(id: number): Observable<{}> {
    this.loaderService.show();
    return this.workoutsAPIService.deleteWorkout(id).pipe(
      switchMap(() => this.getWorkouts()),
      tap(this.onWorkoutsReceive)
    );
  }

  createWorkoutHandler(workout: Workout): Observable<Workout> {
    this.loaderService.show();
    return this.workoutsAPIService.createWorkout(workout).pipe(
      tap(() => this.loaderService.show()),
      tap(() => this.router.navigate(['/workouts']))
    );
  }

  updateWorkoutById(workout: Workout): Observable<Workout> {
    this.loaderService.show();
    return this.workoutsAPIService.updateWorkout(workout).pipe(
      tap(() => this.router.navigate(['/workouts'])),
      tap(() => this.loaderService.hide()),
    );
  }

  getWorkoutById(id: number): Observable<Workout> {
    this.loaderService.show();
    return this.workoutsAPIService.getWorkout(id).pipe(
      tap(() => this.loaderService.hide())
    );
  }

  private getWorkouts(): Observable<Workout[]> {
    return this.workoutsAPIService.getWorkouts();
  }

  private onWorkoutsReceive = (workouts: Workout[]) => {
    this.workoutsSubject.next(workouts);
    this.loaderService.hide();
  }
}
