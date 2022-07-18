import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskAttributeComponent } from './mask-attribute.component';

describe('MaskAttributeComponent', () => {
  let component: MaskAttributeComponent;
  let fixture: ComponentFixture<MaskAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaskAttributeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaskAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
