import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import {ScheduleComponent} from './containers/schedule/schedule.component';

const routes: Route[] = [
  {
    path: '',
    component: ScheduleComponent
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
export class ScheduleRoutingModule { }
