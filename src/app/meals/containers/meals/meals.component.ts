import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';

import {Meal} from '../../../core/models/meal.model';

import {MealsService} from '../../services/meals.service';


@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css'],
  providers: [MealsService]
})
export class MealsComponent implements OnInit {

  meals: Observable<Meal[]>;

  constructor(private mealsService: MealsService,
              private router: Router) {}

  ngOnInit(): void {
    this.meals = this.mealsService.getMeals();
  }

  async onNavigate(id: string) {
    await this.router.navigate([`meals/${id}`]);
  }
}
