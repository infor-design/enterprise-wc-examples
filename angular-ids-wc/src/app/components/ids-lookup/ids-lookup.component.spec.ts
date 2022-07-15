import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdsLookupComponent } from './ids-lookup.component';

describe('IdsLookupComponent', () => {
  let component: IdsLookupComponent;
  let fixture: ComponentFixture<IdsLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdsLookupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdsLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
