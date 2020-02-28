import {Component, OnInit} from '@angular/core';
import {MealsService} from '../../services/meals.service';
import {Meal} from '../../../core/models/meal.model';
import {tap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css'],
  providers: [MealsService]
})
export class MealComponent implements OnInit {

  meal: Meal;
  id: number;

  constructor(private mealsService: MealsService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    if (this.id) {
      this.mealsService.getMealById(this.id).pipe(
        tap(meal => this.meal = meal)
      ).subscribe();
    }
  }

  createMeal(meal: Meal) {
    this.mealsService.createMealHandler(meal).subscribe();
  }

  updateMeal(meal: Meal) {
    this.mealsService.updateMealById(meal).subscribe();
  }
}
