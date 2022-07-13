import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsAccordionNestedComponent } from './ids-accordion-nested.component';

describe('IdsAccordionNestedComponent', () => {
  let component: IdsAccordionNestedComponent;
  let fixture: ComponentFixture<IdsAccordionNestedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsAccordionNestedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsAccordionNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
