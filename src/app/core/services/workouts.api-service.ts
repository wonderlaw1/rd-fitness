import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Workout} from '../models/workout.model';


const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsApiService {

  constructor(private httpClient: HttpClient) { }

  getWorkouts(): Observable<Workout[]> {
    return this.httpClient.get<Workout[]>(`${BASE_URL}/workouts`);
  }

  deleteWorkout(id: number): Observable<{}> {
    return this.httpClient.delete<Workout[]>(`${BASE_URL}/workouts/${id}`);
  }
}
