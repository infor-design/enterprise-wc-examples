import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsAccordionIconComponent } from './ids-accordion-icon.component';

describe('IdsAccordionIconComponent', () => {
  let component: IdsAccordionIconComponent;
  let fixture: ComponentFixture<IdsAccordionIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsAccordionIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsAccordionIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
