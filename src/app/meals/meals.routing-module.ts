import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import {MealsComponent} from './containers/meals/meals.component';
import {MealComponent} from './containers/meal/meal.component';

const routes: Route[] = [
  {
    path: '',
    component: MealsComponent
  },
  {
    path: 'add',
    component: MealComponent
  },
  {
    path: ':id',
    component: MealComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MealsRoutingModule { }
