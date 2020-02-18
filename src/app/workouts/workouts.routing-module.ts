import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import {WorkoutsComponent} from './containers/workouts/workouts.component';

const routes: Route[] = [
  {
    path: '',
    component: WorkoutsComponent
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
export class WorkoutsRoutingModule { }
