import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {switchMap, tap} from 'rxjs/operators';

import {Meal} from '../../core/models/meal.model';
import {MealsApiService} from '../../core/services/meals.api-service';
import {LoaderService} from '../../core/services/loader.service';


@Injectable()
export class MealsService {

  private mealsSubject: Subject<Meal[]> = new Subject();
  meals: Observable<Meal[]> = this.mealsSubject.asObservable();

  constructor(private mealsAPIService: MealsApiService,
              private loaderService: LoaderService) {
  }

  loadMeals() {
    this.loaderService.show();
    return this.getMeals().pipe(
      tap(this.onMealsReceive),
    );
  }

  deleteMealById(id: number): Observable<{}> {
    this.loaderService.show();
    return this.deleteMeal(id).pipe(
      switchMap(() => this.getMeals()),
      tap(this.onMealsReceive)
    );
  }

  private getMeals(): Observable<Meal[]> {
    return this.mealsAPIService.getMeals();
  }

  private deleteMeal(id: number): Observable<{}> {
    return this.mealsAPIService.deleteMeal(id);
  }

  private onMealsReceive = (meals: Meal[]) => {
    this.mealsSubject.next(meals);
    this.loaderService.hide();
  }
}
