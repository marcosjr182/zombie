/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SurvivorService } from './survivor.service';

describe('Service: Survivor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SurvivorService]
    });
  });

  it('should ...', inject([SurvivorService], (service: SurvivorService) => {
    expect(service).toBeTruthy();
  }));
});
