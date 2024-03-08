import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicItemsListComponent } from './music-items-list.component';

describe('MusicItemsListComponent', () => {
  let component: MusicItemsListComponent;
  let fixture: ComponentFixture<MusicItemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicItemsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
