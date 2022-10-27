import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsAccordionComponent } from './ids-accordion.component';

describe('IdsAccordionComponent', () => {
  let component: IdsAccordionComponent;
  let fixture: ComponentFixture<IdsAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsAccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
