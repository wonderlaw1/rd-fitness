import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Meal} from '../models/meal.model';


const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class MealsApiService {

  constructor(private httpClient: HttpClient) { }

  getMeal(id: number): Observable<Meal> {
    return this.httpClient.get<Meal>(`${BASE_URL}/meals/${id}`);
  }

  getMeals(): Observable<Meal[]> {
    return this.httpClient.get<Meal[]>(`${BASE_URL}/meals`);
  }

  deleteMeal(id: number) {
    return this.httpClient.delete<Meal[]>(`${BASE_URL}/meals/${id}`);
  }

  createMeal(meal: Meal): Observable<Meal> {
    return this.httpClient.post<Meal>(`${BASE_URL}/meals/`, meal);
  }

  updateMeal(meal: Meal) {
    return this.httpClient.put<Meal>(`${BASE_URL}/meals/${meal.id}`, meal);
  }
}
