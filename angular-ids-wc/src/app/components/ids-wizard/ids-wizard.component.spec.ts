import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsWizardComponent } from './ids-wizard.component';

describe('IdsWizardComponent', () => {
  let component: IdsWizardComponent;
  let fixture: ComponentFixture<IdsWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsWizardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
