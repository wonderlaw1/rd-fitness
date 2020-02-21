import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';

import {MealsApiService} from '../../core/services/meals.api-service';
import {Meal} from '../../core/models/meal.model';


@Injectable()
export class MealsService {

  private mealsSubject = new Subject<Meal[]>();
  private loadingSubject = new Subject<boolean>();

  meals$: Observable<Meal[]> = this.mealsSubject.asObservable();
  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor(private mealsApiService: MealsApiService) {
  }

  loadMeals = (): Observable<Meal[]> => {
    this.loadingSubject.next(true);

    return this.getMeals().pipe(
      tap(meals => this.mealsSubject.next(meals)),
      tap(() => this.loadingSubject.next(false))
    );
  }

  deleteMealById(id: string): Observable<{}> {
    this.loadingSubject.next(true);

    return this.deleteMeal(id).pipe(
      tap(() => this.loadingSubject.next(false))
    );
  }

  private getMeals(): Observable<Meal[]> {
    return this.mealsApiService.getMeals();
  }

  private deleteMeal(id: string): Observable<{}> {
    return this.mealsApiService.deleteMeal(id);
  }
}
