import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsFieldsetComponent } from './ids-fieldset.component';

describe('IdsFieldsetComponent', () => {
  let component: IdsFieldsetComponent;
  let fixture: ComponentFixture<IdsFieldsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsFieldsetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsFieldsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
