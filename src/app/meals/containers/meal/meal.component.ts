import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

import {MealsService} from '../../services/meals.service';
import {Meal} from '../../../core/models/meal.model';


@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css'],
  providers: [MealsService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MealComponent {

  meal$: Observable<Meal>;
  id: number;

  constructor(private mealsService: MealsService,
              private activatedRoute: ActivatedRoute) {

    this.id = this.activatedRoute.snapshot.params.id;
    if (this.id) {
      this.meal$ = this.mealsService.getMealById(this.id);
    }
  }

  createMeal(meal: Meal) {
    this.mealsService.createMealHandler(meal);
  }

  updateMeal(meal: Meal) {
    this.mealsService.updateMealById(meal);
  }
}
