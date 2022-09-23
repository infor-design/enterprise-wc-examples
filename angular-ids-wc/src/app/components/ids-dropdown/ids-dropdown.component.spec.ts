import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsDropdownComponent } from './ids-dropdown.component';

describe('IdsDropdownComponent', () => {
  let component: IdsDropdownComponent;
  let fixture: ComponentFixture<IdsDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
