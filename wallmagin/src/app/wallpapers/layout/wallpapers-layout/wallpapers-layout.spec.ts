import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallpapersLayout } from './wallpapers-layout';

describe('WallpapersLayout', () => {
  let component: WallpapersLayout;
  let fixture: ComponentFixture<WallpapersLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WallpapersLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WallpapersLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
