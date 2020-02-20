import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Workout} from '../models/workout.model';


@Injectable({
  providedIn: 'root'
})
export class WorkoutsApiService {
  constructor(private http: HttpClient) {
  }

  getWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>('http://localhost:3000/workouts');
  }
}
