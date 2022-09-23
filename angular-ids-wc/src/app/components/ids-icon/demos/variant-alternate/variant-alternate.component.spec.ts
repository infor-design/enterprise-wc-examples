import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariantAlternateComponent } from './variant-alternate.component';

describe('VariantAlternateComponent', () => {
  let component: VariantAlternateComponent;
  let fixture: ComponentFixture<VariantAlternateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariantAlternateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariantAlternateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
