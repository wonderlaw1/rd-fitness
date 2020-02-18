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
  }
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})
export class MealsRoutingModule { }
