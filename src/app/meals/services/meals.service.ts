import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {switchMap, tap} from 'rxjs/operators';

import {Meal} from '../../core/models/meal.model';
import {MealsApiService} from '../../core/services/meals.api-service';
import {LoaderService} from '../../core/services/loader.service';
import {Router} from '@angular/router';


@Injectable()
export class MealsService {

  private mealsSubject: Subject<Meal[]> = new Subject();
  meals: Observable<Meal[]> = this.mealsSubject.asObservable();

  constructor(private mealsAPIService: MealsApiService,
              private loaderService: LoaderService,
              private router: Router) {
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

  createMealHandler(meal: Meal): Observable<Meal> {
    this.loaderService.show();

    return this.mealsAPIService.createMeal(meal).pipe(
      tap(() => this.router.navigate(['/meals'])),
      tap(() => this.loaderService.hide()),
    );
  }

  updateMealById(meal: Meal): Observable<Meal> {
    this.loaderService.show();

    return this.mealsAPIService.updateMeal(meal).pipe(
      tap(() => this.router.navigate(['/meals'])),
      tap(() => this.loaderService.hide()),
    );
  }

  getMealById(id: number): Observable<Meal> {
    this.loaderService.show();

    return this.mealsAPIService.getMeal(id).pipe(
      tap(() => this.loaderService.hide())
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
