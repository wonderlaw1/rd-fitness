import {ChangeDetectionStrategy, Component} from '@angular/core';

import {Workout} from '../../../core/models/workout.model';
import {WorkoutsService} from '../../services/workouts.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css'],
  providers: [WorkoutsService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkoutsComponent {

  workouts$: Observable<Workout[]> = this.workoutsService.workouts;

  constructor(private workoutsService: WorkoutsService,
              private router: Router) {
    this.workoutsService.loadWorkouts();
  }

  handleDelete(id: number) {
    this.workoutsService.deleteWorkoutById(id);
  }

  handleEdit(id: number) {
    this.router.navigate([`workouts/${id}`]);
  }
}
