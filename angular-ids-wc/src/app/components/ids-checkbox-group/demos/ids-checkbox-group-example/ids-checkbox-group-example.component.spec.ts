import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsCheckboxGroupExampleComponent } from './ids-checkbox-group-example.component';

describe('IdsCheckboxGroupExampleComponent', () => {
  let component: IdsCheckboxGroupExampleComponent;
  let fixture: ComponentFixture<IdsCheckboxGroupExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsCheckboxGroupExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsCheckboxGroupExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
