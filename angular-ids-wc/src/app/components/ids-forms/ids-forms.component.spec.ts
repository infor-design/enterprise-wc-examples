import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsFormsComponent } from './ids-forms.component';

describe('IdsFormsComponent', () => {
  let component: IdsFormsComponent;
  let fixture: ComponentFixture<IdsFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
