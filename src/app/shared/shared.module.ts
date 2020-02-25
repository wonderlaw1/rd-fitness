import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './components/list-item/list-item.component';
import { JoinPipe } from './pipes/join.pipe';
import { WorkoutsPipe } from './pipes/workouts.pipe';


@NgModule({
  declarations: [ListItemComponent, JoinPipe, WorkoutsPipe],
  imports: [
    CommonModule
  ],
  exports: [
    ListItemComponent,
    JoinPipe,
    WorkoutsPipe
  ]
})
export class SharedModule {
}
