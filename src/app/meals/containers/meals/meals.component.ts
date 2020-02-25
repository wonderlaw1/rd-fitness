import {Component, OnInit} from '@angular/core';
import {MealsService} from '../../services/meals.service';
import {switchMap, tap} from 'rxjs/operators';
import {Meal} from '../../../core/models/meal.model';
import {JoinPipe} from '../../../shared/pipes/join.pipe';


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
    this.mealsService.loadMeals().subscribe();
    this.mealsService.meals.pipe(
      tap(meals => this.meals = meals)
    ).subscribe();
  }

  handleDelete(id: number) {
    this.mealsService.deleteMealById(id).subscribe();
  }

}
