import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';

import {WorkoutsComponent} from './containers/workouts/workouts.component';
import {WorkoutComponent} from './containers/workout/workout.component';


const routes: Route[] = [
  {
    path: '',
    component: WorkoutsComponent
  },
  {
    path: 'add',
    component: WorkoutComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class WorkoutsRoutingModule { }
