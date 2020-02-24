import {Component, OnInit} from '@angular/core';
import {MealsService} from '../../services/meals.service';
import {switchMap, tap} from 'rxjs/operators';
import {Meal} from '../../../core/models/meal.model';


@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css'],
  providers: [MealsService]
})
export class MealsComponent implements OnInit {

  meals: Meal[];

  constructor(private mealsService: MealsService) { }

  ngOnInit(): void {
    this.mealsService.getMeals().pipe(
      tap(data => this.meals = data)
    ).subscribe();
  }

  handleDelete(id: number) {
    this.mealsService.deleteMeal(id).pipe(
      switchMap(() => this.mealsService.getMeals()),
      tap(data => this.meals = data)
    ).subscribe();
  }

}
