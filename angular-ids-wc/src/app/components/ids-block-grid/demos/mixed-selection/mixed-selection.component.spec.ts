import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedSelectionComponent } from './mixed-selection.component';

describe('MixedSelectionComponent', () => {
  let component: MixedSelectionComponent;
  let fixture: ComponentFixture<MixedSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixedSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MixedSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
