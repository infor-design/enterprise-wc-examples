import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsReactiveFormsComponent } from './ids-reactive-forms.component';

describe('IdsReactiveFormsComponent', () => {
  let component: IdsReactiveFormsComponent;
  let fixture: ComponentFixture<IdsReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsReactiveFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
