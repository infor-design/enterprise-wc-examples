import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsSearchFieldComponent } from './ids-search-field.component';

describe('IdsSearchFieldComponent', () => {
  let component: IdsSearchFieldComponent;
  let fixture: ComponentFixture<IdsSearchFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsSearchFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsSearchFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
