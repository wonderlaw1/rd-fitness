import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Meal} from '../../core/models/meal.model';
import {MealsApiService} from '../../core/services/meals.api-service';

@Injectable()
export class MealsService {

  constructor(private mealsAPIService: MealsApiService) {
  }

  getMeals(): Observable<Meal[]> {
    return this.mealsAPIService.getMeals();
  }

  deleteMeal(id: number): Observable<{}> {
    return this.mealsAPIService.deleteMeal(id);
  }
}
