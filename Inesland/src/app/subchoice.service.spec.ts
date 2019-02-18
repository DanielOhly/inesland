import { TestBed } from '@angular/core/testing';

import { SubchoiceService } from './subchoice.service';

describe('SubchoiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubchoiceService = TestBed.get(SubchoiceService);
    expect(service).toBeTruthy();
  });
});
