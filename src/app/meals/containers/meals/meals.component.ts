import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

import {Meal} from '../../../core/models/meal.model';

import {MealsService} from '../../services/meals.service';
import {switchMap, tap} from 'rxjs/operators';


@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css'],
  providers: [MealsService]
})
export class MealsComponent implements OnInit {

  isLoading: boolean;
  meals: Meal[];

  constructor(private mealsService: MealsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.loadMeals().subscribe();
  }

  async onNavigate(id: string) {
    await this.router.navigate([`meals/${id}`]);
  }

  onDelete(id: string): void {
    this.isLoading = true;

    this.mealsService.deleteMeal(id).pipe(
      switchMap(() => this.loadMeals()),
    ).subscribe();
  }

  private loadMeals = (): Observable<Meal[]> => {
    return this.mealsService.getMeals().pipe(
      tap(meals => this.meals = meals),
      tap(() => this.isLoading = false)
    );
  }
}
