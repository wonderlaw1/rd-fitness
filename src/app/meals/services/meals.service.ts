import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

import {MealsApiService} from '../../core/services/meals.api-service';
import {Meal} from '../../core/models/meal.model';


@Injectable()
export class MealsService {

  constructor(private mealsApiService: MealsApiService) {
  }

  getMeals(): Observable<Meal[]> {
    return this.mealsApiService.getMeals();
  }

  deleteMeal(id: string): Observable<{}> {
    return this.mealsApiService.deleteMeal(id);
  }
}
