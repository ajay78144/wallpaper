import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayWallpapers } from './display-wallpapers';

describe('DisplayWallpapers', () => {
  let component: DisplayWallpapers;
  let fixture: ComponentFixture<DisplayWallpapers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayWallpapers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayWallpapers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
