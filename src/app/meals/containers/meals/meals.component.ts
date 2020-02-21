import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {switchMap, tap} from 'rxjs/operators';

import {Meal} from '../../../core/models/meal.model';

import {MealsService} from '../../services/meals.service';


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
    this.mealsService.meals$.pipe(
      tap(meals => this.meals = meals)
    ).subscribe();

    this.mealsService.loading$.pipe(
      tap(isLoading => this.isLoading = isLoading)
    ).subscribe();

    this.mealsService.loadMeals().subscribe();
  }

  async onNavigate(id: string) {
    await this.router.navigate([`meals/${id}`]);
  }

  onDelete(id: string): void {
    this.mealsService.deleteMealById(id).pipe(
      switchMap(() => this.mealsService.loadMeals()),
    ).subscribe();
  }
}
