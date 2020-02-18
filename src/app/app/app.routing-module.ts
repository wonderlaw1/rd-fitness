import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'schedule'
  },
  {
    path: 'schedule',
    loadChildren: () => import('../schedule/schedule.module').then(m => m.ScheduleModule)
  },
  {
    path: 'meals',
    loadChildren: () => import('../meals/meals.module').then(m => m.MealsModule)
  },
  {
    path: 'workouts',
    loadChildren: () => import('../workouts/workouts.module').then(m => m.WorkoutsModule)
  },
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
