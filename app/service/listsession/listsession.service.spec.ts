import { TestBed, inject } from '@angular/core/testing';

import { ListsessionService } from './listsession.service';

describe('ListsessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListsessionService]
    });
  });

  it('should be created', inject([ListsessionService], (service: ListsessionService) => {
    expect(service).toBeTruthy();
  }));
});
