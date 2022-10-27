import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizedDatesComponent } from './localized-dates.component';

describe('LocalizedDatesComponent', () => {
  let component: LocalizedDatesComponent;
  let fixture: ComponentFixture<LocalizedDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalizedDatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalizedDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
