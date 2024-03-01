import { TestBed } from '@angular/core/testing';

import { MusicItemsService } from './music-items.service';

describe('MusicItemsService', () => {
  let service: MusicItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
