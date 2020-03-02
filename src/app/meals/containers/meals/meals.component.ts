import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
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
export class MealsComponent implements OnInit {

  meals$: Observable<Meal[]>;

  constructor(private mealsService: MealsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.meals$ = this.mealsService.meals;
    this.mealsService.loadMeals().subscribe();
  }

  handleDelete(id: number) {
    this.mealsService.deleteMealById(id).subscribe();
  }

  handleEdit(id: number) {
    this.router.navigate([`meals/${id}`]);
  }
}
