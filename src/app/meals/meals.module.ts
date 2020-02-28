import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MealsComponent } from './containers/meals/meals.component';
import {MealsRoutingModule} from './meals.routing-module';
import { MealComponent } from './containers/meal/meal.component';
import { MealFormComponent } from './components/meal-form/meal-form.component';
import {SharedModule} from '../shared/shared.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [MealsComponent, MealComponent, MealFormComponent, LoginFormComponent],
  imports: [
    CommonModule,
    MealsRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class MealsModule { }
