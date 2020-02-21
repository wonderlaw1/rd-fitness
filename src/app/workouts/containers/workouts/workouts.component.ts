import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {switchMap, tap} from 'rxjs/operators';
import {Router} from '@angular/router';


import {Workout} from '../../../core/models/workout.model';

import {WorkoutsService} from '../../services/workouts.service';


@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css'],
  providers: [WorkoutsService]
})
export class WorkoutsComponent implements OnInit {

  isLoading: boolean;
  workouts: Workout[];

  constructor(private workoutsService: WorkoutsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.loadWorkouts().subscribe();
  }

  async onNavigate(id: string) {
    await this.router.navigate([`workouts/${id}`]);
  }

  onDelete(id: string): void {
    this.isLoading = true;

    this.workoutsService.deleteWorkout(id).pipe(
      switchMap(() => this.loadWorkouts()),
    ).subscribe();
  }

  private loadWorkouts = (): Observable<Workout[]> => {
    return this.workoutsService.getWorkouts().pipe(
      tap(workouts => this.workouts = workouts),
      tap(() => this.isLoading = false)
    );
  }
}
