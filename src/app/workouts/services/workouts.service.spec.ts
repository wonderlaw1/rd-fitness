import { TestBed } from '@angular/core/testing';

import { WorkoutsService } from './workouts.service';
import {WorkoutsApiService} from '../../core/services/workouts.api-service';
import {LoaderService} from '../../core/services/loader.service';
import {RouterTestingModule} from '@angular/router/testing';
import {Router, RouterModule} from '@angular/router';


fdescribe('WorkoutsService', () => {

  let service: WorkoutsService;

  const workoutsApiServiceSpy = jasmine.createSpyObj<WorkoutsApiService>('WorkoutsApiService', [
    'getWorkout',
    'getWorkouts',
    'deleteWorkout',
    'createWorkout',
    'updateWorkout',
  ]);
  const loaderServiceSpy = jasmine.createSpyObj<LoaderService>('LoaderService', [
    'hide',
    'show'
  ]);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [WorkoutsService,
        {
          provide: WorkoutsApiService,
          useValue: workoutsApiServiceSpy
        },
        {
          provide: LoaderService,
          useValue: loaderServiceSpy
        }
      ]
    });

    service = TestBed.inject(WorkoutsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
