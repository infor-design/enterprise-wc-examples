import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsMultiselectComponent } from './ids-multiselect.component';

describe('IdsMultiselectComponent', () => {
  let component: IdsMultiselectComponent;
  let fixture: ComponentFixture<IdsMultiselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsMultiselectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
