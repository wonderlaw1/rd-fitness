import {Component, OnInit} from '@angular/core';
import {tap} from 'rxjs/operators';

import {Workout} from '../../../core/models/workout.model';
import {WorkoutsService} from '../../services/workouts.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css'],
  providers: [WorkoutsService]
})
export class WorkoutsComponent implements OnInit {

  workouts: Workout[];

  constructor(private workoutsService: WorkoutsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.workoutsService.loadWorkouts().subscribe();
    this.workoutsService.workouts.pipe(
      tap(meals => this.workouts = meals)
    ).subscribe();
  }

  handleDelete(id: number) {
    this.workoutsService.deleteWorkoutById(id).subscribe();
  }

  handleEdit(id: number) {
    this.router.navigate([`workouts/${id}`]);
  }
}
