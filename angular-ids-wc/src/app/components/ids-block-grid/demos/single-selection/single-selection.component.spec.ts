import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSelectionComponent } from './single-selection.component';

describe('SingleSelectionComponent', () => {
  let component: SingleSelectionComponent;
  let fixture: ComponentFixture<SingleSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
