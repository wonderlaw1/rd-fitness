import {Component, OnInit} from '@angular/core';
import {debounceTime, distinctUntilChanged, switchMap, tap} from 'rxjs/operators';

import {Workout} from '../../../core/models/workout.model';
import {WorkoutsService} from '../../services/workouts.service';
import {FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css'],
  providers: [WorkoutsService]
})
export class WorkoutsComponent implements OnInit {

  workouts: Workout[];
  searchControl = new FormControl();

  constructor(private workoutsService: WorkoutsService,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    this.workoutsService.loadWorkouts().subscribe();
    this.workoutsService.workouts.pipe(
      tap(meals => this.workouts = meals)
    ).subscribe();
    this.searchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(
        (value) => this.http.get(`http://localhost:3000/workouts?name_like=${value}`)
      ),
      tap(e => console.log(e))
    ).subscribe();
  }

  handleDelete(id: number) {
    this.workoutsService.deleteWorkoutById(id).subscribe();
  }

  handleEdit(id: number): void {
    this.workoutsService.navigateById(id);
  }

}
