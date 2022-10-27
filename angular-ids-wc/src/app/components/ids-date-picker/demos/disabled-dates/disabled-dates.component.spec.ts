import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledDatesComponent } from './disabled-dates.component';

describe('DisabledDatesComponent', () => {
  let component: DisabledDatesComponent;
  let fixture: ComponentFixture<DisabledDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisabledDatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisabledDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
