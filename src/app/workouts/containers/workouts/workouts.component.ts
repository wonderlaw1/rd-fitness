import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

import {Workout} from '../../../core/models/workout.model';
import {WorkoutsService} from '../../services/workouts.service';


@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css'],
  providers: [WorkoutsService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkoutsComponent implements OnInit {

  workouts$: Observable<Workout[]>;

  constructor(private workoutsService: WorkoutsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.workouts$ = this.workoutsService.workouts;
    this.workoutsService.loadWorkouts().subscribe();
  }

  handleDelete(id: number) {
    this.workoutsService.deleteWorkoutById(id).subscribe();
  }

  handleEdit(id: number) {
    this.router.navigate([`workouts/${id}`]);
  }
}
