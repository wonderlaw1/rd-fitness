import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Workout} from '../models/workout.model';
import {Meal} from '../models/meal.model';


@Injectable({
  providedIn: 'root'
})
export class WorkoutsApiService {
  constructor(private http: HttpClient) {
  }

  getWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>('http://localhost:3000/workouts');
  }

  deleteWorkout(id: string): Observable<{}> {
    return this.http.delete<Meal>(`http://localhost:3000/workouts/${id}`);
  }
}
