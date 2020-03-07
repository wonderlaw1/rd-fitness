import { TestBed } from '@angular/core/testing';

import { WorkoutsService } from './workouts.service';
import {WorkoutsApiService} from '../../core/services/workouts.api-service';
import {RouterTestingModule} from '@angular/router/testing';
import {LoaderService} from '../../core/services/loader.service';
import loader from '@angular-devkit/build-angular/src/angular-cli-files/plugins/single-test-transform';
import {of} from 'rxjs';
import SpyObj = jasmine.SpyObj;
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

const apiMethods = [
  'getWorkout',
  'getWorkouts',
  'deleteWorkout',
  'createWorkout',
  'updateWorkout'
];

fdescribe('MealsService', () => {
  let service: WorkoutsService;
  let apiService: SpyObj<WorkoutsApiService>;
  let loaderService: SpyObj<LoaderService>;

  beforeEach(() => {
    apiService = jasmine.createSpyObj('WorkoutsApiService', apiMethods);
    loaderService = jasmine.createSpyObj('LoaderService', ['hide', 'show']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        WorkoutsService,
        {
          provide: WorkoutsApiService,
          useValue: apiService
        },
        {
          provide: LoaderService,
          useValue: loaderService
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
    service = TestBed.inject(WorkoutsService);
  });

  it('should be created', () => {

    expect(service).toBeTruthy();
  });

  describe('deleteWorkoutById()', () => {
    it('should delete workout by id', () => {
      spyOn(service, 'getWorkouts' as any).and.returnValue(of([{}]));
      spyOn(service, 'onWorkoutsReceive' as any);
      apiService.deleteWorkout.and.returnValue(of({}));

      service.deleteWorkoutById(2);

      expect(loaderService.show).toHaveBeenCalled();
      // tslint:disable-next-line
      expect(service['getWorkouts']).toHaveBeenCalled();
      // tslint:disable-next-line
      expect(service['onWorkoutsReceive']).toHaveBeenCalled();
    });
  });

  describe('getWorkouts()', () => {
    it('should get workouts', () => {
        // tslint:disable-next-line
        service['getWorkouts']();
        expect(apiService.getWorkouts).toHaveBeenCalled();
    });
  });
});
