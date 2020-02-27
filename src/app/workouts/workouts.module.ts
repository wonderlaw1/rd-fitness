import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkoutsComponent} from './containers/workouts/workouts.component';
import {WorkoutsRoutingModule} from './workouts.routing-module';
import {WorkoutComponent} from './containers/workout/workout.component';
import {WorkoutFormComponent} from './components/workout-form/workout-form.component';
import {SharedModule} from '../shared/shared.module';
import { CreditCardLogoDirective } from './directives/credit-card-logo.directive';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [WorkoutsComponent, WorkoutComponent, WorkoutFormComponent, CreditCardLogoDirective],
  imports: [
    CommonModule,
    WorkoutsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class WorkoutsModule {
}
