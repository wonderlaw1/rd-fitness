import { TestBed } from '@angular/core/testing';

import { MealsApiService } from './meals.api-service';

describe('MealsService', () => {
  let service: MealsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
