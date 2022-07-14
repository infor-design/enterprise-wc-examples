import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsDropdownExampleComponent } from './ids-dropdown-example.component';

describe('IdsDropdownExampleComponent', () => {
  let component: IdsDropdownExampleComponent;
  let fixture: ComponentFixture<IdsDropdownExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsDropdownExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsDropdownExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
