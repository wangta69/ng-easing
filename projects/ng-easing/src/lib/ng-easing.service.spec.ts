import { TestBed, inject } from '@angular/core/testing';

import { NgEasingService } from './ng-easing.service';

describe('NgEasingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgEasingService]
    });
  });

  it('should be created', inject([NgEasingService], (service: NgEasingService) => {
    expect(service).toBeTruthy();
  }));
});
