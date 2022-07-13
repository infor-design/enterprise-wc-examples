import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsAccordionExampleComponent } from './ids-accordion-example.component';

describe('ExampleComponent', () => {
  let component: IdsAccordionExampleComponent;
  let fixture: ComponentFixture<IdsAccordionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsAccordionExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsAccordionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
