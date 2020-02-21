import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

import {Meal} from '../../../core/models/meal.model';

import {MealsService} from '../../services/meals.service';
import {tap} from 'rxjs/operators';


@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css'],
  providers: [MealsService]
})
export class MealsComponent implements OnInit {

  meals$: Observable<Meal[]>;

  constructor(private mealsService: MealsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loadMeals();
  }

  async onNavigate(id: string) {
    await this.router.navigate([`meals/${id}`]);
  }

  onDelete(id: string): void {
    this.mealsService.deleteMeal(id).pipe(
      tap(this.loadMeals)
    ).subscribe();
  }

  private loadMeals = (): void => {
    this.meals$ = this.mealsService.getMeals();
  }
}
