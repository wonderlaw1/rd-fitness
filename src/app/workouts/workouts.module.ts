import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutsComponent } from './containers/workouts/workouts.component';
import {WorkoutsRoutingModule} from './workouts.routing-module';



@NgModule({
  declarations: [WorkoutsComponent],
  imports: [
    CommonModule,
    WorkoutsRoutingModule
  ]
})
export class WorkoutsModule { }
