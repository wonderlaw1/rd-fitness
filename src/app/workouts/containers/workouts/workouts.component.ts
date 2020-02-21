import {Component, OnInit} from '@angular/core';
import {WorkoutsService} from '../../services/workouts.service';
import {Observable} from 'rxjs';
import {Workout} from '../../../core/models/workout.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css'],
  providers: [WorkoutsService]
})
export class WorkoutsComponent implements OnInit {

  workouts$: Observable<Workout[]>;

  constructor(private workoutsService: WorkoutsService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.workouts$ = this.workoutsService.getWorkouts();
  }

  async onNavigate(id: string) {
    await this.router.navigate([`workouts/${id}`]);
  }

  onDelete(id: string) {
    console.log('delete: ', id);
  }
}
