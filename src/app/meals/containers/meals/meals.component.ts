import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

import {MealsService} from '../../services/meals.service';
import {Meal} from '../../../core/models/meal.model';


@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css'],
  providers: [MealsService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MealsComponent {

  meals$: Observable<Meal[]> = this.mealsService.meals;

  constructor(private mealsService: MealsService,
              private router: Router) {

    this.mealsService.loadMeals();
  }

  handleDelete(id: number) {
    this.mealsService.deleteMealById(id);
  }

  handleEdit(id: number) {
    this.router.navigate([`meals/${id}`]);
  }
}
