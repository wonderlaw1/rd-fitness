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

  deleteWorkoutById(id: number): void {
    this.loaderService.show();
    this.workoutsAPIService.deleteWorkout(id).pipe(
      switchMap(() => this.getWorkouts()),
      tap(this.onWorkoutsReceive)
    ).subscribe();
  }

  createWorkoutHandler(workout: Workout): void {
    this.loaderService.show();
    this.workoutsAPIService.createWorkout(workout).pipe(
      tap(() => this.loaderService.show()),
      tap(() => this.router.navigate(['/workouts']))
    ).subscribe();
  }

  updateWorkoutById(workout: Workout): void {
    this.loaderService.show();
    this.workoutsAPIService.updateWorkout(workout).pipe(
      tap(() => this.router.navigate(['/workouts'])),
      tap(() => this.loaderService.hide()),
    ).subscribe();
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
