import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListItemComponent } from './list-item/list-item.component';
import {WorkoutPipe} from './pipes/workout.pipe';
import {JoinPipe} from './pipes/join.pipe';


@NgModule({
  declarations: [ListItemComponent, WorkoutPipe, JoinPipe],
  imports: [
    CommonModule
  ],
  exports: [
    ListItemComponent
  ]
})
export class SharedModule { }
