import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleTextSelectionComponent } from './multiple-text-selection.component';

describe('MultipleTextSelectionComponent', () => {
  let component: MultipleTextSelectionComponent;
  let fixture: ComponentFixture<MultipleTextSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleTextSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleTextSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
