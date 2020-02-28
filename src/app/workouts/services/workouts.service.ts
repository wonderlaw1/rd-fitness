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

  addWorkout(workout: Workout): Observable<Workout> {
    this.loaderService.show();
    return this.workoutsAPIService.addWorkout(workout).pipe(
      tap(() => this.loaderService.hide()),
      tap(() => this.router.navigate(['/workouts']))
    );
  }

  editWorkout(workout: Workout): Observable<Workout> {
    this.loaderService.show();
    return this.workoutsAPIService.editWorkout(workout).pipe(
      tap(() => this.loaderService.hide()),
      tap(() => this.router.navigate(['/workouts']))
    );
  }

  getWorkout(id: number): Observable<Workout> {
    this.loaderService.show();
    return this.workoutsAPIService.getWorkout(id).pipe(
      tap(() => this.loaderService.hide())
    );
  }

  navigateById(id: number): void {
    this.router.navigate([`/workouts/${id}`]);
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
