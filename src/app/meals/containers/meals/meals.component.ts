import {Component, OnInit} from '@angular/core';
import {tap} from 'rxjs/operators';

import {MealsService} from '../../services/meals.service';
import {Meal} from '../../../core/models/meal.model';


@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css'],
  providers: [MealsService]
})
export class MealsComponent implements OnInit {

  meals: Meal[];

  constructor(private mealsService: MealsService) {
  }

  ngOnInit(): void {
    this.mealsService.loadMeals().subscribe();
    this.mealsService.meals.pipe(
      tap(meals => this.meals = meals)
    ).subscribe();
  }

  handleDelete(id: number) {
    this.mealsService.deleteMealById(id).subscribe();
  }

}
