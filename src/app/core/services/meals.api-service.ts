import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Meal} from '../models/meal.model';


@Injectable({
  providedIn: 'root'
})
export class MealsApiService {
  constructor(private http: HttpClient) {
  }

  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>('http://localhost:3000/meals');
  }

  deleteMeal(id: string): Observable<{}> {
    return this.http.delete<Meal>(`http://localhost:3000/meals/${id}`);
  }
}
