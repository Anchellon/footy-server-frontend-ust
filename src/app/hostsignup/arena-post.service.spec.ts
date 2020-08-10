import { TestBed } from '@angular/core/testing';

import { ArenaPostService } from './arena-post.service';

describe('ArenaPostService', () => {
  let service: ArenaPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArenaPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
