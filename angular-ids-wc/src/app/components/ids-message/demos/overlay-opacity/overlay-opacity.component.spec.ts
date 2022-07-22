import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayOpacityComponent } from './overlay-opacity.component';

describe('OverlayOpacityComponent', () => {
  let component: OverlayOpacityComponent;
  let fixture: ComponentFixture<OverlayOpacityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayOpacityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverlayOpacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
