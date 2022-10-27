import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoFitComponent } from './auto-fit.component';

describe('AutoFitComponent', () => {
  let component: AutoFitComponent;
  let fixture: ComponentFixture<AutoFitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoFitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoFitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
