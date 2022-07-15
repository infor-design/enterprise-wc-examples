import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsInputComponent } from './ids-input.component';

describe('IdsInputComponent', () => {
  let component: IdsInputComponent;
  let fixture: ComponentFixture<IdsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
