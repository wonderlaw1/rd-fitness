import { TestBed } from '@angular/core/testing';

import { WorkoutsService } from './workouts.service';
import {WorkoutsApiService} from '../../core/services/workouts.api-service';
import {LoaderService} from '../../core/services/loader.service';
import {RouterTestingModule} from '@angular/router/testing';
import {Router, RouterModule} from '@angular/router';
import {of} from 'rxjs';
import {Workout} from '../../core/models/workout.model';
import SpyObj = jasmine.SpyObj;


fdescribe('WorkoutsService', () => {

  let service: WorkoutsService;
  let loaderService: SpyObj<LoaderService>;
  let workoutsApiService: SpyObj<WorkoutsApiService>;

  beforeEach(() => {
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
    loaderService = TestBed.inject(LoaderService) as SpyObj<LoaderService>;
    workoutsApiService = TestBed.inject(WorkoutsApiService) as SpyObj<WorkoutsApiService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should delete workout by id', () => {
    const getWorkoutsSpy = spyOn(service, 'getWorkouts' as any).and.returnValue(of({}));
    const workoutsReceiveSpy = spyOn(service, 'onWorkoutsReceive' as any);
    workoutsApiService.deleteWorkout.and.returnValue(of({}));

    service.deleteWorkoutById(1);

    expect(loaderService.show).toHaveBeenCalledTimes(1);
    expect(workoutsApiService.deleteWorkout).toHaveBeenCalledTimes(1);
    expect(getWorkoutsSpy).toHaveBeenCalledTimes(1);
    expect(workoutsReceiveSpy).toHaveBeenCalledTimes(1);
  });

  it('Should get workout by id', () => {
    workoutsApiService.getWorkout.and.returnValue(of({} as Workout));

    service.getWorkoutById(1).subscribe();

    expect(loaderService.show).toHaveBeenCalledTimes(1);
    expect(workoutsApiService.getWorkout).toHaveBeenCalledTimes(1);
    expect(loaderService.hide).toHaveBeenCalledTimes(1);
  });
});
