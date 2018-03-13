import { TestBed, inject } from '@angular/core/testing';

import { ChatstranslationService } from './chatstranslation.service';

describe('ChatstranslationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatstranslationService]
    });
  });

  it('should be created', inject([ChatstranslationService], (service: ChatstranslationService) => {
    expect(service).toBeTruthy();
  }));
});
