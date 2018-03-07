import { TestBed, inject } from '@angular/core/testing';

import { ChatsmainService } from './chatsmain.service';

describe('ChatsmainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatsmainService]
    });
  });

  it('should be created', inject([ChatsmainService], (service: ChatsmainService) => {
    expect(service).toBeTruthy();
  }));
});
