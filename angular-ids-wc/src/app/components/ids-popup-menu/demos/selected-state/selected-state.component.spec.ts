import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedStateComponent } from './selected-state.component';

describe('SelectedStateComponent', () => {
  let component: SelectedStateComponent;
  let fixture: ComponentFixture<SelectedStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedStateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
