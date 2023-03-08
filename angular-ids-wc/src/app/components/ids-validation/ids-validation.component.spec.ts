import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsValidationComponent } from './ids-validation.component';

describe('IdsValidationComponent', () => {
  let component: IdsValidationComponent;
  let fixture: ComponentFixture<IdsValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
