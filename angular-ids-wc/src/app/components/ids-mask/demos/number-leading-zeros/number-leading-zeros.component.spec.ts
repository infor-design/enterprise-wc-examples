import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberLeadingZerosComponent } from './number-leading-zeros.component';

describe('NumberLeadingZerosComponent', () => {
  let component: NumberLeadingZerosComponent;
  let fixture: ComponentFixture<NumberLeadingZerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberLeadingZerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberLeadingZerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
