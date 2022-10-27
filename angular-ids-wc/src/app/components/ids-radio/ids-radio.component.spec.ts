import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsRadioComponent } from './ids-radio.component';

describe('IdsRadioComponent', () => {
  let component: IdsRadioComponent;
  let fixture: ComponentFixture<IdsRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsRadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
