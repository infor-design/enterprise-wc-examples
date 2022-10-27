import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconAlignRightComponent } from './icon-align-right.component';

describe('IconAlignRightComponent', () => {
  let component: IconAlignRightComponent;
  let fixture: ComponentFixture<IconAlignRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconAlignRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconAlignRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
