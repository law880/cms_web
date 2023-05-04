import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMusicItemComponent } from './create-music-item.component';

describe('CreateMusicItemComponent', () => {
  let component: CreateMusicItemComponent;
  let fixture: ComponentFixture<CreateMusicItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMusicItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMusicItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
