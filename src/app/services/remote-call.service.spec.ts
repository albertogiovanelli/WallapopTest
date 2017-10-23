import { TestBed, inject } from '@angular/core/testing';

import { RemoteCallService } from './remote-call.service';

describe('RemoteCallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemoteCallService]
    });
  });

  it('should be created', inject([RemoteCallService], (service: RemoteCallService) => {
    expect(service).toBeTruthy();
  }));
});
