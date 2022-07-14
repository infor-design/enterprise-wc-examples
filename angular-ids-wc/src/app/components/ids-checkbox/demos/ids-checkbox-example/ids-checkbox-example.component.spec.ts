import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsCheckboxExampleComponent } from './ids-checkbox-example.component';

describe('IdsCheckboxExampleComponent', () => {
  let component: IdsCheckboxExampleComponent;
  let fixture: ComponentFixture<IdsCheckboxExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsCheckboxExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsCheckboxExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
