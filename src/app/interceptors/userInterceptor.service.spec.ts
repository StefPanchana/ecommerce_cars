/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserInterceptorService } from './userInterceptor.service';

describe('Service: UserInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserInterceptorService]
    });
  });

  it('should ...', inject([UserInterceptorService], (service: UserInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
