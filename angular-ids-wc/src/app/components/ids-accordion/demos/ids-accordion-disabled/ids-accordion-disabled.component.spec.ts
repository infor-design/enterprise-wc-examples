import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsAccordionDisabledComponent } from './ids-accordion-disabled.component';

describe('IdsAccordionDisabledComponent', () => {
  let component: IdsAccordionDisabledComponent;
  let fixture: ComponentFixture<IdsAccordionDisabledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsAccordionDisabledComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsAccordionDisabledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
