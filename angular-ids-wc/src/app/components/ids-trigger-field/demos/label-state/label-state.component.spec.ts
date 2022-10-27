import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelStateComponent } from './label-state.component';

describe('LabelStateComponent', () => {
  let component: LabelStateComponent;
  let fixture: ComponentFixture<LabelStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelStateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
