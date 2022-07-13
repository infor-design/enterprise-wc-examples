import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsAccordionLpComponent } from './ids-accordion-lp.component';

describe('IdsAccordionLpComponent', () => {
  let component: IdsAccordionLpComponent;
  let fixture: ComponentFixture<IdsAccordionLpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsAccordionLpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsAccordionLpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
